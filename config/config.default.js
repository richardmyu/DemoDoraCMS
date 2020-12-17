'use strict';

const path = require('path');
const fs = require('fs');
const defaultConfig = require('./ext/config');

const ONE_DAY = 24 * 3600 * 1000;

module.exports = appInfo => {
  return {
    keys: 'demodoracms',

    cluster: {
      listen: {
        port: 8080,
        hostname: '',
      },
    },

    session: {
      key: 'DORA_SESS',
      maxAge: ONE_DAY, // 1 day
      httpOnly: true,
      encrypt: true,
      renew: true, // 延长会话有效期
    },

    // 前台会员登录有效时间
    userMaxAge: ONE_DAY,
    // 后台会员登录有效时间
    adminUserMaxAge: ONE_DAY,

    // 设置网站图标
    siteFile: {
      '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.ico')),
    },

    // 配置需要的中间件，数组顺序即为中间件加载顺序
    middleware: ['notfoundHandler', 'crossHeader', 'compress', 'authUserToken', 'authAdminToken', 'authAdminPower'],

    // gzip 压缩
    compress: {
      threshold: 2048,
    },

    // 会员中心权限校验
    authPage: {
      threshold: 1024, // 小于 1k 的响应体不压缩
    },

    // nunjucks 模板引擎
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.html': 'nunjucks',
      },
    },

    // 国际化
    il8n: {
      defaultLocale: 'zh-CN',
    },

    // CDN
    origin: 'https://cdn.html-js.cn',
    // 系统服务提供商
    demodoracms_api: 'https://api.html-js.cn',

    // 模板文件
    temp_static_forder: process.cwd() + '/app/public/themes/',
    temp_view_forder: process.cwd() + '/app/view/',
    temp_locales_forder: process.cwd() + '/config/ocale/',

    // 后台管理根目录
    admin_base_path: '/admin',

    // 加密解密
    session_secret: 'demodoracms_secret',
    auth_cookie_name: 'demodoracms',
    encrypt_key: 'demodora',
    salt_aes_key: 'demodoracms_',
    salt_md5_key: 'demodora',

    // 安全性校验
    security: {
      csrf: {
        enable: false,
      },
    },

    // api 跨域
    crossHeader: {
      match: ['/api'],
    },

    // 后台 token 验证
    authAdminToken: {
      ignore: ['/manage', '/admin'],
    },
    // 后台权限验证
    authAdminPower: {
      match: ['/manage'],
    },
    // 前台用户校验
    authUserToken: {
      ignore: ['/manage', '/admin'],
    },

    // 文件上传
    multipart: {
      fileSize: '5mb',
      mode: 'stream',
      fileExtensions: ['.doc', '.docx', '.pdf'], // 扩展几种上传的文件格式
    },

    // 数据备份定时
    backUpTick: '0 0 0 */ * ?', // 每天 0 点执行一次

    // ROUTER

    backUpDataRouter: {
      match: [ctx => ctx.path.startsWith('/manage/backupDataManage')],
    },

    uploadFileRouter: {
      uploadFileFormat: {
        upload_path: process.cwd() + '/app/public',
        static_root_path: 'cms', // 针对云储存可设置
      },
    },

    // CONFIG_NORMALPLUGIN

    regUserRouter: {
      match: [ctx => ctx.path.startsWith('/manage/regUser'), ctx => ctx.path.startsWith('/api/user')],
    },

    adsRouter: {
      match: [ctx => ctx.path.startsWith('/manage/ads'), ctx => ctx.path.startsWith('/api/ads')],
    },

    announceRouter: {
      match: [ctx => ctx.path.startsWith('/manage/systemAnnounce')],
    },

    contentRouter: {
      match: [ctx => ctx.path.startsWith('/manage/content'), ctx => ctx.path.startsWith('/api/content')],
    },

    contentCategoryRouter: {
      match: [ctx => ctx.path.startsWith('/manage/contentCategory'), ctx => ctx.path.startsWith('/api/contentCategory')],
    },

    contentMessageRouter: {
      match: [ctx => ctx.path.startsWith('/manage/contentMessage'), ctx => ctx.path.startsWith('/api/contentMessage')],
    },

    contentTagRouter: {
      match: [ctx => ctx.path.startsWith('/manage/contentTag'), ctx => ctx.path.startsWith('/api/contentTag')],
    },

    contentTempRouter: {
      match: [
        '/manage/template/getTemplateForderList',
        '/manage/template/getTemplateFileText',
        '/manage/template/updateTemplateFileText',
        '/api/contentTemplate/getDefaultTempiNFO',
      ],
    },

    helpCenterRouter: {
      match: [ctx => ctx.path.startsWith('/manage/helpCenter'), ctx => ctx.path.startsWith('/api/helpCenter')],
    },

    sideMessageRouter: {
      match: [ctx => ctx.path.startsWith('/manage/sideMessage'), ctx => ctx.path.startsWith('/api/sideMessage')],
    },

    systemNotifyRouter: {
      match: [ctx => ctx.path.startsWith('/manage/systemNotify'), ctx => ctx.path.startsWith('/api/systemNotify')],
    },

    systemOptionLogRouter: {
      match: [ctx => ctx.path.startsWith('/manage/systemOptionLog')],
    },

    tempalteConfigRouter: {
      match: [
        '/manage/template/getMyTemplateList',
        '/manage/template/addTemplateItem',
        '/manage/template/delTemplateItem',
        '/manage/template/getTemplateItemList',
        '/manage/template/getTempsFromShop',
        '/manage/template/installTemp',
        '/manage/template/upateTemp',
        '/manage/template/uploadCMSTemplate',
        '/manage/template/enableTemp',
        '/manage/template/uninstallTemp',
      ],
    },

    versionManageRouter: {
      match: [ctx => ctx.path.startsWith('/manage/versionManage'), ctx => ctx.path.startsWith('/api/versionManage')],
    },

    mailTemplateRouter: {
      match: [ctx => ctx.path.startsWith('/manage/mailTemplate'), ctx => ctx.path.startsWith('/api/mailTemplate')],
    },

    mailDeliveryRouter: {
      match: [ctx => ctx.path.startsWith('/manage/mailDelivery'), ctx => ctx.path.startsWith('/api/mailDelivery')],
    },

    doraMiddleStageRouter: {
      match: [ctx => ctx.path.startsWith('/manage/singleUser')],
    },

    // EGG-CONFIG-DEFAULT
    ...defaultConfig,

  };
};

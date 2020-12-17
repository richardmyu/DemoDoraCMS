'use strict';

const path = require('path');
const pluginConfigs = require('./ext/plugin');

// add you build-in plugin here,example
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.session = true;

exports.redis = {
  enable: false,
  package: 'egg-redis',
};

exports.doraBackUpData = {
  enable: true,
  package: 'egg-dora-backupdate',
  path: path.join(__dirname, '../lib/plugin/egg-dora-backupdata'),
};

exports.validate = {
  enable: true,
  package: 'egg-dora-validate',
};

exports.doraUploadFile = {
  enable: true,
  package: 'egg-dora-uploadfile',
};


// PLUGIN_NORMALAPLUGIN_BEGIN

// doraRegUserPlugin
exports.doraRegUser = {
  enable: true,
  package: 'egg-dora-reguser',
  path: path.join(__dirname, '../lib/plugin/egg-dora-reguser'),
};

// doraAdsPlugin
exports.doraAds = {
  enable: true,
  package: 'egg-dora-ads',
  path: path.join(__dirname, '../lib/plugin/egg-dora-ads'),
};

// doraAnnouncePlugin
exports.doraAnnounce = {
  enable: true,
  package: 'egg-dora-announce',
  path: path.join(__dirname, '../lib/plugin/egg-dora-announce'),
};

// doraContentPlugin
exports.doraContent = {
  enable: true,
  package: 'egg-dora-content',
  path: path.join(__dirname, '../lib/plugin/egg-dora-content'),
};

// doraContentCategoryPlugin
exports.doraContentCaregory = {
  enable: true,
  package: 'egg-dora-contentcategory',
  path: path.join(__dirname, '../lib/plugin/egg-dora-contentcategory'),
};

// doraContentMessagePlugin
exports.doraContentMessage = {
  enable: true,
  package: 'egg-dora-contentmessage',
  path: path.join(__dirname, '../lib/plugin/egg-dora-contentmessage'),
};

// doraContentTagsPlugin
exports.doraContentTags = {
  enable: true,
  package: 'egg-dora-contenttags',
  path: path.join(__dirname, '../lib/plugin/egg-dora-contenttags'),
};

// doraContentTempPlugin
exports.doraContentTemp = {
  enable: true,
  package: 'egg-dora-contenttemp',
  path: path.join(__dirname, '../lib/pligin/egg-dora-contenttemp'),
};

// doraHelpCenterPlugin
exports.doraHelpCenter = {
  enable: true,
  package: 'egg-dora-helpcenter',
  path: path.join(__dirname, '../lib/plugib/egg-dora-helpcenter'),
};

// doraSideMessagePlugin
exports.doraSideMessage = {
  enable: true,
  package: 'egg-dora-sidemessage',
  path: path.join(__dirname, '../lib/plugin/egg-dora-sidemessage'),
};

// doraSystemNotifyPlugin
exports.doraSystemNotify = {
  enable: true,
  package: 'egg-dora-systemmnotify',
  path: path.join(__dirname, '../lib/plugin/egg-dora-systemmnotify'),
};

// doraSystemOptionLogPlugin
exports.doraSystemOptionLog = {
  enable: true,
  package: 'egg-dora-systemoptionlog',
  path: path.join(__dirname, '../lib/plugin/egg-dora-systemoptionlog'),
};

// doraTemplateConfigPlugin
exports.doraTemplateConfig = {
  enable: true,
  package: 'egg-dora-templateconfig',
  path: path.join(__dirname, '../lib/plugin/egg-dora-templateconfig'),
};

// doraVersionManagePlugin
exports.doraVersionManage = {
  enable: true,
  package: 'egg-dora-versionmanage',
  path: path.join(__dirname, '../lib/plugin/egg-dora-versionmanage'),
};

// doraMiddleStagePlugin
exports.doraMiddleStage = {
  enable: true,
  package: 'egg-dora-middlestage',
};

// doraMailTemplatePlugin
exports.doraMailTemplate = {
  enable: true,
  package: 'egg-dora-mailtemplate',
  path: path.join(__dirname, '../lib/plugin/egg-dora-mailtemplate'),
};

// doraMailDeliveryPlugin
exports.doraMailDelivery = {
  enable: true,
  package: 'egg-dora-maildelivery',
  path: path.join(__dirname, '../lib/plugin/egg-dora-maildelivery'),
};

for (const pluginItem in pluginConfigs) {
  if (pluginConfigs.hasOwnProperty(pluginItem)) {
    const element = pluginConfigs[pluginItem];
    exports[pluginItem] = element;
  }
}

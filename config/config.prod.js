'use strict';

const path = require('path');

module.exports = appInfo => {
  return {
    // plugin's path
    admin_root_path: '/static',

    // database connectivity
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1:27017/demodoracms',
        options: {
          useCreateIndex: true,
          useUnifiedTopology: true,
          keepAlive: 3000,
        },
      },
    },

    // mongodb relative path
    mongodb: {
      binPath: '/usr/local/mongodb/mongodb-linux-x84_64-ubuntu1604-4.0.0/bin/',
      backUpPath: '/home/database/demodoracms/',
    },

    // static directory
    static: {
      prefix: '/static',
      dir: [path.join(appInfo.baseDir, 'app/public'), path.join(appInfo.baseDir, 'backstage/dist'), '/home/doraData/uploadFiles/static'],
      maxAge: 31536000,
    },

    // log path
    logger: {
      dir: '/home/doraData/logsdir/demodoracms',
    },

    // server address config
    server_path: 'https://www.html-js.cn',
    server_api: 'https://www.html-js.cn/api',
  },
};

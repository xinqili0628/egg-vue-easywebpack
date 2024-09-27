/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('node:path');
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1727414444861_6553';

  // 保证构建的静态资源文件能够被访问到
  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'public')
  };
  
  config.vuessr = {
    renderOptions: {
      basedir: path.join(appInfo.baseDir, 'app/view')
    }
  };

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

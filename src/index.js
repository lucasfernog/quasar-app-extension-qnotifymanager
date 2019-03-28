/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendWithNotifyManager = function (api, conf) {
  // make sure there is a plugins array
  if (!conf.framework.plugins) {
    conf.framework.plugins = []
  }

  // for brevity
  let plugins = conf.framework.plugins

  // make sure directive Notify is added
  if (!plugins.includes('Notify')) {
    console.log(` App Extension (qNotifyManager) Info: 'Adding Notify plugin - consider adding this to your quasar.conf.js'`)
    plugins.push('Notify')
  }

  // make sure there is a boot array
  if (!conf.boot) {
    conf.boot = []
  }

  // for brevity
  let boot = conf.boot

  // make sure qnotifymanager boot file is registered
  if (!boot.includes('qnotifymanager')) {
    boot.push('qnotifymanager')
    console.log(` App Extension (qnotifymanager) Info: 'Adding qnotifymanager boot reference to your quasar.conf.js'`)
  }

  // make sure qnotifymanagerinit boot file is registered
  if (!boot.includes('~quasar-app-extension-qnotifymanager/boot/notifymanagerinit.js')) {
    boot.push('~quasar-app-extension-qnotifymanager/boot/notifymanagerinit.js')
    // make sure boot file transpiles
    conf.build.transpileDependencies.push(/quasar-app-extension-qnotifymanager[\\/]boot/)
    console.log(` App Extension (qnotifymanager) Info: 'Adding notifymanagerinit boot reference to your quasar.conf.js'`)
  }
}

module.exports = function (api, ctx) {
  // extend quasar.conf
  api.extendQuasarConf((conf) => {
    extendWithNotifyManager(api, conf)
  })
}
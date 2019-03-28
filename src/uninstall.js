/**
 * Quasar App Extension uninstall script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/UninstallAPI.js
 */
const fs = require('fs')
const path = require('path')

module.exports = function (api) {
  let qnotifymanagerBootFile = path.resolve(process.cwd(), './src/boot/qnotifymanager.js')
  if (fs.existsSync(qnotifymanagerBootFile)) {
    fs.unlinkSync(qnotifymanagerBootFile)
    console.log(`App Extension (qnotifymanager) Info: 'qnotifymanager boot file removed'`)
  }
}

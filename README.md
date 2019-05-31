qnotifymanager (quasar-app-extension-qnotifymanager)
===

qnotifymanager is an `UI App Extension` for [Quasar Framework v1](https://v1.quasar-framework.org/). It will not work with legacy versions of Quasar Framework.

This work is currently in `beta` and there are expected changes while things get worked out. Your help with testing is greatly appreciated.

# Installation
To add this App Extension to your Quasar application, run the following (in your Quasar app folder):
```
quasar ext add @quasar/qnotifymanager
```

# Introduction

This app extension adds a 'type' key to the Notify plugin object parameter. With it, you can define multiple Notify default values, provided in Quasar through `Notify.setDefaults`.

# Demo
Can be found [here](https://qnotifymanager.netlify.com).

# Available presets

QNotifyManager comes with *positive*, *negative*, *info*, *warning* and *snackbar* presets.

# Example Code

```js
this.$q.notify({
  type: 'positive', // use the 'positive' preset
  message: 'My message is awesome!'
})
```

# Creating your own Notify type
```js
import { setDefaults } from 'quasar-app-extension-qnotifymanager/src/qnotifymanager'
setDefaults({
  myTypeName() {
    return {
        // default values object, e.g. position: 'bottom', color: 'red' ...
    }
}
```

# Patreon
If you like (and use) this App Extension, please consider becoming a Quasar [Patreon](https://www.patreon.com/quasarframework).

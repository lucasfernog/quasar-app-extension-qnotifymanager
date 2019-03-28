import {
  setDefaults
} from 'quasar-app-extension-qnotifymanager/src/qnotifymanager'

import {
  Platform
} from 'quasar'

export default async () => {
  if (Platform.is.mobile) {
    setDefaults({
      snackbar () {
        return {
          position: 'bottom'
        }
      }
    })
  } else {
    setDefaults({
      snackbar () {
        return {
          position: 'bottom-left'
        }
      }
    })
  }

  setDefaults({
    notification () {
      return {
        position: Platform.is.mobile ? 'bottom' : 'top-right',
        color: 'secondary'
      }
    }
  })
}

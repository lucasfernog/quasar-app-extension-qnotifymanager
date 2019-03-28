import {
    Notify
} from 'quasar'

import {
    notify
} from 'quasar-app-extension-qnotifymanager/src/qnotifymanager'

export default async ({
    Vue
}) => {
    Vue.prototype.$q.notify = Notify.create = notify.bind(Notify)
}
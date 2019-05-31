import {
    Notify,
    Platform
} from 'quasar'

import {
    notify,
    setDefaults
} from 'quasar-app-extension-qnotifymanager/src/qnotifymanager'

export default async ({
    Vue
}) => {
    Vue.prototype.$q.notify = Notify.create = notify.bind(Notify)

     if (Platform.is.mobile) {
         setDefaults({
             snackbar() {
                 return {
                     position: 'bottom'
                 }
             }
         })
     } else {
         setDefaults({
             snackbar() {
                 return {
                     position: 'bottom-left'
                 }
             }
         })
     }

     const getIconData = icon => {
         let content = ' ', cls = ''

         if (/^fa[s|r|l|b]{0,1} /.test(icon) || icon.startsWith('icon-') === true) {
           cls = icon
         }
         else if (icon.startsWith('bt-') === true) {
           cls = `bt ${icon}`
         }
         else if (icon.startsWith('eva-') === true) {
           cls = `eva ${icon}`
         }
         else if (/^ion-(md|ios|logo)/.test(icon) === true) {
           cls = `ionicons ${icon}`
         }
         else if (icon.startsWith('ion-') === true) {
           cls = `ionicons ion-${this.$q.platform.is.ios === true ? 'ios' : 'md'}${icon.substr(3)}`
         }
         else if (icon.startsWith('mdi-') === true) {
           cls = `mdi ${icon}`
         }
         else if (icon.startsWith('iconfont ') === true) {
           cls = `${icon}`
         }
         else if (icon.startsWith('ti-') === true) {
           cls = `themify-icon ${icon}`
         }
         else {
           cls = 'material-icons'
           content = icon
         }
         return {
             class: cls,
             content
         }
     }

     const typeIconGetMessageFn = icon => {
         return function (message) {
            const i = getIconData(this.$q.iconSet.type[icon])
            return `<i class="${i.class} q-icon on-left">${i.content}</i><span>${message}</span>`
         }
     }

     setDefaults({
         positive() {
             return {
                 getMessage: typeIconGetMessageFn('positive'),
                 html: true,
                 color: 'green'
             }
         },
         negative() {
             return {
                 getMessage: typeIconGetMessageFn('negative'),
                 html: true,
                 color: 'red'
             }
         },
         info() {
             return {
                 getMessage: typeIconGetMessageFn('info'),
                 html: true,
                 color: 'blue'
             }
         },
         warning() {
             return {
                 getMessage: typeIconGetMessageFn('warning'),
                 html: true,
                 color: 'orange'
             }
         }
     })
}
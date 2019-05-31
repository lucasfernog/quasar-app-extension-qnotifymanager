import {
    Notify
} from 'quasar'

const defaults = {}

const quasarNotify = Notify.create

export function setDefaults(type, opts) {
    if (typeof (type) === 'string')
        defaults[type] = opts
    else
        Object.assign(defaults, type)
}

export function notify(opts) {
    let notifyOptions, notifyDefaults;

    if (typeof (opts) === 'string') {
        notifyOptions = {
            message: opts
        }
        notifyDefaults = {}
    } else {
        let def = defaults[opts.type] || {}
        if (typeof (def) === 'function') {
            notifyDefaults = def()
        } else {
            notifyDefaults = def
        }
        if (notifyDefaults.getMessage) {
            opts.message = notifyDefaults.getMessage.apply(this.__vm, [opts.message])
        }
        notifyOptions = opts
    }
    quasarNotify.apply(this, [Object.assign(notifyDefaults, notifyOptions)])
}
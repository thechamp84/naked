import  i18n  from './I18n';

export default function translateRHFErrorMsg(error) {
    let errMsg = null;

    if (typeof error === 'object') {
        const { type, message } = error;
        if (type === 'serverSideError') {
            errMsg = message;
        } else {
            if (typeof message === 'object' && message.key && message.values) {
                errMsg = i18n.t(`validation.${message.key}`, { ...message.values });
            } else if (typeof message === 'string') {
                errMsg = i18n.t(`validation.${message}`);
            }
        }
    }

    return errMsg;
}

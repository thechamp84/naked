import i18n from 'Utils/I18n';

export default function translateRHFErrorMsg(error) {
    let errMsg = null;

    if (typeof error === 'object') {
        const { type, message } = error;
        if (type === 'serverSideError') {
            errMsg = message;
        } else {
            errMsg = i18n.t(`validation.${message}`);
        }
    }

    return errMsg;
}

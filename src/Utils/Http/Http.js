import axios from 'axios';
import { DialogToast } from 'Components/Dialogs/DialogToast/DialogToast';
import i18n from 'Utils/I18n';
import { mapValidationErrors } from './MapValidationErrors';
import { LocalStorage } from 'Utils/LocalStorage';
const storage = new LocalStorage();

require('dotenv').config();

export const http = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept'
    }
    // headers: {
    //     'X-App-Locale': 'en',
    // },
});
http.interceptors.request.use(function (config) {
    // if (config.data) {
    //     config.data.deviceToken = 'webapp-react';
    // }

    const userToken = storage.get('userToken') || {};
    if (userToken) {

        config.headers['authorization'] = userToken ? `Bearer ${userToken}` : undefined;
    }
    // if (user.user_id) {
    //     config.headers['userId'] = user.user_id ? user.user_id : undefined;
    // }
    return config;
}, function (error) {
    return Promise.reject(error);
});
export const isAxiosError = (error) => {
    return axios.isAxiosError(error);
};

const defaultErrorHandlerOptions = {
    setError: null,
    toast: {
        400: false,
        401: true,
        422: false,
        500: true,
    },
};

export const handleError = (error, options) => {
    const serverResponse = error.response;

    if (serverResponse) {
        handleErrorResponse(serverResponse, options);
    } else if (error.request) {
        handleErrorRequest(error.request);
    } else {
        handleErrorRequest(error.request);
    }
};

export const handleErrorRequest = (request) => {
    DialogToast.error(i18n.t('Please check your internet connectivity'));
};

export const handleErrorResponse = (response, options) => {
    const status = response.status;
    const statusHandlers = options?.statusHandlers;

    if (statusHandlers && statusHandlers[status]) {
        statusHandlers[status](response);
        return;
    }

    switch (status) {
        case 422:
            handleUnprocessableEntity(response.data.errors, status, options);
            break;

        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
            handleServerError(status, options);
            break;

        default:
            handleServerError(status, options);
            break;
    }
};

export const handleUnprocessableEntity = (errors, status, options) => {
    DialogToast.error({
        message: i18n.t('Some data are incorrect'),
    });

    if (options.setError) {
        const setError = options.setError;
        mapValidationErrors(errors).forEach(({ name, message, type }) => {
            setError(name, { type, message });
        });
    }
};

const handleServerError = (status, options) => {
    if (shouldToast(status, options.toast)) {
        DialogToast.error({
            message: i18n.t('The service is unavailable now. Please try again later'),
        });
    }
};

const shouldToast = (status, toastOptions) => {
    if (toastOptions === undefined || toastOptions === true) {
        return true;
    }

    if (toastOptions === false) {
        return false;
    }

    if (toastOptions[status] === undefined || toastOptions[status] === true) {
        return true;
    }

    return false;
};

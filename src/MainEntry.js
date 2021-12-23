import './index.css';
import { setLocale } from 'yup';
import { useEffect, useMemo } from 'react';
import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ModalContainer from 'react-modal-promise';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Entry from './Entry';
import { LocalStorage } from 'Utils/LocalStorage';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const storage = new LocalStorage();
setLocale({
    mixed: {
        required: 'required',
    },
    string: {
        required: 'required',
    },
});

function App() {
    const { i18n } = useTranslation();

    // Create rtl cache
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: i18n.language === 'ar' ? [rtlPlugin] : '',
    });
    useEffect(() => {

        if (storage.get('language') === null) {

            i18n.changeLanguage('en');

        } else {

            i18n.changeLanguage(storage.get('language') || 'en');

        }

        document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

        document.body.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');

    }, [i18n, i18n.language]);
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    const theme = useMemo(
        () =>
            responsiveFontSizes(
                createTheme({
                    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
                    palette: {
                        primary: {
                            light: '#4fc18c',
                            main: '#03a65a',
                            dark: '#039551',
                            bg: 'rgba(229, 252, 242, 1)',
                            contrastText: '#fff',
                        },
                        secondary: {
                            light: '#676767',
                            main: '#262626',
                            dark: '#222222',
                            contrastText: '#fff',
                        },
                        tertiary: {
                            main: '#FFE446',
                            contrastText: '#132A46',
                        },
                    },
                    spacing: (factor) => `${0.25 * factor}rem`,
                }),
            ),
        [i18n.language],
    );

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <BrowserRouter basename="/">
                        <Entry />
                    </BrowserRouter>
                </LocalizationProvider>
                <ModalContainer />
            </ThemeProvider>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </CacheProvider>
    );
}

export default App;

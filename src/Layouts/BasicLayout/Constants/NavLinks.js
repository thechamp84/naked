import i18n from 'Utils/I18n';

export const NavLinks = () => [
    {
        text: i18n.t('navLinks.howItWorks'),
        path: '/',
    },
    {
        text: i18n.t('navLinks.legal'),
        path: '/',
    },
    {
        text: i18n.t('navLinks.invest'),
        path: '/',
    },
    {
        text: i18n.t('navLinks.beAPartner'),
        path: '/',
    },
    {
        text: i18n.t('navLinks.login'),
        path: '/sign-in',
    },
    {
        text: i18n.t('navLinks.signUp'),
        path: '/sign-up',
    },
];

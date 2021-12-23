import React, { useState } from 'react';
import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import logo from 'Assets/logo.svg';
import SidebarForMobile from './SidebarForMobile';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import { Button, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { handleError, http } from 'Utils/Http/Http';
import ConfirmationDialog from 'Components/Dialogs/ConfirmationDialog';
import { LocalStorage } from 'Utils/LocalStorage';
import LanguageIcon from '@mui/icons-material/Language';
const storage = new LocalStorage();

const user = {
    name: 'Chelsea Hagon',
    email: 'chelseahagon@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

export default function Navbar({ links }) {
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const [logoutModal, setLogoutModal] = useState(false)

    const changeLanguage = () => {
        storage.set('language', i18n.language === 'ar' ? 'en' : 'ar');
        i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
    };

    const handleLogout = async () => {
        try {
            await http.post(`/auth/logout`, {})
                .then(async (res) => {
                    storage.remove('userToken');
                    storage.remove('user');
                    history.push('/sign-in');
                });
        } catch (error) {
            handleError(error);
        }
    }

    return (
        <Popover
            as="header"
            className={({ open }) =>
                clsx(
                    open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
                    'bg-white shadow-sm lg:static lg:overflow-y-visible shadow-sm',
                )
            }>
            {({ open }) => (
                <>
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative flex justify-between lg:py-3 xl:grid xl:grid-cols-12 lg:gap-8">
                            <div className="flex lg:static xl:col-span-2">
                                <div className="flex items-center flex-shrink-0">
                                    <a href="/admin/video">
                                        <img className="block w-auto h-16" src={logo} alt="logo" />
                                    </a>
                                </div>
                                <div className="lg:hidden absolute right-0 top-3">
                                    <SidebarForMobile links={links} />
                                </div>
                            </div>
                            <div className="flex items-center">
                                {/* <Button onClick={changeLanguage}>
                                    <LanguageIcon />&nbsp;{t('common.lang')}
                                </Button> */}
                                <Tooltip title={t('common.logout')}>
                                    <IconButton onClick={() => setLogoutModal(true)}>
                                        <LogoutIcon />
                                    </IconButton>
                                </Tooltip>

                            </div>
                        </div>
                    </div>
                    <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                        <div className="max-w-3xl px-2 pt-2 pb-3 mx-auto space-y-1 sm:px-4">
                            {links.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={clsx(
                                        item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                                        'block rounded-md py-2 px-3 text-base font-medium',
                                    )}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="flex items-center max-w-3xl px-4 mx-auto sm:px-6">
                                <div className="flex-shrink-0">
                                    <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt="" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                </div>
                                <button
                                    type="button"
                                    className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                                    <span className="sr-only">View notifications</span>
                                    {/* <BellIcon className="w-6 h-6" aria-hidden="true" /> */}
                                </button>
                            </div>
                            {/* <div className="max-w-3xl px-2 mx-auto mt-3 space-y-1 sm:px-4">
                                {userNavigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900">
                                        {item.name}
                                    </a>
                                ))}
                            </div> */}
                        </div>
                    </Popover.Panel>
                    <ConfirmationDialog isOpen={logoutModal} title={t('common.logout')} text={t('common.logoutText')} onReject={() => setLogoutModal(false)} onResolve={handleLogout} />
                </>
            )}
        </Popover>
    );
}

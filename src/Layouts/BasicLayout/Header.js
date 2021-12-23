import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import Logo from 'Assets/aseel-white.png';
import BtnBase from 'Components/Buttons/BtnBase';
import { NavLink } from 'react-router-dom';
import { NavLinks } from './Constants/NavLinks';
import { useTranslation } from 'react-i18next';

const useStyle = makeStyles((theme) => ({
    localeBtn: {
        backgroundColor: theme.palette.primary.light,
    },
}));

export default function Header() {
    const styles = useStyle();
    const { i18n } = useTranslation();

    const handleLangChange = () => {
        i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
    };

    return (
        <div>
            <AppBar elevation={0} position="relative" className="py-6">
                <Toolbar className="justify-between">
                    <div>
                        <img src={Logo} className="w-auto max-h-24" alt="Aseel Logo" />
                    </div>
                    <div>
                        {NavLinks().map((l, key) => (
                            <BtnBase key={key} fullWidth={false} component={NavLink} to={l.path}>
                                {l.text}
                            </BtnBase>
                        ))}
                        <BtnBase onClick={handleLangChange} className={styles.localeBtn} fullWidth={false}>
                            {i18n.language === 'en' ? 'العربية' : 'English'}
                        </BtnBase>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

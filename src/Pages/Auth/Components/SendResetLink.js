import { Btn, InputController, setProgress } from 'Components';
import Yup from 'Utils/Yup';
import { handleError } from 'Utils/Http/Http';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert } from '@mui/material';
import logo from 'Assets/logo.svg';

const RESET_LINK_BTN = 'RESET_LINK_BTN';

const schema = Yup.object().shape({
    email: Yup.string().email().required(),
});

export default function SendResetLink({ buttonClassName, fullWidth, hasLogoAndTitle = false, sendResetLink }) {
    const { t } = useTranslation();
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const { control, handleSubmit, setError } = useForm({
        resolver: yupResolver(schema),
    });

    const handleForgotPassword = async (values) => {
        setProgress(RESET_LINK_BTN, true);
        setShowSuccessMsg(false);
        try {
            await sendResetLink(values)
                // .then(async (res) => {
                //     setShowSuccessMsg(true);
                // });;
            setShowSuccessMsg(true);
        } catch (error) {
            handleError(error, { setError });
        }
        setProgress(RESET_LINK_BTN, false);
    };

    return (
        <form onSubmit={handleSubmit(handleForgotPassword)}>
            {hasLogoAndTitle ? (
                <>
                    <img className="w-auto h-20" src={logo} alt="" />
                    <div className="pt-6 pb-5 text-center">
                        <Typography variant="h5" className="font-extrabold">
                            {t('password.resetPassword')}
                        </Typography>
                    </div>
                </>
            ) : null}
            <div className="pt-2 pb-8 text-center">
                <Typography variant="subtitle" className="text-center">
                    {t('password.followSteps')}
                </Typography>
            </div>
            <div className="space-y-4">
                {showSuccessMsg ? <Alert severity="success">{t('password.theLinkResetHasBeenSent')}</Alert> : null}
                <div>
                    <InputController
                        control={control}
                        name="email"
                        label={t('password.emailAddress')}
                        placeholder={t('password.enterYourEmailAddress')}
                    />
                </div>
            </div>
            <div className={buttonClassName}>
                <Btn type="submit" name={RESET_LINK_BTN} fullWidth={fullWidth}>
                    {t('password.sendResetLink')}
                </Btn>
            </div>
        </form>
    );
}

import { Btn, InputController, setProgress } from 'Components';
// import { useQueryParams, Yup } from '@aseel/common-utils';
import Yup from 'Utils/Yup';
// import useQueryParams from 'Utils/UseQueryParams';
import { handleError } from 'Utils/Http/Http';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert } from '@mui/material';
import logo from 'Assets/logo.svg';
import { Link as RouterLink } from 'react-router-dom';

const RESET_LINK_BTN = 'RESET_LINK_BTN';

const schema = Yup.object().shape({
    password: Yup.string(),
    password_confirmation: Yup.string().oneOf([Yup.ref('password')], 'Password and Confirm Password do not match.'),
    // password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'passwordRule'),
    // password_confirmation: Yup.string().matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //     'passwordRule',
    // ).oneOf([Yup.ref('password')], 'Password and Confirm Password do not match.'),
});

export default function ResetPassword({ buttonClassName, fullWidth, hasLogoAndTitle = false, resetPassword, params }) {
    const { t } = useTranslation();
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const { control, handleSubmit, setError } = useForm({
        resolver: yupResolver(schema),
    });

    const handleForgotPassword = async (values) => {
        const data = {
            email: params.emailId,
            resetPasswordMailToken: params.token,
            password: values.password
        }
        setProgress(RESET_LINK_BTN, true);
        setShowSuccessMsg(false);
        try {
            const form = { ...data };
            await resetPassword(form);
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
                    <div className="pt-6 pb-5">
                        <Typography variant="h5" className="font-extrabold">
                            {t('password.resetPassword')}
                        </Typography>
                    </div>
                </>
            ) : null}
            {showSuccessMsg ? (
                <div className="pb-4 ">
                    <Alert severity="success">
                        {t('password.passwordChangedSuccessfully')}
                        <Link component={RouterLink} to="/sign-in" className="italic font-semibold ms-1.5">
                            {t('password.loginNow')}
                        </Link>
                    </Alert>
                </div>
            ) : null}
            <div className="space-y-4">
                <div className="space-y-3.5">
                    <InputController
                        control={control}
                        name="password"
                        label={t('password.newPassword')}
                        type="password"
                    />
                    <InputController
                        control={control}
                        name="password_confirmation"
                        label={t('password.confirmationPass')}
                        type="password"
                    />
                </div>
            </div>
            <div className={buttonClassName}>
                <Btn type="submit" name={RESET_LINK_BTN} fullWidth={fullWidth}>
                    {t('common.update')}
                </Btn>
            </div>
        </form>
    );
}

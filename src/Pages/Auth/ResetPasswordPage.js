import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from 'Assets/logo.svg';
import { Card, CardContent, Typography, Divider, Container } from '@mui/material';
import ResetPassword from './Components/ResetPassword';
import { http } from 'Utils/Http/Http';

export default function ResetPasswordPage(props) {
    const { t } = useTranslation();
    const { match } = props;
    const { params } = match;

    const resetPassword = (values) =>{
        http.put('/auth/reset-password', values);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-2 md:px-0">
            <img className="w-auto h-16 mx-auto mb-5" src={logo} alt="Logo" />
            <Container className="max-w-md">
                <Card>
                    <div className="px-5 py-5">
                        <Typography variant="h5">{t('password.resetPassword')}</Typography>
                    </div>
                    <Divider />
                    <CardContent>
                        <div className="space-y-4">
                            <ResetPassword params={params} resetPassword={resetPassword} buttonClassName="flex justify-end mt-5" />
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

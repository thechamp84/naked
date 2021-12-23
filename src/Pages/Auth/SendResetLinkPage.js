import React from 'react';
import SendResetLink from './Components/SendResetLink';
import { Card, CardContent, Typography, Divider, Container } from '@mui/material';
import logo from 'Assets/logo.svg';
import { useTranslation } from 'react-i18next';
import { http } from 'Utils/Http/Http';

const sendResetLink = (values) => {
    http.post('/auth/forgot-password', values, {
        baseURL: process.env.REACT_APP_BASE_URL,
    })
}

export default function SendResetLinkPage() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-2 md:px-0">
            <img className="w-auto h-16 mx-auto mb-5" src={logo} alt="logo" />
            <Container className="max-w-lg">
                <Card style={{ padding: '25px 20px', borderRadius: '20px', boxShadow: '1px 1px 10px 1px rgba(21,124,15,0.4)' }}>
                    <div className="py-5 px-4 text-center">
                        <Typography variant="h5">{t('password.resetPassword')}</Typography>
                    </div>
                    <Divider />
                    <CardContent>
                        <SendResetLink
                            sendResetLink={sendResetLink}
                            buttonClassName="space-y-4 text-center mt-5"
                            fullWidth={false}
                        />
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

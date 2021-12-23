import { DialogContent, Typography } from '@mui/material';
import React from 'react';

export default function DialogContentBase({ title, message, iconComponent, onReject, onResolve, ContentFooter }) {
    return (
        <DialogContent className="px-4 pt-5 pb-4 sm:p-6">
            <div>{iconComponent}</div>

            <div className="mt-4 text-center">
                {title ? <Typography variant="h6">{title}</Typography> : null}
                {message ? <Typography variant="body1">{message}</Typography> : null}
            </div>

            {ContentFooter ? <ContentFooter onReject={onReject} onResolve={onResolve} /> : null}
        </DialogContent>
    );
}

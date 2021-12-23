import { Dialog } from '@mui/material';
import React from 'react';
import { create } from 'react-modal-promise';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import DialogContentBase from './DialogContentBase';

export default function SuccessDialog({ onReject, onResolve, isOpen, title, message, ContentFooter }) {
    return (
        <Dialog fullWidth maxWidth="xs" onClose={() => onReject({ closed: true })} open={isOpen}>
            <DialogContentBase
                ContentFooter={ContentFooter}
                title={title}
                message={message}
                onResolve={onResolve}
                onReject={onReject}
                iconComponent={
                    <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-green-50">
                        <CheckRoundedIcon className="h-9 w-9 text-green-600" />
                    </div>
                }
            />
        </Dialog>
    );
}

export const SuccessDialogPromise = create(SuccessDialog);

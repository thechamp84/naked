import { Dialog } from '@mui/material';
import React from 'react';
import { create } from 'react-modal-promise';
import DialogContentBase from './DialogContentBase';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

export default function ErrorDialog({ onReject, onResolve, isOpen, title, message, ContentFooter }) {
    return (
        <Dialog fullWidth maxWidth="xs" onClose={() => onReject({ closed: true })} open={isOpen}>
            <DialogContentBase
                ContentFooter={ContentFooter}
                title={title}
                message={message}
                onReject={onReject}
                onResolve={onResolve}
                iconComponent={
                    <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-red-50">
                        <ErrorOutlineRoundedIcon className="h-9 w-9 text-red-600" />
                    </div>
                }
            />
        </Dialog>
    );
}

export const ErrorDialogPromise = create(ErrorDialog);

import { Dialog as MuiDialog } from '@mui/material';
import React from 'react';
import { create } from 'react-modal-promise';

export default function Dialog({ children, onResolve, onReject, isOpen }) {
    return <MuiDialog open={isOpen}>{children}</MuiDialog>;
}

export const DialogPromise = create(Dialog);

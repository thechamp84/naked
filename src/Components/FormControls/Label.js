import { Typography } from '@mui/material';
import React from 'react';

function Label({ children, className, htmlFor }) {
    return (
        <Typography variant="caption" component="label" color="textSecondary" className={className} htmlFor={htmlFor}>
            {children}
        </Typography>
    );
}

export default Label;

import { Button, CircularProgress } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export default function BtnBase({ children, isLoading, color = 'primary', variant = 'contained', ...otherProps }) {
    return (
        <Button
            size="large"
            fullWidth
            color={color}
            variant={variant}
            disableElevation
            disabled={isLoading}
            {...otherProps}>
            {isLoading ? <CircularProgress size={26} /> : children}
        </Button>
    );
}

BtnBase.propTypes = {
    isLoading: PropTypes.bool,
};

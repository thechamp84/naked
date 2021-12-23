import { IconButton, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const progressSize = {
    small: 22,
    medium: 25,
};

export default function IconBtnBase({
    isLoading = false,
    disabled,
    children,
    size = 'medium',
    wrapperClassName,
    ...otherProps
}) {
    return (
        <Box sx={{ position: 'relative' }}>
            <IconButton disabled={disabled || isLoading} size={size} {...otherProps}>
                {children}
                {isLoading ? (
                    <CircularProgress
                        sx={{
                            bottom: size === 'small' ? 6 : 8,
                            left: size === 'small' ? 6 : 8,
                            position: 'absolute',
                        }}
                        size={progressSize[size]}
                    />
                ) : null}
            </IconButton>
        </Box>
    );
}

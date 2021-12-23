import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import { Box } from '@mui/system';

const DropdownIndicator = ({ isFocused }) => {
    return (
        <Box
            aria-hidden
            sx={{
                display: 'flex',
                padding: 0.75,
                cursor: 'pointer',
                color: isFocused ? 'grey.700' : 'grey.400',
                transition: 'color 0.2s',
                '&:hover': {
                    color: 'grey.700',
                },
            }}>
            <SvgIcon>
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </SvgIcon>
        </Box>
    );
};

DropdownIndicator.propTypes = {
    isFocused: PropTypes.bool.isRequired,
};

export default DropdownIndicator;

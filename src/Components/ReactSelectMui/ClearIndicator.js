import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import { Box } from '@mui/system';

const ClearIndicator = ({ isFocused, innerProps }) => {
    return (
        <Box
            aria-hidden
            {...innerProps}
            sx={{
                display: 'flex',
                padding: 1,
                cursor: 'pointer',
                color: isFocused ? 'grey.700' : 'grey.400',
                transition: 'color 0.2s',
                '&:hover': {
                    color: 'grey.700',
                },
            }}>
            <SvgIcon fontSize="small">
                <path
                    // eslint-disable-next-line max-len
                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
            </SvgIcon>
        </Box>
    );
};

ClearIndicator.propTypes = {
    isFocused: PropTypes.bool.isRequired,
    innerProps: PropTypes.shape().isRequired,
};

export default ClearIndicator;

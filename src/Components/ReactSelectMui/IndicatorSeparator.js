import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

const IndicatorSeparator = ({
    isFocused,
    selectProps: {
        TextFieldProps: { margin },
    },
}) => {
    return (
        <Box
            component="span"
            sx={{
                alignSelf: 'stretch',
                width: 1,
                marginTop: 0.25,
                marginBottom: 0.25,
                background: isFocused ? 'grey.700' : 'grey.400',
                transition: 'background 0.2s',
            }}
        />
    );
};

IndicatorSeparator.propTypes = {
    isFocused: PropTypes.bool.isRequired,
    selectProps: PropTypes.shape({
        TextFieldProps: PropTypes.shape({
            margin: PropTypes.string,
        }).isRequired,
    }).isRequired,
};

export default IndicatorSeparator;

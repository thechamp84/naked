import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import SvgIcon from '@mui/material/SvgIcon';

const getSx = (isFocused) => {
    const base = {
        margin: (theme) => theme.spacing(0.35, 0.5, 0.15, 0),
    };

    if (isFocused) {
        base.backgroundColor = (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
    }

    return base;
};

const MultiValue = ({
    children,
    isFocused,
    removeProps,
    selectProps: {
        TextFieldProps: { margin },
    },
}) => {
    return (
        <Chip
            size={margin === 'dense' ? 'small' : 'medium'}
            tabIndex={-1}
            label={children}
            sx={getSx()}
            onDelete={removeProps.onClick}
            // prettier-ignore
            deleteIcon={(
                <SvgIcon {...removeProps}>
                    <path
                        // eslint-disable-next-line max-len
                        d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
                    />
                </SvgIcon>
            )}
        />
    );
};

MultiValue.propTypes = {
    children: PropTypes.node.isRequired,
    isFocused: PropTypes.bool.isRequired,
    removeProps: PropTypes.shape({
        onClick: PropTypes.func.isRequired,
    }).isRequired,
    selectProps: PropTypes.shape({
        TextFieldProps: PropTypes.shape({
            margin: PropTypes.string,
        }).isRequired,
    }).isRequired,
};

export default MultiValue;

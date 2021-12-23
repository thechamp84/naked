import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import InputComponent from './InputComponent';

const Control = React.forwardRef(({ children, innerProps, innerRef, selectProps: { TextFieldProps } }, ref) => {
    return (
        <TextField
            InputProps={{
                inputComponent: InputComponent,
                inputProps: {
                    className: 'flex',
                    ref: innerRef,
                    children,
                    ...innerProps,
                },
            }}
            inputRef={ref}
            {...TextFieldProps}
        />
    );
});

Control.propTypes = {
    children: PropTypes.node.isRequired,
    innerProps: PropTypes.shape({
        onMouseDown: PropTypes.func.isRequired,
    }).isRequired,
    innerRef: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.any.isRequired,
        }),
    ]).isRequired,
    selectProps: PropTypes.shape({
        TextFieldProps: PropTypes.shape({
            margin: PropTypes.string,
        }).isRequired,
    }).isRequired,
};

export default Control;

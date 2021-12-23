import { TextField } from '@mui/material';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({ name, ...otherProps }, ref) => {
    return <TextField name={name}  inputRef={ref} variant="outlined" fullWidth {...otherProps} />;
});

Input.propTypes = {
    name: PropTypes.string,
};

export default Input;

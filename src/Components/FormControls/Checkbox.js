import { FormControl, FormControlLabel, FormHelperText, Checkbox as CheckboxMui } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ name, checked, onChange, label, helperText, error, ...controlProps }) {
    return (
        <FormControl error={error}>
            <FormControlLabel
                control={
                    <CheckboxMui checked={checked} onChange={(event) => onChange(event.target.checked)} name={name} />
                }
                label={label}
            />
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
}

Checkbox.propTypes = {
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string,
};

export default Checkbox;

import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup as RadioGroupMui,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function RadioGroup({ options, label, onChange, name, row, helperText, error, value, className }) {
    return (
        <FormControl error={error} className={className || 'block'} component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroupMui value={value} row={row} name={name} onChange={onChange}>
                {options.map((o) => (
                    <FormControlLabel key={o.value} name={name} value={o.value} control={<Radio />} label={o.label} />
                ))}
            </RadioGroupMui>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
}

RadioGroup.propTypes = {
    options: PropTypes.array.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    helperText: PropTypes.string,
    row: PropTypes.bool,
    error: PropTypes.bool,
    className: PropTypes.string,
};

export default RadioGroup;

import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material';
import React from 'react';
import propTypes from 'prop-types';

function CheckboxGroup({ options, row, label, onChange, name, helperText, error, value }) {
    const handleChange = (event) => {
        let values;
        if (!Array.isArray(value)) {
            values = [];
        } else {
            values = [...value];
        }

        if (event.target.checked === false) {
            return onChange(values.filter((item) => item !== event.target.value));
        } else {
            return onChange(values.concat([event.target.value]));
        }
    };

    return (
        <FormControl error={error} className="block" component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <FormGroup row={row}>
                {options.map((o, index) => (
                    <FormControlLabel
                        key={o.value}
                        control={
                            <Checkbox
                                onChange={handleChange}
                                name={`${name}[${index}]`}
                                checked={Array.isArray(value) ? value.includes(o.value) : false}
                                value={o.value}
                            />
                        }
                        label={o.label}
                    />
                ))}
            </FormGroup>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
}

CheckboxGroup.propTypes = {
    options: propTypes.array.isRequired,
    label: propTypes.string,
    onChange: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    helperText: propTypes.string,
    error: propTypes.bool,
};

export default CheckboxGroup;
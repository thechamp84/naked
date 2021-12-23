import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import Select from 'Components/ReactSelectMui';
import translateRHFErrorMsg from 'Helpers/TranslateRHFErrorMsg';

const defaultGetOptionValue = (option) => option.value;

export default function SelectController({ name, control, rules, defaultValue = '', ref, ...otherProps }) {
    const getOptionValue = otherProps.getOptionValue || defaultGetOptionValue;

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { ref, value, onChange, ...otherRenderProps }, fieldState: { error } }) => (
                <Select
                    isClearable
                    error={Boolean(error)}
                    helperText={translateRHFErrorMsg(error)}
                    {...otherProps}
                    {...otherRenderProps}
                    value={otherProps.options.filter((option) => getOptionValue(option) === value)}
                    onChange={(option) => onChange(option !== null ? getOptionValue(option) : option)}
                />
            )}
            defaultValue={defaultValue}
        />
    );
}

SelectController.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    rules: PropTypes.object,
    ref: PropTypes.object,
};

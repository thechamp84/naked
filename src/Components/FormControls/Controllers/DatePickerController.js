import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import translateRHFErrorMsg from 'Helpers/TranslateRHFErrorMsg';
import DatePicker from '../DatePicker';

export default function DatePickerController({
    name,
    control,
    onFocus,
    defaultValue = null,
    rules,
    helperText,
    ...otherPickerProps
}) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
                console.log(Boolean(error));
                return (
                    <DatePicker
                        onChange={onChange}
                        value={value}
                        helperText={translateRHFErrorMsg(error)}
                        error={Boolean(error)}
                        {...otherPickerProps}
                    />
                );
            }}
            defaultValue={defaultValue}
            rules={rules}
            onFocus={onFocus}
        />
    );
}

DatePickerController.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    rules: PropTypes.object,
    ref: PropTypes.object,
    onFocus: PropTypes.func,
};

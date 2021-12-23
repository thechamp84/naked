import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import translateRHFErrorMsg from 'Helpers/TranslateRHFErrorMsg';
import Checkbox from '../Checkbox';

export default function CheckboxController({ name, control, rules, defaultValue, ...otherProps }) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, ref, ...otherRenderProps }, fieldState: { error } }) => {
                console.log(error)
                return (
                    <Checkbox
                        helperText={translateRHFErrorMsg(error)}
                        error={Boolean(error)}
                        checked={value}
                        {...otherProps}
                        {...otherRenderProps}
                    />
                );
            }}
            defaultValue={defaultValue}
        />
    );
}

CheckboxController.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    rules: PropTypes.object,
};

import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import translateRHFErrorMsg from 'Helpers/TranslateRHFErrorMsg';
import CheckboxGroup from '../CheckboxGroup';

export default function CheckboxGroupController({ name, control, rules, defaultValue = '', ref, errorPath, ...otherProps }) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, ref,...otherRenderProps }, fieldState: { error } }) => {
                return (
                    <CheckboxGroup
                        helperText={translateRHFErrorMsg(error)}
                        error={Boolean(error)}
                        value={value}
                        {...otherProps}
                        {...otherRenderProps}
                    />
                );
            }}
            defaultValue={defaultValue}
        />
    );
}

CheckboxGroupController.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    rules: PropTypes.object,
    ref: PropTypes.object,
    errorPath: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

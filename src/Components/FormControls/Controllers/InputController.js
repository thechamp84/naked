import React from 'react';
import { Controller } from 'react-hook-form';
import Input from '../Input';
import PropTypes from 'prop-types';
import translateRHFErrorMsg from 'Helpers/TranslateRHFErrorMsg';

export default function InputController({ name, control, rules, defaultValue = '', ref, label = '', errorPath, ...otherProps }) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, ...otherRenderProps }, fieldState: { error } }) => {
                return (
                    <>
                        <h6 className='labelForm pb-2'>{label}</h6>

                        <Input
                            helperText={translateRHFErrorMsg(error)}
                            error={Boolean(error)}
                            value={value === null ? '' : value}
                            {...otherProps}
                            {...otherRenderProps}
                        />
                    </>
                );
            }}
            defaultValue={defaultValue}
        />
    );
}



InputController.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    rules: PropTypes.object,
    ref: PropTypes.object,
    errorPath: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

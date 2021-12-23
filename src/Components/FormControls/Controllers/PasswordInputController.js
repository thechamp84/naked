import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import Input from '../Input';
import PropTypes from 'prop-types';
import  translateRHFErrorMsg  from 'Utils/TranslateRHFErrorMsg';
import { IconButton } from '@mui/material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import PasswordChecklist from './PasswordChecklist';

export default function PasswordInputController({
    name,
    control,
    rules,
    defaultValue = '',
    ref,
    errorPath,
    hasCheckList = false,
    ...otherProps
}) {
    const [showPassword, setShowPassword] = useState(false);
    const [isChecklistVisible, setIsChecklistVisible] = useState(false);

    const focusHandler = () => {
        if (!isChecklistVisible) {
            setIsChecklistVisible(true);
        }
    };

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, ...otherRenderProps }, fieldState: { error } }) => {
                return (
                    <div>
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            onFocus={focusHandler}
                            helperText={translateRHFErrorMsg(error)}
                            error={Boolean(error)}
                            value={value === null ? '' : value}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={() => setShowPassword(!showPassword)} size="large">
                                        {showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                                    </IconButton>
                                ),
                            }}
                            {...otherProps}
                            {...otherRenderProps}
                        />
                        {
                            /* prettier-ignore */
                            hasCheckList ? (isChecklistVisible ? <PasswordChecklist password={value} /> : null) : null
                        }
                    </div>
                );
            }}
            defaultValue={defaultValue}
        />
    );
}

PasswordInputController.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    rules: PropTypes.object,
    ref: PropTypes.object,
    errorPath: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

import React from 'react';
import DatePickerMui from '@mui/lab/DatePicker';
import Input from './Input';

export default function DatePicker({ value, onChange, helperText, error, ...otherProps }) {
    return (
        <DatePickerMui
            renderInput={(params) => <Input {...params} helperText={helperText} error={error} />}
            value={value}
            onChange={onChange}
            inputFormat="YYYY-MM-DD"
            mask="____-__-__"
            {...otherProps}
        />
    );
}

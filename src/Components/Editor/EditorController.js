import React from 'react';
import { Controller } from 'react-hook-form';
import  translateRHFErrorMsg  from '../../Utils/TranslateRHFErrorMsg';
import Editor from './Editor';

export default function EditorController({
    control,
    name,
    rules,
    defaultValue = '',
    ref,
    errorPath,
    helperText,
    ...otherProps
}) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur, ref, ...otherRenderProps }, fieldState: { error } }) => {
                return (
                    <Editor
                        onChange={(event, editor) => onChange(editor.getData())}
                        onBlur={onBlur}
                        helperText={helperText || translateRHFErrorMsg(error)}
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

import React from 'react';
import EditorInstance from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { FormControl, FormLabel, FormHelperText } from '@mui/material';

const editorConfiguration = {
    toolbar: {
        items: [
            'alignment',
            'blockQuote',
            'bold',
            'selectAll',
            'undo',
            'redo',
            'fontSize',
            'heading',
            'horizontalLine',
            'imageTextAlternative',
            'uploadImage',
            'imageUpload',
            'indent',
            'outdent',
            'italic',
            'link',
            'numberedList',
            'bulletedList',
            'mediaEmbed',
            'insertTable',
            'tableColumn',
            'tableRow',
            'mergeTableCells',
        ],
        shouldNotGroupWhenFull: true,
    },
};

export default function Editor({ error, label, value, onBlur, onChange, helperText, ...otherProps }) {
    return (
        <FormControl error={Boolean(error)} fullWidth>
            <FormLabel className="mb-3">{label}</FormLabel>
            <CKEditor
                editor={EditorInstance}
                config={editorConfiguration}
                data={value}
                onChange={onChange}
                onBlur={onBlur}
                {...otherProps}
            />
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
}

import React from 'react';
import EditorController from './EditorController';

export default function EditorEnAr({ control, enName, arName }) {
    return (
        <div className="flex flex-col space-y-4">
            <EditorController label="English" control={control} name={enName} />
            <EditorController label="العربية" control={control} name={arName} />
        </div>
    );
}

import * as React from 'react';
import DataGrid from './DataGrid';

export default function FlexDataGrid({ ...tableProps }) {
    return (
        <div className="flex w-full">
            <div className="flex-grow">
                <DataGrid {...tableProps} />
            </div>
        </div>
    );
}

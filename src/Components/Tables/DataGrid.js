import * as React from 'react';
import { DataGrid as MuiDataGrid } from '@mui/x-data-grid';

export default function DataGrid({ rows, columns, pageSize, ...otherProps }) {
    return (
        <MuiDataGrid
            rows={rows}
            autoHeight
            columns={columns}
            disableColumnFilter
            disableColumnMenu
            disableColumnResize
            disableColumnSelector
            pageSize={pageSize}
            {...otherProps}
        />
    );
}

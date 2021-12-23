import React from 'react';
import { Skeleton } from '@mui/material';
import DataGrid from '../Tables/DataGrid';

function TableSkeleton() {
    const authEntitiesColumns = [
        {
            field: 'title',
            headerName: <Skeleton width="600px" height="15px" />,
            flex: 1,
            renderCell: () => {
                return <Skeleton width="500px" height="15px" />;
            },
        },
        {
            field: 'subject',
            headerName: <Skeleton width="600px" height="15px" />,
            flex: 1,
            renderCell: () => {
                return <Skeleton width="200px" height="15px" />;
            },
        },
        {
            field: 'object',
            headerName: <Skeleton width="600px" height="15px" />,
            flex: 0.5,
            renderCell: () => {
                return <Skeleton width="200px" height="15px" />;
            },
        },
    ];

    const authEntitiesRows = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
    ];

    return <DataGrid columns={authEntitiesColumns} rows={authEntitiesRows} hideFooter />;
}

export default TableSkeleton;

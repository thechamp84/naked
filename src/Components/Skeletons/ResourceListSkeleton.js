import React from 'react';
import { Skeleton } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';
import TableSkeleton from './TableSkeleton';

function ResourceListSkeleton({ hasBreadcrumbs = false, hasEndSide = false }) {
    return (
        <div>
            <div className="px-3.5">
                {hasBreadcrumbs ? (
                    <Typography>
                        <Skeleton className="md:w-8/12 sm:w-5/12 w-4/12" />
                    </Typography>
                ) : null}
                <div className="flex justify-between mb-5">
                    <Skeleton className="md:w-3/12 sm:w-5/12 w-4/12 h-14" />
                    {hasEndSide ? <Skeleton className="md:w-1/12 sm:w-5/12 w-4/12 h-14" /> : null}
                </div>
                <div className="mt-9">
                    <Card>
                        <CardContent>
                            <TableSkeleton />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ResourceListSkeleton;

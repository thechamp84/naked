import { Typography } from '@mui/material';
import { Skeleton } from '@mui/material';
import React from 'react';

export default function FormSkeleton({ inputsCount }) {
    return (
        <div>
            <div className="grid gap-4">
                {Array(inputsCount)
                    .fill(null)
                    .map(() => (
                        <div>
                            <Typography variant="h6">
                                <Skeleton className="md:w-2/12" />
                            </Typography>
                            <Skeleton className="mt-2" variant="rectangular" height={40} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

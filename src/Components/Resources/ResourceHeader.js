import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export default function ResourceHeader({ title, EndSide, className }) {
    return (
        <Box sx={styles.container} className={className}>
            <Typography component="h1" variant="h4">
                {title}
            </Typography>
            {EndSide ? <div className="mt-3 sm:mt-0">{EndSide}</div> : null}
        </Box>
    );
}

const styles = {
    container: {
        paddingBottom: 2,
        display: {
            sm: 'flex',
        },
        alignItems: {
            sm: 'center',
        },
        justifyContent: {
            sm: 'space-between',
        },
        borderBottom: 1,
        borderColor: 'grey.300',
    },
};

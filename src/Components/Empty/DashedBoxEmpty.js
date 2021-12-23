import { BtnBase } from 'Components';
import { Typography } from '@mui/material';
import React from 'react';

function DashedBoxEmpty({ title, onClick, children, hasButton = false, href }) {
    return (
        <div className="rounded border-2 border-dashed py-8">
            <div className="text-center">
                <Typography variant="body2" color="textSecondary">
                    {title}
                </Typography>
                {hasButton ? (
                    <div className="mt-3">
                        <BtnBase size="small" fullWidth={false} onClick={onClick} href={href}>
                            {children}
                        </BtnBase>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default DashedBoxEmpty;

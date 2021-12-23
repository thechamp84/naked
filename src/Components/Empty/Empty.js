import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Empty({ className, children }) {
    const { t } = useTranslation();

    return (
        <Box sx={styles.root} className={className}>
            <div>
                <svg className="h-24" width={184} height={152} viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(24 31.67)">
                            <Box
                                component="ellipse"
                                sx={styles.ellipse}
                                cx="67.797"
                                cy="106.89"
                                rx="67.797"
                                ry="12.668"
                            />
                            <Box
                                component="path"
                                sx={styles.path1}
                                d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                            />
                            <Box
                                component="path"
                                sx={styles.path2}
                                d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                                transform="translate(13.56)"
                            />
                            <Box
                                component="path"
                                sx={styles.path3}
                                d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                            />
                            <Box
                                component="path"
                                sx={styles.path4}
                                d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                            />
                        </g>
                        <Box
                            component="path"
                            sx={styles.path4}
                            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                        />
                        <Box component="g" sx={styles.path3} transform="translate(149.65 15.383)">
                            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
                            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
                        </Box>
                    </g>
                </svg>

                <div className="mt-2 text-center">
                    <Typography variant="body1" color="textSecondary">
                        {children ? children : t('messages.noDataFound')}
                    </Typography>
                </div>
            </div>
        </Box>
    );
}

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    ellipse: {
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.600' : 'grey.200'),
        opacity: 0.75,
        fill: 'currentColor',
    },
    path1: {
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.400' : 'grey.600'),
        fill: 'currentColor',
    },
    path2: {
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.400' : 'grey.600'),
        fill: 'currentColor',
    },
    path3: {
        color: 'white',
        fill: 'currentColor',
    },
    path4: {
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.400' : 'grey.300'),
        fill: 'currentColor',
    },
};

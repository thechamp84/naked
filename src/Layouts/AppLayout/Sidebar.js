import { Grid } from '@mui/material';
import { useTheme } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = (theme) => ({
    navLink: {
        // backgroundColor: theme.palette.grey[100],
        color: theme.palette.grey[400],
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0.375rem',
        padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
        fontSize: theme.typography.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
    },
    navLinkActive: {
        background: 'rgba(229, 252, 242, 1)',
        color: theme.palette.primary.main,
    },
});

function Sidebar({ links }) {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
        <nav aria-label="Sidebar" className="sticky divide-y divide-gray-300 top-4">
            <div className="pb-8 space-y-1">
                {links.map(({ current, Icon, name, path }) => (
                    <NavLink key={name} to={path} activeStyle={styles.navLinkActive} style={styles.navLink}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Icon className="flex-shrink-0 -ml-1 h-6 w-6" aria-hidden="true" />
                            </Grid>
                            <Grid item>
                                <span className="truncate">{name}</span>
                            </Grid>
                        </Grid>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

export default Sidebar;

import React from 'react';
import logo from 'Assets/logo.svg';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import { IconButton } from '@mui/material';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import { NavLink } from 'react-router-dom';
import { Box, useTheme } from '@mui/system';

const useStyles = (theme) => ({
    list: {},
    navLink: {
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.grey[400],
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0.375rem',
        padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
        fontSize: theme.typography.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
    },
    navLinkActive: {
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.grey[600],
    },
});

const DrawerList = ({ onToggleDrawer, links }) => {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
        <Box
            className="bg-gray-100"
            sx={{ width: 250, height: '100%' }}
            role="presentation"
            onClick={onToggleDrawer}
            onKeyDown={onToggleDrawer}>
            <List className="space-y-5 divide-y divide-gray-300">
                <div className="ml-5">
                    <div className="flex items-center flex-shrink-0">
                        <a href={process.env.REACT_APP_HOME_URL}>
                            <img className="block w-auto h-16" src={logo} alt="Aseel" />
                        </a>
                    </div>
                </div>
                <div className="space-y-1 px-2 pt-5">
                    {links.map(({ current, Icon, name, path }) => (
                        <NavLink key={name} to={path} activeStyle={styles.navLinkActive} style={styles.navLink}>
                            <Icon className="flex-shrink-0 -ml-1 mr-3 h-6 w-6" aria-hidden="true" />
                            <span className="truncate">{name}</span>
                        </NavLink>
                    ))}
                </div>
            </List>
        </Box>
    );
};

export default function SwipeableTemporaryDrawer({ links }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleToggleDrawer = (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <IconButton onClick={handleToggleDrawer} size="large">
                <DehazeRoundedIcon />
            </IconButton>
            <SwipeableDrawer anchor="left" open={isOpen} onClose={handleToggleDrawer} onOpen={handleToggleDrawer}>
                <DrawerList links={links} onToggleDrawer={handleToggleDrawer}/>
            </SwipeableDrawer>
        </div>
    );
}

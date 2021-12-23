import React from 'react';
import clsx from 'clsx';
import { NavLinks } from './Constants/NavLinks';
import { ButtonBase } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
    navBtnActive: {
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.grey[900],
    },
    navBtn: {
        backgroundColor: theme.palette.grey[50],
        color: theme.palette.grey[600],
        padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
        fontSize: theme.typography.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
        borderRadius: '0.375rem',
        display: 'flex',
        alignItems: 'center',
    },
}));

function Sidebar() {
    const classes = useStyle();

    return (
        <nav aria-label="Sidebar" className="sticky divide-y divide-gray-300 top-4">
            <div className="pb-8 space-y-1">
                {NavLinks.map(({ current, Icon, name, path }) => (
                    <NavLink key={name} to={path} activeClassName={classes.navBtnActive} className={classes.navBtn}>
                        <Icon
                            className={clsx(
                                current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                            )}
                            aria-hidden="true"
                        />
                        <span className="truncate">{name}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

export default Sidebar;

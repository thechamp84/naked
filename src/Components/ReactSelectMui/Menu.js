import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';

const Menu = ({
    innerProps,
    children,
    selectProps: {
        TextFieldProps: { helperText },
    },
}) => {
    return (
        <Paper
            square
            sx={{
                borderRadius: 1,
                position: 'absolute',
                zIndex: 2,
                marginTop: Boolean(helperText) ? -2 : 0.5,
                left: 0,
                right: 0,
            }}
            {...innerProps}>
            {children}
        </Paper>
    );
};

Menu.propTypes = {
    innerProps: PropTypes.shape().isRequired,
    children: PropTypes.element.isRequired,
    selectProps: PropTypes.shape({
        TextFieldProps: PropTypes.shape({
            helperText: PropTypes.string,
        }).isRequired,
    }).isRequired,
};

export default Menu;

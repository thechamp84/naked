import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const Placeholder = ({
    innerProps,
    children,
    selectProps: {
        TextFieldProps: { margin },
    },
}) => {
    return (
        <Typography
            sx={{ position: 'absolute', left: 1.85, fontSize: 16 }}
            color="textSecondary"
            {...innerProps}>
            {children}
        </Typography>
    );
};

Placeholder.propTypes = {
    children: PropTypes.node.isRequired,
    innerProps: PropTypes.shape(),
    selectProps: PropTypes.shape({
        TextFieldProps: PropTypes.shape({
            margin: PropTypes.string,
        }).isRequired,
    }).isRequired,
};

Placeholder.defaultProps = {
    innerProps: {},
};

export default Placeholder;

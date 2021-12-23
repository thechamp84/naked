import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const NoOptionsMessage = ({ children, innerProps }) => {
    return (
        <Typography sx={{ padding: (theme) => theme.spacing(1, 2) }} color="textSecondary" {...innerProps}>
            {children}
        </Typography>
    );
};

NoOptionsMessage.propTypes = {
    children: PropTypes.node.isRequired,
    innerProps: PropTypes.shape(),
};

NoOptionsMessage.defaultProps = {
    innerProps: null,
};

export default NoOptionsMessage;

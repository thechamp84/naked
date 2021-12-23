import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const SingleValue = ({ innerProps, children }) => {
    return (
        <Typography sx={{ fontSize: 16 }} {...innerProps}>
            {children}
        </Typography>
    );
};

SingleValue.propTypes = {
    children: PropTypes.node.isRequired,
    innerProps: PropTypes.shape(),
};

SingleValue.defaultProps = {
    innerProps: null,
};

export default SingleValue;

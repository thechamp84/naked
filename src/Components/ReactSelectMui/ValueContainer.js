import React from 'react';
import PropTypes from 'prop-types';

const ValueContainer = ({ children }) => {
    return <div className="flex flex-wrap flex-1 items-center overflow-hidden">{children}</div>;
};

ValueContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ValueContainer;

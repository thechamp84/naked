import React from 'react';

const InputComponent = React.forwardRef((props, ref) => {
    return <div ref={ref} {...props} />;
});

export default InputComponent;

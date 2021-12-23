import { useEffect, useState } from 'react';
import { addProgressSetter, destroyProgressSetter } from './ProgressSvc';
import PropTypes from 'prop-types';

function ProgressContainer({ initial = false, name, children }) {
    const [progress, setProgress] = useState(initial);

    useEffect(() => {
        addProgressSetter(name, setProgress);

        return () => {
            destroyProgressSetter(name);
        };
    }, []);

    return children(progress);
}

ProgressContainer.propTypes = {
    initial: PropTypes.bool,
    name: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
};

export default ProgressContainer;

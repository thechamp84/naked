import React from 'react';
import { Route } from 'react-router-dom';

const next = (remainingGuards = null, props) => {
    const guard = remainingGuards.shift();

    if (guard === undefined) {
        return <Route {...props} />;
    }

    return guard(() => next(remainingGuards, props));
};

export default function GuardedRoute({ guards, ...otherProps }) {
    const result = next([...guards], otherProps);

    return result;
}

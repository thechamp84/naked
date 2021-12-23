import React from 'react';
import ProgressContainer from '../../Utils/ProgressUtils/ProgressContainer';
import BtnBase from './BtnBase';
import PropTypes from 'prop-types';

export default function Btn({ initial, name, ...btnProps }) {
    return (
        <ProgressContainer initial={initial} name={name}>
            {/* @ts-ignore */}
            {(progress) => <BtnBase isLoading={progress} {...btnProps} />}
        </ProgressContainer>
    );
}

Btn.propTypes = {
    name: PropTypes.string.isRequired,
    initial: PropTypes.bool,
};

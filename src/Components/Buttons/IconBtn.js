import React from 'react';
import ProgressContainer from '../../Utils/ProgressUtils/ProgressContainer';
import IconBtnBase from './IconBtnBase';

export default function IconBtn({ name, initial, ...iconBtnProps }) {
    return (
        <ProgressContainer name={name} initial={initial}>
            {(progress) => <IconBtnBase isLoading={progress} {...iconBtnProps} />}
        </ProgressContainer>
    );
}

import { Container } from '@mui/material';
import React from 'react';
import ResourceHeader from './ResourceHeader';

export default function ResourcesList({
    Header,
    headerProps = { title: '' },
    Footer,
    Section,
    className,
    AfterHeader,
    BeforeFooter,
    BeforeHeader,
}) {
    return (
        <Container maxWidth="xl" className={className}>
            {BeforeHeader}
            {Header ? Header : <ResourceHeader {...headerProps} />}
            {AfterHeader}
            {Section}
            {BeforeFooter}
            {Footer}
        </Container>
    );
}

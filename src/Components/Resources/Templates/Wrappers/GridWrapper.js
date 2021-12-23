import { Container } from '@mui/material';
import React from 'react';

export default function GridWrapper({ children }) {
    return (
        <Container className="gap-4 md:grid lg:grid-cols-4 md:grid-cols-2" maxWidth="xl">
            {children}
        </Container>
    );
}

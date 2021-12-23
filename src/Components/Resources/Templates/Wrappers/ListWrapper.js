import { Card, Container, List } from '@mui/material';

export default function ListWrapper({ children, className }) {
    return (
        <Container maxWidth="xl">
            <Card>
                <List className={className}>{children}</List>
            </Card>
        </Container>
    );
}

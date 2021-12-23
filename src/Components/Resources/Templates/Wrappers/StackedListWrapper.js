import { Card, Container, List } from '@mui/material';

export default function StackedListWrapper({ children }) {
    return (
        <Container maxWidth="xl">
            <Card>
                <List>{children}</List>
            </Card>
        </Container>
    );
}

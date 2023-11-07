
import { Container, Paper, Typography, Box } from '@mui/material';

function MyInterests({ interests }) {
    return (
        <Container maxWidth="md" sx={{ marginBottom: "20px" }}>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h5" component="h2">
                    Mis Gustos e Intereses
                </Typography>
                <Box my={2}>
                    <Typography variant="body1">
                        {interests}
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}

export default MyInterests;


import { Container, Paper, Typography } from '@mui/material';
import FoodList from '../moleculas/FoodList';
import WhyReactIsGreat from '../moleculas/WhyReactIsGreat';
import MyInterests from '../moleculas/MyInterests';
import LinkMio from '../atomos/LinkMio';

function MainContent() {
    return (
        <Container maxWidth="md">
            <Paper elevation={3} style={{ textAlign: "center" }}>
                <Typography marginTop={5} variant="h4" component="h2">
                    Adrian Cristofer Calcinas Ramos
                </Typography>
                <Typography>
                    Estudiante de Ingenieria en Sistemas - Comida de mi Preferencia
                </Typography>
            </Paper>
            <FoodList />
            <WhyReactIsGreat />
            <MyInterests interests={"Ninguno"} />
            <LinkMio text={"Ver Mas"} />
        </Container>
    );
}

export default MainContent;

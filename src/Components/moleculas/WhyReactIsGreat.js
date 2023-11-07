
import { Container, Typography, Paper, Box } from '@mui/material';
import FloatingActionButtons from '../atomos/FloatingActionButtons';

function WhyReactIsGreat() {
    return (
        <Container maxWidth="md">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h5" component="h2">
                    Por qué React es una elección poderosa para el desarrollo web
                </Typography>
                <Box my={2}>
                    <Typography variant="body1">
                        React se ha establecido como una biblioteca de JavaScript excepcionalmente popular y poderosa en el ámbito del desarrollo web. Su enfoque en la creación de interfaces de usuario interactivas y dinámicas ha revolucionado la forma en que construimos aplicaciones web.
                    </Typography>
                    <Typography variant="body1">
                        Lo que hace que React sea tan atractivo es su arquitectura basada en componentes. Permite a los desarrolladores dividir la interfaz de usuario en componentes reutilizables, lo que facilita la creación y el mantenimiento de aplicaciones web complejas. Cada componente puede gestionar su propio estado y lógica, lo que resulta en un código más limpio y modular.
                    </Typography>
                    <Typography variant="body1">
                        Otra ventaja importante de React es su Virtual DOM (Modelo de Objeto Documento virtual). Este mecanismo permite actualizar solo las partes de la interfaz de usuario que han cambiado, en lugar de volver a renderizar toda la página. Como resultado, las aplicaciones React son extremadamente eficientes y proporcionan una experiencia de usuario fluida.
                    </Typography>
                    <Typography variant="body1">
                        La comunidad de React es vasta y activa, lo que significa que siempre hay un soporte y recursos abundantes disponibles para los desarrolladores. Además, React se integra sin problemas con otras tecnologías y bibliotecas, lo que le confiere una gran versatilidad.
                    </Typography>
                </Box>
                <FloatingActionButtons />
            </Paper>
        </Container>
    );
}

export default WhyReactIsGreat;

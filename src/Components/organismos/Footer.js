
import { AppBar, Toolbar, Typography } from '@mui/material';
import BasicRating from '../atomos/BasicRating';

function Footer() {
  return (
    <AppBar position="static" color="primary" sx={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "space-around", marginTop: "15px" }}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          © 2023 Adrian Calcinas - Contacto: adrian@hotmail.com
        </Typography>
      </Toolbar>
      <BasicRating />
    </AppBar>
  );
}

export default Footer;

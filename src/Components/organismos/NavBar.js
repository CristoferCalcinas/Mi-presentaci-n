
import { AppBar } from '@mui/material';
import SearchBar from '../moleculas/SearchBar';
import ToolbarMio from '../atomos/ToolbarMio';

function NavBar() {
  return (
    <AppBar position="static" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
      <div style={{ display: 'flex', flexDirection: "column" }}>
        <ToolbarMio title="Mi Presentación en React" />
        <ToolbarMio title="Taller de Programacion" />
      </div>
      <SearchBar />
    </AppBar>
  );
}

export default NavBar;

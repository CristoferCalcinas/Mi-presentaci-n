import { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0', // Color de fondo
    borderRadius: 5, // Bordes redondeados
};

const textFieldStyle = {
    flex: 1, // Toma el espacio disponible
};

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log('Buscar:', searchText);
    };

    return (
        <div style={searchContainerStyle}>
            <TextField
                label="Buscar"
                variant="outlined"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={textFieldStyle}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton color="primary" onClick={handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};

export default SearchBar;

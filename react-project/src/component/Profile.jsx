import { useState } from 'react';
import { TextField, IconButton, Avatar, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Profile() {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        value={search}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        style={{ marginRight: '30px' }}
      />
      <Avatar alt="Profile" src="/profile.jpg" />
    </div>
  );
}

export default Profile;

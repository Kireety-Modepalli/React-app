import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

 function Kireety() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            About
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            Product
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contact
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Kireety;
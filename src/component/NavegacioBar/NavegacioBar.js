import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from './NavegacioBarEstils';
import Menu from '../Menu/Menu';
import { DrawerHeader } from './NavegacioBarEstils';

export default function NavegacioBar(props) {
  const { titol = "Titol per defecte", elementsMenu = [], children } = props;

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {
            elementsMenu.length > 0 &&
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
          }
          <Typography variant="h6" noWrap component="div">
            {titol}
          </Typography>
        </Toolbar>
      </AppBar>
      {elementsMenu.length > 0 && <Menu setOpen={setOpen} open={open} elementsMenu={elementsMenu} />}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

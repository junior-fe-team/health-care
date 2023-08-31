import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button, ListItem } from '@mui/material';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        health care
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Layout({ children }: any) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <Link
                href="/"
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Health Care
              </Link>
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List
            component="nav"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              fontWeight: 'bold',
              color: '#707070',
            }}
          >
            <Link
              href="/diet"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <ListItem
                divider
                sx={{
                  '&:hover': {
                    backgroundColor: '#F5F5F5',
                  },
                  '&:active': {
                    background:
                      'linear-gradient(45deg, #ffffff 30%, #b7d5f3 90%)',
                    boxShadow: '0 3px 5px 2px #d3dde8',
                  },
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '15px 0px',
                }}
              >
                식단기록
              </ListItem>
            </Link>
            <Link
              href="/community"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ListItem
                divider
                sx={{
                  '&:hover': {
                    backgroundColor: '#F5F5F5',
                  },
                  '&:active': {
                    background:
                      'linear-gradient(45deg, #ffffff 30%, #b7d5f3 90%)',
                    boxShadow: '0 3px 5px 2px #d3dde8',
                  },
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '15px 0px',
                }}
              >
                커뮤니티
              </ListItem>
            </Link>
            <Link
              href="/myinfo"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <ListItem
                divider
                sx={{
                  '&:hover': {
                    backgroundColor: '#F5F5F5',
                  },
                  '&:active': {
                    background:
                      'linear-gradient(45deg, #ffffff 30%, #b7d5f3 90%)',
                    boxShadow: '0 3px 5px 2px #d3dde8',
                  },
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '15px 0px',
                }}
              >
                내정보
              </ListItem>
            </Link>
            <ListItem
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px 0px',
              }}
            >
              <Link href="/" sx={{ textDecoration: 'none' }}>
                <Button variant="contained">로그아웃</Button>
              </Link>
            </ListItem>
          </List>
        </Drawer>
        <main>{children}</main>
      </Box>
    </ThemeProvider>
  );
}

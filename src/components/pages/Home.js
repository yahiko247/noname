import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import Person3Icon from '@mui/icons-material/Person3';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardMedia, CardContent, Container } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <strong>CRYPTO THE DOG</strong>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Profile', 'Settings'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={index === 0 ? '/' : index === 1 ? '/profile' : '/settings'}>
                <ListItemIcon>
                  {index === 0 ? <OtherHousesIcon /> : index === 1 ? <Person3Icon /> : <SettingsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ marginX: 2, marginY: 20 }}>
            <ListItemIcon>
              <Link to="/">
                <LogoutIcon />
              </Link>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open} sx={{ backgroundColor: '#455a64', flexGrow: 1, overflow: 'auto' }}>
        <div  className="contain-mui" style={{height:'110vh', backgroundColor:'gray', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 4)'}}>
          <Container  className="contain-mui2" style={{display:'flex', width:'100', marginTop:'60px', justifyContent:'center'}}>
          <Card className='card' sx={{ maxWidth: '100%', margin: '10px', marginTop:'50px' }}>
              <CardMedia
                className='card2'
                sx={{ height: 140 }}
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                alt="Description of the image"
                title="green iguana"
              />
              <CardContent className='CardActions'>
                <Typography gutterBottom variant="h5" component="div">
                  Metamask
                </Typography>
              </CardContent>
              <CardActions> 
                <Button size="small">Share</Button>
                <Button size="small" component={Link} to="https://metamask.io/" style={{ textDecoration: 'none', color: 'green' }}>Learn More</Button>
              </CardActions>
            </Card>
            <Card className='card' sx={{ maxWidth: '100%', margin:'10px', marginTop:'50px' }}>
              <CardMedia
                className='card2'
                sx={{ height: 140 }}
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Trust_Wallet_Token.png"
                alt="Description of the image"
                title="green iguana"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   Trust wallet
                  </Typography>
                </CardContent>
              <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small"><Link to='https://trustwallet.com/press'style={{textDecoration:'none', color:'green'}}>Learn More</Link></Button>
              </CardActions>
            </Card>
            <Card className='card' sx={{ width: '100', margin:'10px',  marginTop:'50px'}}>
              <CardMedia
                className='card2'
                sx={{ height: 140 }}
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
                alt="Description of the image"
                title="green iguana"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    BitCoin
                  </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small"><Link to='https://bitcoin.org/en/'style={{textDecoration:'none', color:'green'}}>Learn More</Link></Button>
                </CardActions>
            </Card>

          <Card className='card' sx={{ width: '100', margin:'10px', marginTop:'50px' }}>
            <CardMedia
            className='card2'
            sx={{ height: 140 }}
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/PayPal_Logo_Icon_2014.svg"
            alt="Description of the image"
            title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PayPal
              </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small"><Link to='https://www.paypal.com/ph/home'style={{textDecoration:'none', color:'green'}}>Learn More</Link></Button>
            </CardActions>
          </Card>
        </Container>
      <Container className='contain-mui3' style={{display:'flex', justifyContent:'center'}}>
      <Card className='card' sx={{ width: '100', margin:'10px', marginTop:'50px' }}>
          <CardMedia
            className='card2'
            sx={{ height: 140 }}
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/b/be/VeKings.png"
            alt="Description of the image"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              NFT
            </Typography>
           </CardContent>
           <CardActions>
              <Button size="small">Share</Button>
              <Button size="small"><Link to='https://auranft.co/?https://auranft.co/?utm_source=GoogleSearch&utm_medium=cpc&utm_campaign=GoogleSearch_Aura&gclid=Cj0KCQiA5rGuBhCnARIsAN11vgS2Q7vNIrW01YOdc8uU3wHXybZArTKzKH6W8y1EezkyKp-Kdo6WL98aAuTmEALw_wcB'style={{textDecoration:'none', color:'green'}}>Learn More</Link></Button>
          </CardActions>
        </Card>
        <Card className='card' sx={{ width: '100', margin:'10px', marginTop:'50px'}}>
          <CardMedia
            className='card2'
            sx={{ height: 140 }}
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/0/02/Metacraft_round.jpg"
            alt="Description of the image"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               CRYPTO
            </Typography>
           </CardContent>
           <CardActions>
              <Button size="small">Share</Button>
              <Button size="small"><Link to='https://crypto.com/'style={{textDecoration:'none', color:'green'}}>Learn More</Link></Button>
          </CardActions>
        </Card>
        <Card className='card' sx={{ width: '100', margin:'10px',  marginTop:'50px' }}>
          <CardMedia
           className='card2'
           sx={{ height: 140 }}
           component="img"
           src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
           alt="Description of the image"
           title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              GitHub
            </Typography>
           </CardContent>
           <CardActions>
              <Button size="small">Share</Button>
              <Button size="small"><Link to='https://github.com/'style={{textDecoration:'none', color:'green'}}>Learn More</Link></Button>
          </CardActions>
        </Card>
      </Container>
      </div>
      </Main>
    </Box>
  );
}

export default Home;

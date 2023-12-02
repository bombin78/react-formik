import React, {
    useState,
} from 'react';

import {
    BrowserRouter,
    Link,
    Route,
    Routes,
} from 'react-router-dom';
import {
  AppBar,
  Collapse,
  Container,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import About from './pages/About';
import SimpleFormExample1 from './pages/SimpleFormExample1';
import SimpleFormExample2 from './pages/SimpleFormExample2';
import SimpleFormExample3 from './pages/SimpleFormExample3';
import SimpleFormExample4 from './pages/SimpleFormExample4';
import SimpleFormExample5 from './pages/SimpleFormExample5';
import SimpleFormExample6 from './pages/SimpleFormExample6';
import SimpleFormExample7 from './pages/SimpleFormExample7';
import SimpleFormExample8 from './pages/SimpleFormExample8';
import SimpleFormExample9 from './pages/SimpleFormExample9';
import './App.css';

function App() {
    const [openSubMenu, setOpenSubMenu] = useState(false);

    const handleSubMenuToggle = () => {
        setOpenSubMenu(!openSubMenu);
    };

    return (
        <BrowserRouter>
            <div className='app'>
                <CssBaseline />

                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Forms with React18, TypeScript, Formik, Yup and Material UI
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className='contentWrapper'>

                    <Drawer
                        variant="permanent"
                        sx={{
                            width: 200,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: 240,
                                boxSizing: 'border-box',
                                marginTop: '64px',
                            },
                        }}
                    >
                        <List>
                            <ListItem button component={Link} to="/">
                                <ListItemText primary="О проекте" />
                            </ListItem>

                            <ListItem button onClick={handleSubMenuToggle}>
                                <ListItemText primary="Простая форма" />
                                {openSubMenu 
                                    ? <ListItemIcon><ExpandLessIcon /></ListItemIcon> 
                                    : <ListItemIcon><ExpandMoreIcon /></ListItemIcon>
                                }
                            </ListItem>

                            <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button component={Link} to="/example1">
                                        <ListItemText primary="Пример 1" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/example2">
                                        <ListItemText primary="Пример 2" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/example3">
                                        <ListItemText primary="Пример 3" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/example4">
                                        <ListItemText primary="Пример 4" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/example5">
                                        <ListItemText primary="Пример 5" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/example6">
                                        <ListItemText primary="Пример 6" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/example7">
                                        <ListItemText primary="Пример 7" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/example8">
                                        <ListItemText primary="Пример 8" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/example9">
                                        <ListItemText primary="Пример 9" />
                                    </ListItem>
                                </List>
                            </Collapse>

                            <ListItem button component={Link} to="/">
                                <ListItemText primary="Другая форма" />
                            </ListItem>
                        </List>
                    </Drawer>

                    <Container 
                        component="main" 
                        sx={{ 
                            display: 'flex',
                            flexGrow: 1, 
                            marginTop: '64px', 
                            p: 3, 
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<About />} />
                            <Route path="/example1" element={<SimpleFormExample1 />} />
                            <Route path="/example2" element={<SimpleFormExample2 />} />
                            <Route path="/example3" element={<SimpleFormExample3 />} />
                            <Route path="/example4" element={<SimpleFormExample4 />} />
                            <Route path="/example5" element={<SimpleFormExample5 />} />
                            <Route path="/example6" element={<SimpleFormExample6 />} />
                            <Route path="/example7" element={<SimpleFormExample7 />} />
                            <Route path="/example8" element={<SimpleFormExample8 />} />
                            <Route path="/example9" element={<SimpleFormExample9 />} />
                        </Routes>
                    </Container>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

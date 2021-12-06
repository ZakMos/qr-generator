import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';



export default class Header extends React.Component {
    render() {
        return (
            <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Schnelltest Zahnzentrum Dr. Hijazi
                    </Typography>
                    <Button color="inherit">Zahnzentrum</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            </>
        )
    }
}


 
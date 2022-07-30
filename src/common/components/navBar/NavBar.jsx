import React from "react";
import { AppBar, Box, Container, Toolbar, Typography, Button, CssBaseline } from "@mui/material";

import SpaceBetweenBox from "../SpaceBetweenBox";
import { Link } from 'react-router-dom';

const NavBar = () => {

    const handleOnClickSignIn = () => {

    }

    return <React.Fragment>
        <CssBaseline />
        <Box flexGrow={1}>
            <AppBar position="static">
                <Container maxWidth='xl'>
                    <Toolbar>
                        <SpaceBetweenBox width='100%'>
                            <Link to="/">
                                <Typography
                                    variant='h6'
                                    sx={{ cursor: 'pointer' }}
                                >
                                    University
                                </Typography>
                            </Link>

                            <Link to="/sign-in">

                                <Button
                                    variant='text'
                                    color='inherit'
                                    onClick={handleOnClickSignIn}
                                >
                                    Sign In
                                </Button>
                            </Link>
                        </SpaceBetweenBox>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    </React.Fragment>;
}

export default NavBar;
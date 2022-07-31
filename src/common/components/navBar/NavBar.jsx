import React from "react";
import { AppBar, Box, Container, Toolbar, Typography, Button, CssBaseline } from "@mui/material";

import SpaceBetweenBox from "../SpaceBetweenBox";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "../../../store/auth-slice";

const NavBar = () => {
    const { isLoggedIn } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnClickSignIn =  () => {
        if (isLoggedIn) {
            dispatch(AuthActions.signOut());
        } else {
            navigate('/sign-in');
        }
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


                            <Button
                                variant='text'
                                color='inherit'
                                onClick={handleOnClickSignIn}
                            >
                                {
                                    isLoggedIn ? "Sign Out" : "Sign In"
                                }
                            </Button>

                        </SpaceBetweenBox>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    </React.Fragment>;
}

export default NavBar;
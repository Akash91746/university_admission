import React from "react";
import Container from "@mui/material/Container";

import NavBar from "../../common/components/navBar/NavBar";
import SignInModes from "./components/SignInModes";

const SignInModesScreen = () => {

    return <React.Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <Container maxWidth='sm'>
                <SignInModes />
            </Container>
        </main>
    </React.Fragment>
}

export default SignInModesScreen;
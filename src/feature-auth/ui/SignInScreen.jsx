import React, { useEffect } from "react";
import Container from "@mui/material/Container";

import NavBar from "../../common/components/navBar/NavBar";
import SignInForm from "./components/SignInForm";
import { Box, Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import signInModes from "../domain/utils/SignInModes";

const SignInScreen = () => {

    const { mode } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const isValidMode = mode === signInModes.applicant ||
            mode === signInModes.committeeMember ||
            mode === signInModes.staffMember;

        if (mode === undefined || !isValidMode) {
            navigate('/sign-in');
        }

    }, [mode]);

    return <React.Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <Container maxWidth='sm'>
                <Card sx={{ mt: 28 }}>
                    <CardHeader title={`Sign in as ${mode}`} />

                    <Divider />

                    <CardContent>
                        <SignInForm
                            mode={mode}
                        />
                    </CardContent>
                </Card>
            </Container>
        </main>
    </React.Fragment>
}

export default SignInScreen;
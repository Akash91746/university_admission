import { Box, Card, CardHeader, Container } from "@mui/material";
import React from "react";

import { Link } from 'react-router-dom';
import NavBar from "../../common/components/navBar/NavBar";
import background from '../../styles/raw/home_page_bg.jpg';

const HomeScreen = () => {
    return <React.Fragment>

        <Box
            position='absolute'
            width='100%'
            height='100%'
            zIndex={-1}
            sx={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', opacity: '0.8' }}
        />

        <header>
            <NavBar />
        </header>
        <main>
            <Container sx={{ mt: 2 }}>
                <Link to="/courses">
                    <Card>
                        <CardHeader title='Courses' />
                    </Card>
                </Link>

                <Link to={'/applicants'}>
                    <Card sx={{ mt: 2 }}>
                        <CardHeader title="Applicants" />
                    </Card>
                </Link>

                <Link to={'/staff-member'}>
                    <Card sx={{ mt: 2 }}>
                        <CardHeader title='Staff Member' />
                    </Card>
                </Link>

                <Link to={'/admissions'}>
                    <Card sx={{ mt: 2 }}>
                        <CardHeader title='Admissions' />
                    </Card>
                </Link>

                <Link to={'/admission-committee'}>
                    <Card sx={{ mt: 2 }}>
                        <CardHeader title='Admission Committee' />
                    </Card>
                </Link>
            </Container>
        </main>
    </React.Fragment>;
}

export default HomeScreen;
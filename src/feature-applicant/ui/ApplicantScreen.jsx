import { Container, Dialog, Fab,Box } from "@mui/material";
import React, { useState } from "react";
import AddOutlined from '@mui/icons-material/AddOutlined';

import NavBar from '../../common/components/navBar/NavBar';
import Applicants from "./Applicants";
import AddApplicant from "./components/AddApplicant";
import background from '../../styles/raw/applicants_bg.jpg';

const ApplicantScreen = () => {

    const [open, setOpen] = useState(false);
    const [editItem, setEditItem] = useState(undefined);

    const handleOpen = () => {
        setOpen(value => {
            const val = !value;
            if (!val) {
                setEditItem(undefined);
            }
            return val;
        });
    }

    const handleEditItem = (item, index) => {
        setEditItem({
            item: item,
            index: index
        });
        handleOpen();
    }

    return <React.Fragment>

        <Box
            position='absolute'
            width='100%'
            height='100%'
            zIndex={-1}
            sx={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', opacity: '0.6' }}
        />

        <header>
            <NavBar />
        </header>
        <main>
            <Container
                maxWidth='xl'
            >
                <Applicants
                    sx={{ mt: 2 }}
                    onClickEdit={handleEditItem}
                />

                <Dialog
                    open={open}
                    onClose={handleOpen}
                    maxWidth='xs'
                    fullWidth
                >
                    <AddApplicant
                        onClickCancel={handleOpen}
                        editItem={editItem}
                    />
                </Dialog>

                <Fab
                    color="secondary"
                    variant='extended'
                    sx={{ position: 'fixed', bottom: 0, mb: 2 }}
                    onClick={handleOpen}
                >
                    <AddOutlined sx={{ mr: 2 }} /> Add Applicant
                </Fab>
            </Container>
        </main>
    </React.Fragment>
}

export default ApplicantScreen;
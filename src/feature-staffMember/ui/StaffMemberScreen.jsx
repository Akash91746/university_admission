import { Container, Dialog, Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";

import NavBar from '../../common/components/navBar/NavBar';
import AddFab from "../../common/components/AddFab";
import AddStaffMember from "./components/AddStaffMember";
import { initializeStaffMembers } from "../../store/staffMembers-slice";
import StaffMembers from "./components/StaffMembers";

const StaffMemberScreen = () => {

    const [open, setOpen] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(initializeStaffMembers());
    }, []);

    const handleOpen = () => {
        setOpen(value => {
            const val = !value;
            if (!val) {
                setEditItem(undefined);
            }
            return val;
        });
    }

    const handleEditItem = (value, index) => {
        setEditItem({
            value, index
        });
        handleOpen();
    }

    return <React.Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <Container maxWidth='xl'>

                <StaffMembers
                    sx={{ mt: 2 }}
                    onClickEdit={handleEditItem}
                />

                <Dialog
                    open={open}
                    onClose={handleOpen}
                    maxWidth={'xs'}
                    fullWidth
                >
                    <AddStaffMember
                        onClickCancel={handleOpen}
                        editItem={editItem}
                    />
                </Dialog>

                <AddFab
                    text={'Add Staff Member'}
                    onClick={handleOpen}
                />
            </Container>
        </main>
    </React.Fragment>
}

export default StaffMemberScreen;
import { Container } from "@mui/material";
import React from "react";

import NavBar from "../../common/components/navBar/NavBar";
import FabDialog from "../../common/components/FabDialog";
import useOpenEdit from "../../hooks/useOpenEdit";
import AddCommitteeMember from "./components/AddCommitteeMember";
import CommitteeMembers from "./components/CommitteeMembers";

const AdmissionCommitteeScreen = () => {

    const { open, handleEditItem, handleOpen, editItem } = useOpenEdit();

    return <React.Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <Container maxWidth='xl'>

                <CommitteeMembers
                    onClickEdit={handleEditItem}
                    sx={{mt:2}}
                />

                <FabDialog
                    open={open}
                    fabText={"Add Committee Member"}
                    handleOpen={handleOpen}
                >
                    <AddCommitteeMember
                        editItem={editItem}
                        onClickCancel={handleOpen}
                    />
                </FabDialog>
            </Container>
        </main>
    </React.Fragment>
}

export default AdmissionCommitteeScreen;
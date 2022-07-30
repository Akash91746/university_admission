import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { ApplicantsAction } from "../../store/applicant-slice";
import Applicant from "./components/Applicant";

const Applicants = ({ onClickEdit, ...others }) => {

    const { applicants } = useSelector(store => store.applicants);
    const dispatch = useDispatch();

    const handleOnClickDelete = (index) => {
        dispatch(ApplicantsAction.delete(index));
    }

    return <Grid container {...others}>
        {
            applicants && applicants.map((data, index) => {
                return <Grid item md={3} xl={3} lg={3}
                    key={data.phoneNumber}
                >
                    <Applicant
                        data={data}
                        onClickDelete={() => handleOnClickDelete(index)}
                        onClickEdit={() => onClickEdit(data, index)}
                    />
                </Grid>
            })
        }
    </Grid>
}

export default Applicants;
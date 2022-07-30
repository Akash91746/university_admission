import { Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { CourseActions } from "../../store/courses-slice";
import CourseComp from "./components/CourseComp";

const Courses = ({ onClickEdit, ...others }) => {
    const { courses } = useSelector(store => store.courses);
    const dispatch = useDispatch();

    const handleOnClickDelete = (data, index) => {
        dispatch(CourseActions.delete(index));
    }

    const handleOnEdit = (data, index) => {
        onClickEdit(data, index);
    }

    return <React.Fragment>
        <Grid container {...others} spacing={2}>
            {
                courses.map((data, index) => (
                    <Grid item
                        md={3} xl={3} lg={3}
                        key={`${data.title}_${data.startDate.toDateString()}`}
                    >
                        <CourseComp
                            data={data}
                            onClickEdit={() => handleOnEdit(data, index)}
                            onClickDelete={() => handleOnClickDelete(data, index)}
                        />
                    </Grid>
                ))
            }
        </Grid>
    </React.Fragment >
}

export default Courses;
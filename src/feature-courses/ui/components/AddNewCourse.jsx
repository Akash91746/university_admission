import React from "react";

import { Button, Typography } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import { TextField } from "formik-mui";
import SpaceBetweenBox from "../../../common/components/SpaceBetweenBox";
import DatePickerField from "./DatePickerField";
import { useDispatch } from "react-redux";
import { CourseActions } from "../../../store/courses-slice";
import * as Yup from 'yup';

const initialValues = {
    title: '',
    duration: '',
    startDate: '',
    endDate: '',
    fees: ''
}

const AddNewCourse = ({ editItem, editItemIndex, handleOnClickCancel }) => {

    const dispatch = useDispatch();

    const handleOnSubmit = (values) => {
        if (editItem) {
            dispatch(CourseActions.update({ item: values, index: editItem.index }));
        } else {
            dispatch(CourseActions.add(values));
        }
        handleOnClickCancel();
    }

    return <React.Fragment>
        <Formik
            initialValues={editItem ? {
                title: editItem.item.title,
                startDate: editItem.item.startDate,
                endDate: editItem.item.endDate,
                duration: '',
                fees: editItem.item.fees
            } : initialValues}
            onSubmit={handleOnSubmit}
            validationSchema={Yup.object().shape({
                title: Yup.string()
                    .min(2, 'Min 2 characters long')
                    .required('Required *'),
                startDate: Yup.string()
                    .required("Required *"),
                endDate: Yup.string()
                    .required("Required *"),
                fees: Yup.number()
                    .typeError("Please enter valid input")
                    .min(0, "Please enter valid input")
                    .required("Required *")
            })}
        >
            {({ values, setFieldValue }) => (
                <Form>

                    <Field
                        name='title'
                        label='Title'
                        component={TextField}
                        fullWidth
                        required
                    />

                    <SpaceBetweenBox mt={2}>

                        <Typography>
                            Start Date :
                        </Typography>

                        <DatePickerField
                            name='startDate'
                            value={values.startDate}
                            onChange={setFieldValue}
                        />
                    </SpaceBetweenBox>

                    <SpaceBetweenBox mt={2}>
                        <Typography>
                            End Date :
                        </Typography>

                        <DatePickerField
                            name='endDate'
                            value={values.endDate}
                            onChange={setFieldValue}
                        />
                    </SpaceBetweenBox>

                    <Field
                        name='fees'
                        label='Fees'
                        component={TextField}
                        fullWidth
                        required
                        sx={{ mt: 2 }}
                    />

                    <SpaceBetweenBox mt={2}>
                        <Button
                            variant='outlined'
                            onClick={handleOnClickCancel}
                        >
                            Cancel
                        </Button>

                        <Button variant='contained' type='submit'>
                            {
                                editItem ? "Update" : "Add"
                            }
                        </Button>
                    </SpaceBetweenBox>
                </Form>
            )}
        </Formik>
    </React.Fragment>;
}

export default AddNewCourse;
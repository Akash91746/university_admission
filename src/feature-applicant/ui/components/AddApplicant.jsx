import React from "react";
import { DialogContent, DialogTitle, Divider, Button } from "@mui/material";
import { Field, Formik, Form } from "formik";
import { TextField } from "formik-mui";
import * as Yup from 'yup';
import "yup-phone";

import SpaceBetweenBox from "../../../common/components/SpaceBetweenBox";
import { useDispatch } from "react-redux";
import { ApplicantsAction } from "../../../store/applicant-slice";
import formValidation from "../../domain/utils/formValidation";

const initialValues = {
    name: '',
    phoneNumber: '',
    degree: "",
    percent: '',
    course: "",
    password: '',
    status: ''
}

const AddApplicant = ({ onClickCancel, editItem }) => {

    const dispatch = useDispatch();

    const handleOnSubmit = (values) => {
        if (editItem) {
            dispatch(ApplicantsAction.update({
                item: values,
                index: editItem.index
            }));
        } else {
            dispatch(ApplicantsAction.add(values));
        }
        onClickCancel();
    }

    return <React.Fragment>
        <DialogTitle>
            {editItem ? "Update Applicant" : "Add Applicant"}
        </DialogTitle>
        <Divider />
        <DialogContent>
            <Formik
                initialValues={editItem ? {
                    name: editItem.item.name,
                    phoneNumber: editItem.item.phoneNumber,
                    degree: editItem.item.degree,
                    percent: editItem.item.percent,
                    password: editItem.item.password,
                    status: editItem.item.status,
                    course: editItem.item.course
                } : initialValues}
                onSubmit={handleOnSubmit}
                validationSchema={formValidation}
            >
                {({ values, setFieldValue }) => (
                    <Form>

                        <Field
                            name='name'
                            label='Name'
                            component={TextField}
                            fullWidth
                            required
                        />

                        <Field
                            name='phoneNumber'
                            label='Phone Number'
                            required
                            fullWidth
                            component={TextField}
                            sx={{ mt: 2 }}
                        />

                        <Field
                            name='degree'
                            label='Degree'
                            required
                            fullWidth
                            component={TextField}
                            sx={{ mt: 2 }}
                        />

                        <Field
                            name='percent'
                            label='Graduation Percent'
                            required
                            fullWidth
                            component={TextField}
                            sx={{ mt: 2 }}
                        />

                        <Field
                            name='course'
                            label="Course"
                            required
                            fullWidth
                            component={TextField}
                            sx={{ mt: 2 }}
                        />

                        <Field
                            name="password"
                            label="Password"
                            required
                            fullWidth
                            component={TextField}
                            sx={{ mt: 2 }}
                            type='password'
                        />

                        <Field
                            name='status'
                            label='Status'
                            required
                            fullWidth
                            component={TextField}
                            sx={{ mt: 2 }}
                        />

                        <SpaceBetweenBox mt={2}>
                            <Button
                                variant='outlined'
                                onClick={onClickCancel}
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
        </DialogContent>
    </React.Fragment>
}

export default AddApplicant;
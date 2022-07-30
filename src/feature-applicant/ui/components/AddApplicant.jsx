import React from "react";
import { DialogContent, DialogTitle, Divider, Button } from "@mui/material";
import { Field, Formik, Form } from "formik";
import { TextField } from "formik-mui";
import * as Yup from 'yup';
import "yup-phone";

import SpaceBetweenBox from "../../../common/components/SpaceBetweenBox";
import { useDispatch } from "react-redux";
import { ApplicantsAction } from "../../../store/applicant-slice";

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
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required("Required *")
                        .min(2, "Minimum 2 characters long"),
                    phoneNumber: Yup.string()
                        .phone(undefined, true, "Please enter a valid phone number")
                        .required("Required *"),
                    degree: Yup.string()
                        .required("Required *"),
                    percent: Yup.number()
                        .typeError("Please enter a valid percent")
                        .min(0, 'Enter percent range from 0% - 100%')
                        .max(100, 'Enter percent range from 0% - 100%')
                        .required("Required *"),
                    course: Yup.string()
                        .required("Required * "),
                    password: Yup.string()
                        .required("Required *")
                        .min(8, "Minimum 8 characters required")
                })}
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
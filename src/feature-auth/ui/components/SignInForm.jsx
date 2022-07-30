import React from "react";

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui';

import SpaceBetweenBox from "../../../common/components/SpaceBetweenBox";

const initialValues = {
    id: '',
    password: ''
}

const SignInForm = ({ mode }) => {

    const idLabel = mode + ' id';

    const capitalized = idLabel.charAt(0).toUpperCase() + idLabel.slice(1);

    return <React.Fragment>
        <Formik
            initialValues={initialValues}
            onSubmit={() => { }}
            validationSchema={Yup.object().shape({
                id: Yup.string()
                    .min(4, 'Please enter a valid id')
                    .required('Required *'),
                password: Yup.string()
                    .min(8, "Minimum 8 characters required")
                    .required('Required *')
            })}
        >
            {({ isSubmitting, setSubmitting }) => (
                <Form>

                    <Field
                        name="id"
                        label={capitalized}
                        component={TextField}
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 2, mb: 2 }}
                        required
                    />

                    <Field
                        name="password"
                        label="Password"
                        component={TextField}
                        fullWidth
                        variant="outlined"
                        sx={{ mb: 2 }}
                        type='password'
                        required
                    />

                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        disabled={isSubmitting}
                        type='submit'
                    >
                        Sign In
                    </Button>

                    <SpaceBetweenBox mt={2} mb={1} >

                        <Button
                            variant="text"
                            sx={{ textTransform: 'none', padding: 0 }}
                            disableRipple
                            onClick={() => { }}>
                            Forgot Password
                        </Button>

                        <Link to='/sign-up'>
                            <Button
                                variant="text"
                                sx={{ textTransform: 'none', padding: 0 }}
                                disableRipple>
                                New user? Sign Up.
                            </Button>
                        </Link>

                    </SpaceBetweenBox>

                </Form>
            )}

        </Formik>
    </React.Fragment>;
}

export default SignInForm;
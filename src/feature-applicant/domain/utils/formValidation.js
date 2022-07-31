import * as Yup from 'yup';

const formValidation = Yup.object().shape({
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
});

export default formValidation;
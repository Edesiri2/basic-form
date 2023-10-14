import * as Yup from 'yup';
const personalValidationSchema = Yup.object({
 firstName: Yup.string().required('First name is required'),
 lastName: Yup.string().required('Last name is required'),
 middleName: Yup.string().required('Middle name is required'),
 dob: Yup.string().required('Date of birth is required'),
 email: Yup.string().required('Email is required'),
 phoneNumber: Yup.string().required('Phone number is required'),
 insuranceNumber: Yup.string().required('Insurance number is required'),
 gender: Yup.string().required('Gender is required'),

})

export default personalValidationSchema
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  mobileNo: Yup.string()
    .required("Mobile number is required")
    .matches(/^\d{10}$/, "Mobile number must have exactly 10 digits"),
  password: Yup.string().required("Password is required"),
});

export default validationSchema;

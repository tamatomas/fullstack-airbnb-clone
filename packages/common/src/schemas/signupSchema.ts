import * as yup from "yup";

export const signupSchema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "At least 8 characters")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
    )
    .required("Password is required"),
  born: yup.object().required(),
});

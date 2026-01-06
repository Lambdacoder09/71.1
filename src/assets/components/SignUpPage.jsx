import { memo } from "react";
import { Link } from "react-router-dom";
import { FaAmazon } from "react-icons/fa";
import { withFormik } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";

function callSignupApi(values, { setSubmitting, props }) {
  const { navigate } = props;

  console.log(
    "Signing up with:",
    values.username,
    values.email,
    values.password
  );

  alert(
    `Account created for ${values.username}.\nVerification link sent to ${values.email}`
  );

  navigate("/");
  setSubmitting(false);
}

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpPage = memo(
  ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid,
  }) => {
    return (
      <div
        className="bg-blue-400 flex justify-center items-center w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/loginbg.svg")' }}
      >
        <div className="absolute top-4 right-4">
          <Link to="/" className="text-white text-sm hover:underline">
            Continue without login
          </Link>
        </div>

        <div className="flex flex-col gap-6 px-4 w-full max-w-md text-white">
          <FaAmazon className="mx-auto text-9xl" />
          <h1 className="text-2xl font-bold text-center">
            Create Your Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="username"
              placeholder="Username"
              value={values.username}
              error={errors.username}
              touched={touched.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              error={errors.email}
              touched={touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              error={errors.password}
              touched={touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="bg-white text-[#38A5FF] py-3 rounded w-full font-semibold disabled:opacity-60"
            >
              CREATE
            </button>

            <div className="text-sm text-center">
              Already have an account?
              <Link to="/login" className="ml-1 underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
);

export default withFormik({
  mapPropsToValues: () => initialValues,
  validationSchema,
  handleSubmit: callSignupApi,
  validateOnMount: true,
})(SignUpPage);

import { memo } from "react";
import { useNavigate, Link } from "react-router-dom";
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
    navigate,
  }) => {
    return (
      <div
        className="bg-white flex justify-center items-center w-full h-screen"
      >
        <div className="flex flex-col gap-6 px-4 w-full max-w-md text-black">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20250504041148" 
          alt="Amazon logo" 
          className="h-16 mx-auto mb-6" 
        />
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
              className="bg-yellow-400 text-black py-3 rounded w-full font-semibold disabled:opacity-60 hover:bg-yellow-300 transition"
            >
              CREATE
            </button>

            <div className="text-sm text-center">
              Already have an account?
              <Link to="/login" className="ml-1 underline text-cyan-600">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
);

const EnhancedSignUpPage = withFormik({
  mapPropsToValues: () => initialValues,
  validationSchema,
  handleSubmit: callSignupApi,
  validateOnMount: true,
})(SignUpPage);

export default function SignUpPageWithNavigate() {
  const navigate = useNavigate();
  return <EnhancedSignUpPage navigate={navigate} />;
}

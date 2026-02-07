import { memo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { withFormik } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";


function callLoginApi(values, { setSubmitting, props }) {
  const navigate = props.navigate;
  console.log("Logging in with:", values.username, values.password);
  navigate("/");
  setSubmitting(false);
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

const initialValues = {
  username: "",
  password: "",
};

export const LoginPage = memo(
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
        className="flex justify-center items-center w-full h-screen bg-white"
      >
        <div className="top-4 left-4 absolute">
          <Link
            to="/"
            className="text-gray-800 text-sm hover:underline"
          >
            Continue without login
          </Link>
        </div>

        <div className="flex flex-col gap-6 px-4 w-full max-w-md text-black">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20250504041148" 
          alt="Amazon logo" 
          className="h-16 mx-auto mb-6" 
        />
          <h1 className="font-bold text-2xl text-center">
            Login to Your Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              autoComplete="username"
              value={values.username}
              error={errors.username}
              touched={touched.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              value={values.password}
              error={errors.password}
              touched={touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <div className="text-sm text-center">
              <Link to="/forgot-password" className="hover:underline text-cyan-600">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="bg-yellow-400 disabled:opacity-60 py-3 rounded w-full font-semibold text-black disabled:cursor-not-allowed hover:bg-yellow-300 transition"
            >
              LOGIN
            </button>

            <div className="text-sm text-center">
              Don't have an account?
              <Link
                to="/signup"
                className="ml-1 underline hover:underline-offset-2 text-cyan-600"
              >
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
);

const EnhancedLoginPage = withFormik({
  mapPropsToValues: () => initialValues,
  validationSchema: validationSchema,
  handleSubmit: callLoginApi,
  validateOnMount: true,
})(LoginPage);

export default function LoginPageWithNavigate() {
  const navigate = useNavigate();
  return <EnhancedLoginPage navigate={navigate} />;
}

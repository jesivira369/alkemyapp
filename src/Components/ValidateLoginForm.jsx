import { Formik } from "formik";
import * as Yup from "yup"; // used when validating with a pre-built solution
import axios from "axios";
import Swal from "sweetalert2";


const ValidatedLoginForm = ({user, setUser}) => (

  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
        //SweetAlert de inicio de sesion
      let timerInterval;
      Swal.fire({
        title: "Loging sesion!",
        html: "I will close automatically",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {;
          }, 50);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
      //Submitting values de formik
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);

      const url = "http://challenge-react.alkemy.org";

      axios
        .post(url, { email: values.email, password: values.password })
        .then((response) => {
          localStorage.setItem('myToken', response.data.token);
          console.log(user)
          console.log("usamos ahora el setUser")
          setUser(false)
        })
        .catch(({ response }) => {
          console.log(response);
          //SweetAlert mensaje de error post-axios
          Swal.fire({
            title: "Error!",
            text: "The email or the password are invalid, please try again",
            icon: "error",
            confirmButtonText: "Continue",
          });
        });
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(5, "Password is too short"),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      return (
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {errors.email && touched.email && (
                <div className="text-red-600 mb-[20px] mt-[15px]">
                  {errors.email}
                </div>
              )}
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="email">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {errors.password && touched.password && (
                <div className="text-red-600 mb-[20px] mt-[15px]">
                  {errors.password}
                </div>
              )}
            </div>
            <div className="flex items-baseline justify-between">
              <button
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                disabled={isSubmitting}
                type="submit"
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;

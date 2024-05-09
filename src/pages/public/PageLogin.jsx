import React, { useState } from "react";
import { useFormik } from "formik";
import { loginValidationSchema } from "../../utils/Validation";

function PageLogin() {
  const [pageLoading, setPageLoading] = useState(false); // Add state for page loading

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        setPageLoading(true); // Set page loading to true when form is submitted
        // Your login logic here
        await login(values); // Assuming login is an async function
        setPageLoading(false); // Set page loading to false after successful login
      } catch (error) {
        setPageLoading(false); // Set page loading to false if login fails
        console.error("Login failed:", error);
      }
    },
  });

  return (
    <div>
       <main className="main-content" style={{ marginTop: "-20px" }}>
          <div className="admin">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-xxl-3 col-xl-4 col-md-6 col-sm-8">
                  <div className="edit-profile">
                    <div className="edit-profile__logos">
                      {/* <a href="/">
                        <img
                          className="dark"
                          src="/img/clarita/logo.svg"
                          alt="/"
                          width={20}
                          height={50}
                        />
                        <img
                          className="light"
                          src="/img/clarita/logo.svg"
                          alt="/"
                        />
                      </a> */}
                        <a className="navbar-brand" href="/">
              <img className="dark" src="https://jetronics.ae/uploads/lib/logo.jpg?v=2.0" alt="logo" />
            {/* <img className="light" src="/img/logo-white.png" alt="logo" /> */}
              {/* <span>Jetronics</span> */}
            </a>
                    </div>

                    <div className="card border-0">
                      <div className="card-body">
                        <form
                          // onSubmit={(e) => {
                          //   formik.handleSubmit();
                          //   e.preventDefault();
                          // }}
                        >
                          <div className="edit-profile__body">
                            <div className="form-group mb-25">
                              <label htmlFor="username">
                                Username or Email Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="name@example.com"
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                // value={formik.values.email}
                              />
                              {/* {formik.touched.email && formik.errors.email ? ( */}
                                <div className="text-danger">
                                  {/* {formik.errors.email} */}
                                </div>
                              {/* ) : null} */}
                            </div>

                            <div className="form-group mb-15">
                              <label htmlFor="password-field">password</label>
                              <div className="position-relative">
                                <input
                                  id="password-field"
                                  // type={passShow ? "text" : "password"}
                                  className="form-control"
                                  name="password"
                                  placeholder="Password"
                                  // onChange={formik.handleChange}
                                  // onBlur={formik.handleBlur}
                                  // value={formik.values.password}
                                />
                                <div
                                  // className={`uil ${
                                  //   passShow ? "uil-eye-slash" : "uil-eye"
                                  // } text-lighten fs-15 field-icon toggle-password2`}
                                  // onClick={() => setpassShow(!passShow)}
                                ></div>
                              </div>
                              {/* {formik.touched.password &&
                              formik.errors.password ? ( */}
                                <div className="text-danger">
                                  {/* {formik.errors.password} */}
                                </div>
                              {/* ) : null} */}
                            </div>

                            <div className="admin-condition">
                              <div className="checkbox-theme-default custom-checkbox ">
                                {/* <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="check-1"
                                  checked={isChecked}
                                  onChange={(e) =>
                                    setIsChecked(e.target.checked)
                                  }
                                />
                                <label htmlFor="check-1">
                                  <span className="checkbox-text">
                                    Keep me logged in
                                  </span>
                                </label> */}
                              </div>
                            </div>
                            <div className="admin__button-group button-group d-flex pt-1 justify-content-md-start justify-content-center">
                              <button
                                className="btn btn-primary btn-default w-100 btn-squared text-capitalize lh-normal px-50 signIn-createBtn"
                                type="submit"
                              >
                                sign in
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}

export default PageLogin;

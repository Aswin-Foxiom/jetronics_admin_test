import React, { useContext, useEffect, useState } from "react";
import { ContextDatas } from "../../../services/Context";
import Loader from "../../../components/Loader";

function AddProduct() {
  const [pageLoading, setpageLoading] = useState(true);
  const { mobileSide, setmobileSide, setdropdownItems } =
    useContext(ContextDatas);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setmobileSide(!mobileSide);
      setdropdownItems({
        products: false,
        websites: false,
        orders: false,
        contents: false,
      });
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setpageLoading(false);
    }, 3000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the timer if the component unmounts or the dependency array changes
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {pageLoading ? (
        <Loader />
      ) : (
        <div className={`contents  ${mobileSide ? "expanded" : ""}`}>
          <div className="container-fluid">
            {/* <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-main">
                  <h4 className="text-capitalize breadcrumb-title">
                    Form Layouts
                  </h4>
                  <div className="breadcrumb-action justify-content-center flex-wrap">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">
                            <i className="uil uil-estate" />
                            Home
                          </a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          form layouts
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row mt-4">
              <div className="col-lg-12">
                <div className="card card-Vertical card-default card-md mb-4">
                  <div className="card-header">
                    <h6>Vertical Form</h6>
                  </div>
                  <div className="card-body pb-md-30">
                    <div className="Vertical-form">
                      <form action="#">
                        <div className="form-group">
                          <label
                            htmlFor="formGroupExampleInput"
                            className="color-dark fs-14 fw-500 align-center mb-10"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control ih-medium ip-gray radius-xs b-light px-15"
                            id="formGroupExampleInput"
                            placeholder="Duran Clayton"
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="formGroupExampleInput2"
                            className="color-dark fs-14 fw-500 align-center mb-10"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control ih-medium ip-gray radius-xs b-light px-15"
                            id="formGroupExampleInput2"
                            placeholder="username@email.com"
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="formGroupExampleInput3"
                            className="color-dark fs-14 fw-500 align-center mb-10"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control ih-medium ip-gray radius-xs b-light px-15"
                            id="formGroupExampleInput3"
                          />
                        </div>
                        <div className="layout-button mt-25">
                          <button
                            type="button"
                            className="btn btn-default btn-squared btn-light px-20 "
                          >
                            cancel
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-default btn-squared px-30"
                          >
                            save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProduct;

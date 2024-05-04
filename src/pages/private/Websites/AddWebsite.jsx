
import React, { useContext, useEffect, useState } from "react";
import { ContextDatas } from "../../../services/Context";
import Loader from "../../../components/Loader";

function AddWebsite() {
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
                <h6>Website Information</h6>
            </div>
            <div className="card-body pb-md-25">
                <div className="Vertical-form">
                    <form action="#">
                        <div className="row">
                            <div className="col-xl-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <label
                                        htmlFor="websiteName"
                                        className="color-dark fs-14 fw-500 align-center mb-10">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                        id="websiteName"
                                        placeholder="Name"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <label
                                        htmlFor="websiteCategory"
                                        className="color-dark fs-14 fw-500 align-center mb-10">
                                         Country
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                        id="websiteCategory"
                                        placeholder=" Country"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <label
                                        htmlFor="websiteLanguage"
                                        className="color-dark fs-14 fw-500 align-center mb-10">
                                        Language
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                        id="websiteLanguage"
                                        placeholder=" Language"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <label
                                        htmlFor="adminUsername"
                                        className="color-dark fs-14 fw-500 align-center mb-10">
                                        Admin Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                        id="adminUsername"
                                        placeholder="Admin Username"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <label
                                        htmlFor="adminPassword"
                                        className="color-dark fs-14 fw-500 align-center mb-10">
                                        Admin Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                        id="adminPassword"
                                        placeholder="Admin Password"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <label
                                        htmlFor="websiteDomain"
                                        className="color-dark fs-14 fw-500 align-center mb-10">
                                      Domain
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                        id="websiteDomain"
                                        placeholder="Domain"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <label
                                        htmlFor="websiteOwner"
                                        className="color-dark fs-14 fw-500 align-center mb-10">
                                         Owner
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                        id="websiteOwner"
                                        placeholder=" Owner"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <label
                                        htmlFor="websiteEmail"
                                        className="color-dark fs-14 fw-500 align-center mb-10">
                                   Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                        id="websiteEmail"
                                        placeholder=" Email"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 col-12">
                                <div className="form-group">
                                    <label
                                        htmlFor="websitePhone"
                                        className="color-dark fs-14 fw-500 align-center mb-10">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                        id="websitePhone"
                                        placeholder=" Phone"
                                    />
                                </div>
                            </div>
                            <div className="col-xl-12 col-sm-6 col-12"> 
                                <div className="form-group">
                                    <label
                                        htmlFor="websiteURL"
                                        className="color-dark fs-14 fw-500 align-center mb-10">
                                        Website URL
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                        id="websiteURL"
                                        placeholder="Website URL"
                                    />
                                </div>
                            </div>
        
                            <div className="col-12">
                                <div className="form-group">
                                    <label
                                        htmlFor="websiteDescription"
                                        className="color-dark fs-14 fw-500 align-center mb-10">
                                        Description
                                    </label>
                                    <textarea
                                         style={{height:'100px'}}
                                         className="form-control ih-medium ip-gray radius-xs b-light px-15"
                                         id="description"
                                         rows="3"
                                        placeholder="Description"></textarea>
                                </div>
                            </div>
                        </div>
                       
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <button className="btn btn-primary btn-default btn-squared px-30">
        Save
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

export default AddWebsite;

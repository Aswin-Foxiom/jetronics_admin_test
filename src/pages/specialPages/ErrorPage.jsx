import React from "react";

function ErrorPage() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="min-vh-100 content-center">
            <div className="maintenance-page text-center">
              <img
                src="img/svg/maintenance.svg"
                alt="maintenance"
                className="svg"
              />
              <h5 className="maintenance-page__title">
                We are currently facing an issue
              </h5>
              <p className="fw-500">
                We're making the system more awesome.We'll be back shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;

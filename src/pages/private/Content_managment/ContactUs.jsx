import React, { useContext, useEffect, useState } from "react";
import { ContextDatas } from "../../../services/Context";
import Loader from "../../../components/Loader";
import ModalForm from "./components/ModalForm";
import { Link } from "react-router-dom";

function ContactUs() {
  
  const [pageLoading, setPageLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };
  // Static dummy data for demonstration
  const [contactDetails, setContactDetails] = useState({
    email: "example@example.com",
    mobile: "1234567890",
    whatsapp: "0987654321",
    website: "https://example.com",
    address: "123 Main Street, City, Country",
    socialMedia: {
      facebook: "https://facebook.com/example",
      twitter: "https://twitter.com/example",
      instagram: "https://instagram.com/example",
    },
  });
  const handleEditClick = (index) => {
    setEditIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] = !newIndices[index];
      return newIndices;
    });
  };

  const handleTitleChange = (index, lang, event) => {
    const { value } = event.target;
    const updatedHeadingValues = [...headingValues];
    updatedHeadingValues[index].title[lang] = value;
    setHeadingValues(updatedHeadingValues);
  };
  const { mobileSide, setmobileSide, setdropdownItems } = useContext(ContextDatas);

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
      setPageLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {pageLoading ? (
        <Loader />
      ) : (
        <div className={`contents ${mobileSide ? "expanded" : ""}`}>
          <div className="demo2 mb-0 t-thead-bg">
            <div className="container-fluid">
              <div className="row  mt-3">
                <div className="row product-page-list justify-content-center mt-20">
                  <div className="col-xxl-6 mb-25 px-10">
                    <div className="card job job--grid">
                      <div className="h-100">
                        <div className="job-item px-25 pt-30 pb-25">
                          <div className="card-body p-0 d-flex align-items-sm-center align-items-start flex-sm-row flex-column flex-wrap">
                            <div className="job-item__body text-capitalize">
                            <div class="job-item__image d-flex align-items-center justify-content-between">
                              
                                   <div className="job-item__title">
                                   {/* <img
                                    className="job-item__image-img img-fluid"
                                    src="img/stats.png"
                                    alt="digital-chair"
                                  /> */}
                                    <h6 className="card-title">
                                      Contact Information
                                    </h6>
                                    <span>{contactDetails.address}</span>
                                  </div>
                                <div>
                                  
                                 
                                </div>
                                <button
                                  className="btn btn-primary btn-default btn-squared px-30"
                                  style={{ marginLeft: "10px" }}
                                  //   onClick={handleShowModal}
                                  onClick={handleShowModal}
                                >
                                  Edit
                                </button>
                              </div>
                              <div className="job-item__content d-inline-flex flex-column">
                                <div className="job-deadline">
                                  <h6>Email:</h6>
                                  <span>{contactDetails.email}</span>
                                </div>
                                <div className="job-type">
                                  <h6>Mobile:</h6>
                                  <span>{contactDetails.mobile}</span>
                                </div>
                                <div className="job-salery">
                                  <h6>WhatsApp:</h6>
                                  <span>{contactDetails.whatsapp}</span>
                                </div>
                                <div className="job-salery">
                                  <h6>Website:</h6>
                                  <a
                                    href={contactDetails.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {contactDetails.website}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && (
      <ModalForm
        show={showModal}
        onHide={handleCloseModal}
        contactDetails={contactDetails} // Pass contact details to the modal
        // onSubmit={handleSubmit} // Pass handleSubmit function to handle form submission
        buttonLoading={false} // Pass loading state if needed
      />
    )}
    </>
  );
}

export default ContactUs;

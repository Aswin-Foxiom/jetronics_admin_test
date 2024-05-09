import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Loader from "../../../../components/Loader";

export default function ModalForm({
  show,
  onHide,
  onSubmit,
  buttonLoading,
  contactDetails,
  selectedPage,
}) {
  const [editedDetail, setEditedDetail] = useState(contactDetails || "");
  const [flagImage, setFlagImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (value) => {
    setEditedDetail(value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFlagImage(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      detail: editedDetail,
      flagImage: flagImage,
    };
    onSubmit(formData);
  };

  let modalTitle;
  if (selectedPage === "country") {
    modalTitle = "Add Country";
  } else if (selectedPage === "language") {
    modalTitle = "Add Language";
  }

  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalTitle}
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
        {selectedPage === "country" && (
            <div className="form-group">
              <label htmlFor="file-upload">Upload Flag:</label>
              <div className="col-lg-12">
                <div className="account-profile d-flex align-items-center mb-4">
                  <div className="ap-img pro_img_wrapper">
                    <input
                      onChange={handleFileChange}
                      id="file-upload"
                      type="file"
                      name="fileUpload"
                      className="d-none"
                    />
                    <label htmlFor="file-upload">
                      {!isUploading && (
                        <img
                        onError={(e) => {
                            e.target.src =
                              "https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png "; // Replace with the path to your default image
                          }}
                          className="ap-img__main rounded-circle wh-120 bg-lighter d-flex"
                          src={flagImage}
                          alt="profile"
                          style={{ objectFit: "cover" }}
                        />
                      )}
                      {isUploading && <Loader />}
                      <span className="cross" id="remove_pro_pic">
                        <img
                          src="img/svg/camera.svg"
                          alt="camera"
                          className="svg"
                        />
                      </span>
                    </label>
                  </div>
                  <div className="account-profile__title">
                    <h6 className="fs-15 ms-20 fw-500 text-capitalize">
                      Plan Icon
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="detail">{selectedPage}</label>
            <input
              type="text"
              className="form-control ih-medium ip-light radius-xs b-light px-15"
              id="detail"
              value={editedDetail}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        
          {/* {flagImage && (
            <img
              src={flagImage}
              alt="Flag Preview"
              className="preview-image"
              style={{ maxHeight: "100px" }}
            />
          )} */}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-default btn-squared btn-light px-20"
            type="button"
            onClick={onHide}
            disabled={buttonLoading}
          >
            Cancel
          </button>{" "}
          <button
            type="submit"
            className="btn btn-primary btn-default btn-squared px-30"
            disabled={buttonLoading}
          >
            {buttonLoading ? "Saving..." : "Save"}
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

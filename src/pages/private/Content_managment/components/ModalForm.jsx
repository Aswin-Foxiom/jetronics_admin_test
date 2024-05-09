import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalForm({
  show,
  onHide,
  onSubmit,
  buttonLoading,
  contactDetails,
}) {
  const [editedContactDetails, setEditedContactDetails] = useState({
    address: contactDetails?.address || "",
    email: contactDetails?.email || "",
    mobile: contactDetails?.mobile || "",
    whatsapp: contactDetails?.whatsapp || "",
    website: contactDetails?.website || "",
  });

  const handleChange = (fieldName, value) => {
    setEditedContactDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedContactDetails);
  };

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
          Edit 
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              className="form-control ih-medium ip-light radius-xs b-light px-15"
              id="address"
              value={editedContactDetails.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control ih-medium ip-light radius-xs b-light px-15"
              id="email"
              value={editedContactDetails.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="text"
              className="form-control ih-medium ip-light radius-xs b-light px-15"
              id="mobile"
              value={editedContactDetails.mobile}
              onChange={(e) => handleChange("mobile", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="whatsapp">WhatsApp:</label>
            <input
              type="text"
              className="form-control ih-medium ip-light radius-xs b-light px-15"
              id="whatsapp"
              value={editedContactDetails.whatsapp}
              onChange={(e) => handleChange("whatsapp", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website:</label>
            <input
              type="text"
              className="form-control ih-medium ip-light radius-xs b-light px-15"
              id="website"
              value={editedContactDetails.website}
              onChange={(e) => handleChange("website", e.target.value)}
            />
          </div>
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

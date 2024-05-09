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



  const handleChange = (value) => {
    setEditedDetail(value);
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
  if (selectedPage === "City") {
    modalTitle = "Add City";
  } else if (selectedPage === "Status") {
    modalTitle = "Add Status";
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

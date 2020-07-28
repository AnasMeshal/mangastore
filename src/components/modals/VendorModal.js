//React
import React, { useState } from "react";

//Modal
import Modal from "react-modal";

//Icon
import { GrClose } from "react-icons/gr";

//Stores
import vendorStore from "../../stores/vendorStore";

//Styles
import { AddButtonStyled } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "40%",
    color: "black",
  },
};

const VenderModal = ({ isOpen, closeModal, oldVendor }) => {
  const [vendor, setVendor] = useState(
    oldVendor ?? {
      name: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setVendor({ ...vendor, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setVendor({ ...vendor, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    vendorStore[oldVendor ? "updateVendor" : "createVendor"](vendor);
    closeModal();
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div>
          <GrClose
            style={{ marginBottom: "2vh" }}
            size="2vw"
            onClick={closeModal}
          >
            close
          </GrClose>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Vendor Name</label>
                <input
                  value={vendor.name}
                  required
                  onChange={handleChange}
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="inputPassword4">Cover Image</label>
                <input
                  onChange={handleImage}
                  type="file"
                  name="image"
                  className="form-control"
                />
              </div>
            </div>
            <AddButtonStyled type="submit" className="btn btn-primary">
              {oldVendor ? "Update" : "Create"}
            </AddButtonStyled>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default VenderModal;

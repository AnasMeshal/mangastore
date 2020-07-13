//React
import React, { useState } from "react";

//Modal
import Modal from "react-modal";

//Stores
import mangaStore from "../../stores/mangaStore"

//Icon
import { GrClose } from "react-icons/gr";

//Styles
import { AddButtonStyled } from "../../style";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "40%",
  },
};

const MangaModal = ({ isOpen, closeModal }) => {
  const [manga, setManga] = useState({
    name: "",
    price: 0,
    description: "",
    img: "",
    author: "",
  });

  const handleChange = (event) => {
    setManga({ ...manga, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mangaStore.createManga(manga);
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
                <label htmlFor="inputEmail4">Manga Name</label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Manga Price</label>
                <input
                  required
                  onChange={handleChange}
                  type="number"
                  name="price"
                  min="2"
                  max="5"
                  className="form-control"
                  placeholder="Price"
                />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="inputPassword4">Manga Description</label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="description"
                  className="form-control"
                  placeholder="Manga name is an ..."
                />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="inputPassword4">Manga Author</label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="author"
                  className="form-control"
                  placeholder="Author"
                />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="inputPassword4">Cover Image</label>
                <input
                  required
                  onChange={handleChange}
                  type="text"
                  name="img"
                  className="form-control"
                  placeholder="https://example.com"
                />
              </div>
            </div>
            <AddButtonStyled type="submit" className="btn btn-primary">
              Create
            </AddButtonStyled>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default MangaModal;

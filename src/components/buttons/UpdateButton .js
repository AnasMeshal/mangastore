import React, { useState } from "react";

// Styling
import { UpdateButtonStyled } from "../../styles";

//Icon
import { FiEdit2 } from "react-icons/fi";

// Components
import MangaModal from "../modals/MangaModal";

const UpdateButton = ({ oldManga }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Edit <FiEdit2/></UpdateButtonStyled>
      <MangaModal oldManga={oldManga} closeModal={closeModal} isOpen={isOpen} />
    </>
  );
};

export default UpdateButton;

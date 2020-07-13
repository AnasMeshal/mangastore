//React
import React, { useState } from "react";

//Icon
import { BsPlusCircle } from "react-icons/bs";

//Components
import MangaModal from "../modals/MangaModal";

const AddButton = ({ createManga }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <BsPlusCircle onClick={() => setIsOpen(true)} size="3em" style={{marginTop: "auto", marginBottom: "auto", marginLeft: "2vw"}} />
      <MangaModal
        createManga={createManga}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default AddButton;

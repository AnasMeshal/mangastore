//React
import React, { useState } from "react";

//Icon
import { BsPlusCircle } from "react-icons/bs";

//Components
import MangaModal from "../modals/MangaModal"

const AddButton = ({ createManga, mangas }) => {

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginBottom: "4vh" }}
    >
      <BsPlusCircle onClick={() => setIsOpen(true)} size="3vw" />
      <MangaModal createManga={createManga} isOpen={isOpen} closeModal={closeModal}/>
    </div>
  );
};

export default AddButton;

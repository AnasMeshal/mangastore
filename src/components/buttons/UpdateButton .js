import React, { useState } from "react";

// Styling
import { UpdateButtonStyled } from "./styles";

//Icon
import { FiEdit2 } from "react-icons/fi";

// Components
import MangaModal from "../modals";
import VendorModal from "../modals/VendorModal";

const UpdateButton = ({ oldManga, vendor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>
        Edit <FiEdit2 />
      </UpdateButtonStyled>
      {vendor ? (
        <VendorModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldVendor={vendor}
        />
      ) : (
        <MangaModal
          oldManga={oldManga}
          closeModal={closeModal}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default UpdateButton;

//React
import React, { useState } from "react";

//Icon
import { BsPlusCircle } from "react-icons/bs";

//Modal
import MangaModal from "../modals";
import VenderModal from "../modals/VendorModal";

const AddButton = ({ createManga, vendorId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <BsPlusCircle
        onClick={() => setIsOpen(true)}
        size="3em"
        style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "2vw" }}
      />
      {vendorId ? (
        <MangaModal
          vendorId={vendorId}
          createManga={createManga}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      ) : (
        <VenderModal
          createManga={createManga}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default AddButton;

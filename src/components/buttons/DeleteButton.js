//React
import React from "react";

//Styles
import { DeleteButtonStyled } from "../../style";

const DeleteButton = ({ deleteManga, mangaId }) => {
  const handleDelete = () => {
    deleteManga(mangaId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;

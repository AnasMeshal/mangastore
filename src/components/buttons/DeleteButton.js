//React
import React from "react";

//Styles
import { DeleteButtonStyled } from "../../style";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteManga(props.mangaId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;

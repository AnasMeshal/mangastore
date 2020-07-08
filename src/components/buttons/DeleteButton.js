//React
import React from "react";
import { useHistory } from "react-router-dom";

//Styles
import { DeleteButtonStyled } from "../../style";


const DeleteButton = (props) => {
  const history = useHistory();
  const handleDelete = () => {
    props.deleteManga(props.mangaId);
    history.push("/mangas");
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;

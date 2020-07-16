//React
import React from "react";
import { observer } from "mobx-react"

//Styles
import { DeleteButtonStyled } from "../../styles";

//Icon
import { BsTrash } from "react-icons/bs";

//Stores 
import mangaStore from "../../stores/mangaStore";

const DeleteButton = ({ mangaId }) => {
  const handleDelete = () => {
    mangaStore.deleteManga(mangaId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete <BsTrash /></DeleteButtonStyled>;
};

export default observer(DeleteButton);

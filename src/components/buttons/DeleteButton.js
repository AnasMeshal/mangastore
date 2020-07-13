//React
import React from "react";
import { observer } from "mobx-react"

//Styles
import { DeleteButtonStyled } from "../../style";

//Stores 
import mangaStore from "../../stores/mangaStore";

const DeleteButton = ({ mangaId }) => {
  const handleDelete = () => {
    mangaStore.deleteManga(mangaId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default observer(DeleteButton);

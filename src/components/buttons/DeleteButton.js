//React
import React from "react";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";

//Styles
import { DeleteButtonStyled } from "./styles";

//Icon
import { BsTrash } from "react-icons/bs";

//Stores
import mangaStore from "../../stores/mangaStore";

const DeleteButton = ({ mangaId, redirect }) => {
  const history = useHistory();

  const handleDelete = () => {
    mangaStore.deleteManga(mangaId);

    if (redirect) history.push("/mangas");
  };

  return (
    <DeleteButtonStyled onClick={handleDelete}>
      Delete <BsTrash />
    </DeleteButtonStyled>
  );
};

export default observer(DeleteButton);

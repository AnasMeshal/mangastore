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
import vendorStore from "../../stores/vendorStore";

const DeleteButton = ({ mangaId, redirect, vendorId }) => {
  const history = useHistory();

  const handleDelete = () => {
    if (vendorId) {
      vendorStore.deleteVendor(vendorId);
      history.push("/vendors");
    } else {
      mangaStore.deleteManga(mangaId);
    }

    if (redirect) history.push("/mangas");
  };

  return (
    <DeleteButtonStyled onClick={handleDelete}>
      Delete <BsTrash />
    </DeleteButtonStyled>
  );
};

export default observer(DeleteButton);

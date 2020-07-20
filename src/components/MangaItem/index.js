//React
import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//Styles
import { ShopImage, ItemWrapper } from "./styles";

//Components
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton ";

const MangaItem = ({ manga }) => {
  return (
    <ItemWrapper>
      <Link to={`/mangas/${manga.slug}`}>
        <ShopImage src={manga.img} alt={manga.name} />
      </Link>
      <p>{manga.name}</p>
      <p className="item-price">{manga.price}KD</p>
      <UpdateButton oldManga={manga} />
      <DeleteButton mangaId={manga.id} />
    </ItemWrapper>
  );
};

export default observer(MangaItem);

//React
import React from "react";

//Styles
import { ShopImage, ItemWrapper, DeleteButtonStyled } from "../style";

//Components
import DeleteButton from "./buttons/DeleteButton";

const MangaItem = (props) => {
  const manga = props.manga;

  return (
    <ItemWrapper>
      <ShopImage
        onClick={() => props.selectManga(manga.id)}
        src={manga.img}
        alt={manga.name}
      />
      <p>{manga.name}</p>
      <p className="item-price">{manga.price}KD</p>
      <DeleteButton mangaId={manga.id} deleteManga={props.deleteManga} />
    </ItemWrapper>
  );
};

export default MangaItem;

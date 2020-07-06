//React
import React from "react";

//Styles
import { ShopImage, ItemWrapper, DeleteButtonStyled } from "../style";

const MangaItem = (props) => {
  const manga = props.manga;

  const handleDelete = () => {
    props.deleteManga(manga.id);
  };
  return (
    <ItemWrapper>
      <ShopImage
        onClick={() => props.selectManga(manga.id)}
        src={manga.img}
        alt={manga.name}
      />
      <p>{manga.name}</p>
      <p className="item-price">{manga.price}KD</p>
      <DeleteButtonStyled onClick={handleDelete}>
        Delete Manga
      </DeleteButtonStyled>
    </ItemWrapper>
  );
};

export default MangaItem;

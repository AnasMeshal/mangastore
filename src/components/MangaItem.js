//React
import React from "react";

//Styles
import { ShopImage, ItemWrapper } from "../style";

const MangaItem = (props) => {
  return (
    <ItemWrapper>
      <ShopImage src={props.manga.img} alt={props.manga.name} />
      <p>{props.manga.name}</p>
      <p className="item-price">{props.manga.price}KD</p>
    </ItemWrapper>
  );
};

export default MangaItem;

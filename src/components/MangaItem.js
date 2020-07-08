//React
import React from "react";
import { Link } from "react-router-dom";

//Styles
import { ShopImage, ItemWrapper } from "../style";

//Components
import DeleteButton from "./buttons/DeleteButton";

const MangaItem = (props) => {
  const manga = props.manga;
  
  return (
    <ItemWrapper>
      <Link to={`/mangas/${manga.slug}`}>
        <ShopImage
          src={manga.img}
          alt={manga.name}
        />
      </Link>
      <p>{manga.name}</p>
      <p className="item-price">{manga.price}KD</p>
      <DeleteButton mangaId={manga.id} deleteManga={props.deleteManga} />
    </ItemWrapper>
  );
};

export default MangaItem;

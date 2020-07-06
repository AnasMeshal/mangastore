//React
import React from "react";

// Styles
import { DeleteButtonStyled, MangaDetailWrapper } from "../style";

const MangaDetail = (props) => {
  const manga = props.manga;

  const handleDelete = () => {
    props.deleteManga(manga.id);
  };

  return (
    <MangaDetailWrapper>
      <h1>{manga.name}</h1>
      <img src={manga.img} alt={manga.name} />
      <p className="item-price">price: {manga.price} KD</p>
      <p>
        {manga.name} {manga.description}
      </p>
      <DeleteButtonStyled onClick={handleDelete}>
        Delete Manga
      </DeleteButtonStyled>
      
    </MangaDetailWrapper>
  );
};

export default MangaDetail;

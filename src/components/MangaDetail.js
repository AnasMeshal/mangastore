//React
import React from "react";

// Styles
import {
  DeleteButtonStyled,
  MangaDetailWrapper,
  ChangeViewButton,
} from "../style";

//Components
import DeleteButton from "./buttons/DeleteButton";

const MangaDetail = (props) => {
  const manga = props.manga;

  const handleView = () => {
    props.changeView();
  };

  return (
    <MangaDetailWrapper onClick={handleView}>
      <h1>{manga.name}</h1>
      <img src={manga.img} alt={manga.name} />
      <p>price: {manga.price} KD</p>
      <p className="description">
        {manga.name} {manga.description}
      </p>
      <DeleteButton mangaId={manga.id} deleteManga={props.deleteManga} />
      <ChangeViewButton>Back</ChangeViewButton>
    </MangaDetailWrapper>
  );
};

export default MangaDetail;

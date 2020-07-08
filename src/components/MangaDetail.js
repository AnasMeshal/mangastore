//React
import React from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";

// Styles
import {
  MangaDetailWrapper,
  ChangeViewButton,
} from "../style";

//Components
import DeleteButton from "./buttons/DeleteButton";

const MangaDetail = (props) => {

  const { mangaSlug } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.push("/mangas");
  }

  const manga = props.mangas.find((manga) => manga.slug === mangaSlug)
  if (!manga) return <Redirect to="/mangas" />;

  return (
    <MangaDetailWrapper onClick={goBack}>
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

//React
import React from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import {Helmet} from "react-helmet";

// Styles
import {
  MangaDetailWrapper,
  ChangeViewButton,
} from "../style";

//Components
import DeleteButton from "./buttons/DeleteButton";

const MangaDetail = ({ mangas, deleteManga,  }) => {

  const { mangaSlug } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.push("/mangas");
  }

  const manga = mangas.find((manga) => manga.slug === mangaSlug)
  if (!manga) return <Redirect to="/mangas" />;

  return (
    <>
    <Helmet>
      <title>{manga.name} manga</title>
    </Helmet>
    <MangaDetailWrapper onClick={goBack}>
      <h1>{manga.name}</h1>
      <img src={manga.img} alt={manga.name} />
      <p>price: {manga.price} KD</p>
      <p className="description">
        {manga.name} {manga.description}
      </p>
      <p className="description">
        Wrriten By: {manga.writter}
      </p>
      <DeleteButton mangaId={manga.id} deleteManga={deleteManga} />
      <ChangeViewButton>Back</ChangeViewButton>
    </MangaDetailWrapper>
    </>
  );
};

export default MangaDetail;

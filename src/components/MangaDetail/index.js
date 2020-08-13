//React
import React from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react";

// Styles
import { MangaDetailWrapper, ChangeViewButton } from "./styles";

//Components
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton ";

//Stores
import mangaStore from "../../stores/mangaStore";
import authStore from "../../stores/authStore";

const MangaDetail = () => {
  const { mangaSlug } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const manga = mangaStore.mangas.find((manga) => manga.slug === mangaSlug);

  if (!manga) return <Redirect to="/notfound" />;

  if (!authStore.user) return <Redirect to="/" />;

  return (
    <>
      <Helmet>
        <title>{manga.name} manga</title>
      </Helmet>
      <MangaDetailWrapper>
        <h1>{manga.name}</h1>
        <img src={manga.image} alt={manga.name} />
        <p>price: {manga.price} KD</p>
        <p className="description">
          {manga.name} {manga.description}
        </p>
        <p className="description">Written By: {manga.author}</p>
        <UpdateButton oldManga={manga} />
        <DeleteButton redirect={true} mangaId={manga.id} />
        <ChangeViewButton onClick={goBack}>Back</ChangeViewButton>
      </MangaDetailWrapper>
    </>
  );
};

export default observer(MangaDetail);

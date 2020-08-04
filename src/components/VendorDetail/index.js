//React
import React from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react";

// Styles
import { VendorDetailWrapper, ChangeViewButton } from "./styles";

//Components
import MangaList from "../MangaList";
import AddButton from "../buttons/AddButton ";

//Stores
import vendorStore from "../../stores/vendorStore";
import mangaStore from "../../stores/mangaStore";

const VendorDetail = () => {
  const { vendorSlug } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.push("/vendors");
  };

  const vendor = vendorStore.vendors.find(
    (vendor) => vendor.slug === vendorSlug
  );

  let mangas = [];
  if (vendor.mangas) {
    vendor.mangas
      .map((manga) => mangaStore.getItemById(manga.id))
      .filter((manga) => manga);
  }

  if (!vendor) return <Redirect to="/notfound" />;

  return (
    <>
      <Helmet>
        <title>{vendor.name} vendor</title>
      </Helmet>
      <VendorDetailWrapper>
        <h1>{vendor.name}</h1>
        <img className="VendorImage" src={vendor.image} alt={vendor.name} />
        <AddButton vendor={vendor} />
        <MangaList mangas={mangas} />
        <ChangeViewButton onClick={goBack}>back</ChangeViewButton>
      </VendorDetailWrapper>
    </>
  );
};

export default observer(VendorDetail);

//React
import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react";

// Styles
import { VendorDetailWrapper } from "./styles";

//Components
import MangaList from "../MangaList";
import AddButton from "../buttons/AddButton ";

//Stores
import vendorStore from "../../stores/vendorStore";
import mangaStore from "../../stores/mangaStore";
import authStore from "../../stores/authStore";
import UpdateButton from "../buttons/UpdateButton ";
import DeleteButton from "../buttons/DeleteButton";

const VendorDetail = () => {
  const { vendorSlug } = useParams();

  const vendor = vendorStore.vendors.find(
    (vendor) => vendor.slug === vendorSlug
  );

  if (!vendor) return <Redirect to="/notfound" />;

  let mangas = [];

  if (vendor.mangas) {
    mangas = vendor.mangas
      .map((manga) => mangaStore.getItemById(manga.id))
      .filter((manga) => manga);
  }

  if (!authStore.user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Helmet>
        <title>{vendor.name} vendor</title>
      </Helmet>
      <VendorDetailWrapper>
        <h1>{vendor.name}</h1>
        <span>
          <UpdateButton vendor={vendor} />
          <DeleteButton vendorId={vendor.id} />
        </span>
        <img className="VendorImage" src={vendor.image} alt={vendor.name} />
        <AddButton vendor={vendor} />
        <MangaList mangas={mangas} />
      </VendorDetailWrapper>
    </>
  );
};

export default observer(VendorDetail);

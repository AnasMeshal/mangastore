//React
import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//Styles
import { ShopImage, ItemWrapper, ItemWrapperWrapper } from "./styles";

const VendorItem = ({ vendor }) => {
  return (
    <ItemWrapperWrapper>
      <ItemWrapper>
        <Link to={`/vendors/${vendor.slug}`}>
          <ShopImage src={vendor.image} alt={vendor.name} />
        </Link>
        <h1>{vendor.name}</h1>
      </ItemWrapper>
    </ItemWrapperWrapper>
  );
};

export default observer(VendorItem);

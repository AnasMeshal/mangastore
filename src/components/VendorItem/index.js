//React
import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//Buttons
import UpdateButton from "../buttons/UpdateButton ";
import DeleteButton from "../buttons/DeleteButton";

//Styles
import { ShopImage, ItemWrapper, ItemWrapperWrapper } from "./styles";

const VendorItem = ({ vendor }) => {
  return (
    <ItemWrapperWrapper>
      <ItemWrapper>
        <Link to={`/vendors/${vendor.slug}`}>
          <ShopImage src={vendor.image} alt={vendor.name} />
        </Link>
      </ItemWrapper>
      <UpdateButton vendor={vendor} />
      <DeleteButton vendorId={vendor.id} />
    </ItemWrapperWrapper>
  );
};

export default observer(VendorItem);

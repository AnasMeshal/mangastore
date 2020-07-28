//React
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react";

//Stores
import vendorStore from "../../stores/vendorStore";

//Components
import VendorItem from "../VendorItem";
import SearchBar from "../SearchBar";

//Styles
import { ListWrapper, SearchWrapperAdd } from "./styles";
import AddButton from "../buttons/AddButton ";

const VendorList = () => {
  const [query, setQuery] = useState("");

  const filteredVendor = vendorStore.vendors.filter((vendor) =>
    vendor.name.toUpperCase().includes(query.toUpperCase())
  );

  const vendorList = filteredVendor.map((vendor) => (
    <VendorItem vendor={vendor} key={vendor.id} />
  ));

  return (
    <>
      <Helmet>
        <title>Available Vendors</title>
      </Helmet>
      <SearchWrapperAdd>
        <SearchBar setQuery={setQuery} />
        <AddButton />
      </SearchWrapperAdd>
      <ListWrapper>{vendorList}</ListWrapper>
    </>
  );
};

export default observer(VendorList);

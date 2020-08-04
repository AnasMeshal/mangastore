import React from "react";
import { Route, Switch } from "react-router";

//Components
import MangaList from "../MangaList";
import MangaDetail from "../MangaDetail";
import Home from "../Home";
import NotFound from "../NotFound";
import VendorList from "../VendorList";
import VendorDetail from "../VendorDetail";

//Stores
import mangaStore from "../../stores/mangaStore";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/vendors/:vendorSlug">
        <VendorDetail />
      </Route>
      <Route exact path="/vendors">
        <VendorList />
      </Route>
      <Route exact path="/mangas/:mangaSlug">
        <MangaDetail />
      </Route>
      <Route exact path="/mangas">
        <MangaList mangas={mangaStore.mangas} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;

import React from "react";
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

//Components
import MangaList from "../MangaList";
import MangaDetail from "../MangaDetail";
import NotFound from "../NotFound";
import VendorList from "../VendorList";
import VendorDetail from "../VendorDetail";
import Signin from "../Signin";
import Signup from "../Signup";
import Home from "../Home";

//Stores
import mangaStore from "../../stores/mangaStore";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/home">
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

export default observer(Routes);

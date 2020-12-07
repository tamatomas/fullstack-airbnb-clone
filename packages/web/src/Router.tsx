import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Logout } from "./pages/auth/Logout";
import { Main } from "./pages";
import { BecomeAHost } from "./pages/become-a-host";
import { Amenities } from "./pages/become-a-host/amenities";
import { Bedrooms } from "./pages/become-a-host/bedrooms";
import { Description } from "./pages/become-a-host/description";
import { ViewListing } from "./pages/become-a-host/listing";
import { Location } from "./pages/become-a-host/location";
import { Room } from "./pages/become-a-host/room";
import { ConfirmUser } from "./pages/auth/confirmuser";
import { Hosting } from "./pages/hosting";
import { Listings } from "./pages/hosting/listings";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/hosting/listings"}>
          <Listings />
        </Route>
        <Route path={"/hosting"} exact>
          <Hosting />
        </Route>
        <Route path={"/become-a-host/room"}>
          <Room />
        </Route>
        <Route path={"/become-a-host/bedrooms"}>
          <Bedrooms />
        </Route>
        <Route path={"/become-a-host/description"}>
          <Description />
        </Route>
        <Route path={"/become-a-host/location"}>
          <Location />
        </Route>
        <Route path={"/become-a-host/amenities"}>
          <Amenities />
        </Route>
        <Route path={"/become-a-host/:id"}>
          <ViewListing />
        </Route>
        <Route path={"/become-a-host"} exact>
          <BecomeAHost />
        </Route>
        <Route path={"/confirmuser/:token"}>
          <ConfirmUser />
        </Route>
        <Route path={"/logout"}>
          <Logout />
        </Route>
        <Route path={"/"}>
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

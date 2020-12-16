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
import { NavBar } from "./components/NavBar";
import { Search } from "./pages/search/search";
import { ListingView } from "./pages/search/listing";
import { ListingHeader } from "./components";
import { PrivateRoute } from "../src/components/PrivateRoute";
import { Duplicate } from "./pages/become-a-host/duplicate";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path={"/hosting/listings"}>
          <Listings />
        </PrivateRoute>
        <PrivateRoute path={"/hosting"} exact>
          <Hosting />
        </PrivateRoute>
        <PrivateRoute path={"/become-a-host/duplicate"} exact>
          <Duplicate />
        </PrivateRoute>
        <PrivateRoute path={"/become-a-host/room"}>
          <ListingHeader routename={"room"} />
          <Room />
        </PrivateRoute>
        <PrivateRoute path={"/become-a-host/bedrooms"}>
          <ListingHeader routename={"bedrooms"} />
          <Bedrooms />
        </PrivateRoute>
        <PrivateRoute path={"/become-a-host/description"}>
          <ListingHeader routename={"description"} />
          <Description />
        </PrivateRoute>
        <PrivateRoute path={"/become-a-host/location"}>
          <ListingHeader routename={"location"} />
          <Location />
        </PrivateRoute>
        <PrivateRoute path={"/become-a-host/amenities"}>
          <ListingHeader routename={"amenities"} />
          <Amenities />
        </PrivateRoute>
        <PrivateRoute path={"/become-a-host/remove/:id"}>
          <Amenities />
        </PrivateRoute>
        <PrivateRoute path={"/become-a-host/:id"}>
          <ViewListing />
        </PrivateRoute>
        <PrivateRoute path={"/become-a-host"} exact>
          <BecomeAHost />
        </PrivateRoute>
        <Route path={"/confirmuser/:token"}>
          <ConfirmUser />
        </Route>
        <Route path={"/logout"}>
          <Logout />
        </Route>
        <Route path={"/listing/:id"}>
          <NavBar fixed key={"fixed"} />
          <ListingView />
        </Route>
        <Route path={"/search"}>
          <NavBar fixed key={"fixed"} />
          <Search />
        </Route>
        <Route path={"/"} exact>
          <NavBar key={"notfixed"} />
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { KindOfPlace, KindOfPlaceEnum, User } from "@airbnb/common";
import { USER_DATA } from "@airbnb/controller";
import { useQuery } from "@apollo/client";
import { Select } from "../../components/listings/Select";
import { Button } from "../../components/Button";
import { LocationAutoComplete } from "../../components/listings/LocationAutocomplete";
import { useListingStore } from "../../utils/store/listingstore";
import { Link, Redirect } from "react-router-dom";

const useStyles = createUseStyles({
  view: {
    width: 385,
    maxWidth: "50%",
    paddingTop: 40,
    paddingBottom: 40,
    marginLeft: "10%",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontFamily: "poppins",
    fontSize: 29,
  },
  subtitle: {
    fontFamily: "poppins",
    fontSize: 23,
    margin: 0,
  },
  selectCont: {
    width: "100%",
    display: "flex",
  },
});

interface Props {}

const dataFromEnum = Object.entries(KindOfPlace)
  .filter((e) => !isNaN(e[0] as any))
  .map((e) => ({ name: e[1], id: e[0] }));

export const BecomeAHost = (props: Props) => {
  useQuery<{ data: User }>(USER_DATA);
  const styles = useStyles();
  const [guests, setGuests] = useState(1);
  const [placeType, setPlaceType] = useState(KindOfPlace.EntirePlace.valueOf());
  const guestsArray = Array.from(Array(16).keys()).map(
    (i) => `for ${i + 1} guests`
  );
  const updateListing = useListingStore((state) => state.updateListing);
  const handleContinue = () => {
    updateListing({
      nguests: guests,
      kind: Object(KindOfPlaceEnum)[placeType],
    });
  };
  return (
    <div className={styles.view}>
      <p className={styles.title}>
        Hi, Tomas! Let’s get started listing your space.
      </p>
      <p className={styles.subtitle}>What kind of place do you have?</p>
      <div className={styles.selectCont}>
        <Select
          data={guestsArray}
          selected={guests}
          setSelected={(guests: number) => setGuests(guests)}
        />
        <Select
          data={dataFromEnum.map((i) => i.name)}
          contStyle={{ marginLeft: 6 }}
          selected={placeType}
          setSelected={(select: number) => setPlaceType(select)}
        />
      </div>
      <LocationAutoComplete />
      <Link to={"/become-a-host/room"}>
        <Button
          title={"Continue"}
          style={{ marginTop: 8 }}
          onClick={() => handleContinue()}
        />
      </Link>
    </div>
  );
};

import { Listing } from "@airbnb/common";
import React from "react";
import { createUseStyles } from "react-jss";
import { InlineCounter } from "../InlineCounter";
import { RelativeModal } from "../RelativeModal";
import { SearchBarBtn } from "./SearchBarButton";

const useStyles = createUseStyles({
  modal: {
    width: 480,
    height: "auto",
    maxHeight: 500,
    borderRadius: 30,
    top: 20,
    left: -64,
    boxShadow: "0px 4px 14px 0px #90909078",
    backgroundColor: "#fafafa",
    zIndex: 1000,
    overflow: "hidden",
  },
});
interface Props {
  listing?: Partial<Listing> | null;
  onChange: (listing: Partial<Listing>) => void;
}

export const GuestsInput = (props: Props) => {
  const styles = useStyles();
  return (
    <SearchBarBtn
      inputProps={{
        disabled: true,
        value:
          props.listing?.nguests !== 0 && props.listing?.nguests !== undefined
            ? props.listing?.nguests + " guests"
            : "Add guests",
      }}
      label={"Guests"}
    >
      <RelativeModal className={styles.modal}>
        <InlineCounter
          label={"Guests"}
          count={props.listing?.nguests || 0}
          onChange={(count: number) =>
            props.onChange({ ...props.listing, nguests: count })
          }
          max={16}
          min={0}
        />
      </RelativeModal>
    </SearchBarBtn>
  );
};

import React, { useEffect } from "react";
import { User } from "@airbnb/common";
import { USER_DATA } from "@airbnb/controller";
import { useQuery } from "@apollo/client";
import {
  Title,
  Layout,
  ListingHeader,
  NavControlls,
  Label,
  InputSimple,
} from "../../components";
import { useListingStore } from "../../utils/store/listingstore";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { CountryDropdown } from "react-country-region-selector";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  select: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    border: `1px solid #afafaf`,
    paddingLeft: 10,
  },
});
interface Props {}

const schema = yup.object().shape({
  country: yup.string().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
});

type FormInput = {
  country: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

export function Location(props: Props) {
  const styles = useStyles();
  useQuery<{ data: User }>(USER_DATA);
  const listing = useListingStore((state) => state.listing);
  const { errors, setValue, getValues, control } = useForm<FormInput>({
    resolver: yupResolver(schema as any),
  });
  useEffect(() => {
    if (listing?.city) setValue("city", listing?.city);
    if (listing?.country) setValue("country", listing?.country);
    if (listing?.state) setValue("state", listing?.state);
    if (listing?.street) setValue("street", listing?.street);
    if (listing?.zip) setValue("zip", listing?.zip);
  }, [listing, setValue]);

  return (
    <React.Fragment>
      <ListingHeader routename={"bedrooms"} />
      <Layout formstyle={{ paddingBottom: 100 }}>
        <React.Fragment>
          <Title title={"Where’s your place located?"} />
          <Label
            label={
              "Guests will only get your exact address once they’ve booked a reservation."
            }
            size={16}
          />
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <CountryDropdown
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                classes={styles.select}
              />
            )}
            name="country"
            rules={{ required: true }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <InputSimple
                label={"Street address"}
                error={!!errors.street}
                errmsg={errors.street?.message}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                name={"street"}
              />
            )}
            name="street"
            rules={{ required: true }}
            defaultValue=""
          />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <InputSimple
                  label={"City"}
                  contStyle={{ width: "48%" }}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={!!errors.city}
                  errmsg={errors.city?.message}
                  name={"city"}
                />
              )}
              name="city"
              rules={{ required: true }}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <InputSimple
                  label={"State"}
                  contStyle={{ width: "48%", marginLeft: "auto" }}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={!!errors.state}
                  errmsg={errors.state?.message}
                  name={"state"}
                />
              )}
              name="state"
              rules={{ required: true }}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <InputSimple
                  label={"Zip code"}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  contStyle={{ width: "48%" }}
                  error={!!errors.zip}
                  errmsg={errors.zip?.message}
                  name={"zip"}
                />
              )}
              name="zip"
              rules={{ required: true }}
              defaultValue=""
            />
          </div>
        </React.Fragment>
      </Layout>
      <Layout style={{ position: "fixed", bottom: 0 }}>
        <NavControlls
          continueLink={"/become-a-host/amenities"}
          backLink={"/become-a-host/bedrooms"}
          getValues={getValues}
        />
      </Layout>
    </React.Fragment>
  );
}

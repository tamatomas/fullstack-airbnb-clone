import React, { useEffect } from "react";
import { User } from "@airbnb/common";
import { USER_DATA } from "@airbnb/controller";
import { useQuery } from "@apollo/client";
import { Title, Layout, NavControlls, InputSimple } from "../../components";
import { useListingStore } from "../../utils/store/listingstore";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

interface Props {}

const schema = yup.object().shape({
  description: yup.string().required(),
  title: yup.string().required(),
  price: yup.number().required(),
});

type FormInput = {
  description: string;
  title: string;
  price: number;
};
export function Description(props: Props) {
  useQuery<{ data: User }>(USER_DATA);
  const listing = useListingStore((state) => state.listing);
  const { errors, setValue, getValues, control } = useForm<FormInput>({
    resolver: yupResolver(schema as any),
  });
  useEffect(() => {
    setValue("title", listing?.title);
    setValue("description", listing?.description);
    setValue("price", listing?.price);
  }, [setValue, listing]);

  console.log(props);
  return (
    <React.Fragment>
      <Layout formstyle={{ paddingBottom: 100 }}>
        <React.Fragment>
          <Title title={"Describe your place  to guests"} />
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <InputSimple
                label={"Title"}
                error={!!errors.title}
                errmsg={errors.title?.message}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
            name="title"
            rules={{ required: true }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <InputSimple
                label={"Description"}
                error={!!errors.description}
                errmsg={errors.description?.message}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
            name="description"
            rules={{ required: true }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <InputSimple
                label={"Price"}
                error={!!errors.price}
                errmsg={errors.price?.message}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
            name="price"
            rules={{ required: true }}
            defaultValue=""
          />
        </React.Fragment>
      </Layout>
      <Layout style={{ position: "fixed", bottom: 0 }}>
        <NavControlls
          backLink={"/become-a-host/amenities"}
          listingArgs={{ ...getValues() }}
          last
        />
      </Layout>
    </React.Fragment>
  );
}

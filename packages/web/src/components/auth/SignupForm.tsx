import React from "react";
import { Input } from "../Input";
import { ButtonWithGradient } from "../ButtonWithGradient";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISingupInputs, signupSchema, User } from "@airbnb/common";
import { REGISTER } from "@airbnb/controller";
import { useMutation } from "@apollo/client";
import { DateInput } from "../DateInput";

export const SignupForm = () => {
  const [register] = useMutation<{ register: User }>(REGISTER);
  const { control, handleSubmit, errors } = useForm<ISingupInputs>({
    resolver: yupResolver(signupSchema),
  });
  const onSubmit = (data: ISingupInputs) => {
    register({ variables: { data: data } });
  };

  return (
    <React.Fragment>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            label={"First name"}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            error={!!errors.email}
            errmsg={errors.email?.message}
          />
        )}
        name="firstname"
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            label={"Last name"}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            error={!!errors.email}
            errmsg={errors.email?.message}
          />
        )}
        name="lastname"
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            label={"Email"}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            error={!!errors.email}
            errmsg={errors.email?.message}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <DateInput
            label={"Birthdate"}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            error={!!errors.born}
            errmsg={errors.born?.message}
          />
        )}
        name="born"
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            label={"Password"}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            pswd
            error={!!errors.password}
            errmsg={errors.password?.message}
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />
      <ButtonWithGradient title={"Sign up"} onClick={handleSubmit(onSubmit)} />
    </React.Fragment>
  );
};

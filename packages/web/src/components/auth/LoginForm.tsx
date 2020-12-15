import React from "react";
import { Input } from "../Input";
import { ButtonWithGradient } from "../ButtonWithGradient";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginInputs, loginSchema } from "@airbnb/common";
import { LOGIN } from "@airbnb/controller";
import { useMutation } from "@apollo/client";
import { useAuthStore } from "../../utils/store/authstore";
import { RouteComponentProps, withRouter } from "react-router-dom";

export const LoginForm = withRouter((props: RouteComponentProps) => {
  const [login] = useMutation<{ login: string }>(LOGIN);
  const { control, handleSubmit, errors } = useForm<ILoginInputs>({
    resolver: yupResolver(loginSchema),
  });
  const setAuth = useAuthStore((state) => state.setAuth);
  const onSubmit = (data: ILoginInputs) => {
    login({ variables: data }).then(() => {
      setAuth(true);
      props.history.push("/");
    });
  };
  return (
    <React.Fragment>
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
      <ButtonWithGradient child={"Log in"} onClick={handleSubmit(onSubmit)} />
    </React.Fragment>
  );
});

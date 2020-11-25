import React from "react"
import { Input } from "../Input"
import { Button } from "../Button"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ILoginInputs, loginSchema } from "@airbnb/common"
import { LOGIN } from "@airbnb/controller"
import { useMutation } from "@apollo/client"
import { useStore } from "../../utils/store/store"

export const LoginForm = () => {
  const [login, data] = useMutation<{ login: string }>(LOGIN)
  const { control, handleSubmit, errors } = useForm<ILoginInputs>({
    resolver: yupResolver(loginSchema),
  })
  const onSubmit = (data: ILoginInputs) => {
    login({ variables: data })
  }
  const setAuth = useStore(state => state.setAuth)
  if (data.data?.login) {
    setAuth(true)
  }
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
      <Button title={"Log in"} onClick={handleSubmit(onSubmit)} />
    </React.Fragment>
  )
}

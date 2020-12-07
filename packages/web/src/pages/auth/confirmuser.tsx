import { CONFIRM_USER } from "@airbnb/controller";
import { useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  withRouter,
  useParams,
  RouteComponentProps,
  Redirect,
} from "react-router-dom";

interface Props extends RouteComponentProps {}

export const ConfirmUser = withRouter((props: Props) => {
  const { token } = useParams<{ token: string }>();
  const [confirm] = useMutation(CONFIRM_USER, { variables: { token } });
  const [isConfirmed, setConfirmed] = useState(false);
  useEffect(() => {
    confirm()
      .then(() => setConfirmed(true))
      .catch(() => setConfirmed(false));
  }, [confirm, props]);
  if (isConfirmed) return <Redirect to="/" />;
  return (
    <div>Your account is being confirmed, you will be redirected soon.</div>
  );
});

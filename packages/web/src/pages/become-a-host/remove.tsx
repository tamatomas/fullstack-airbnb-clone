import React, { useEffect } from "react";
import { DELETE } from "@airbnb/controller";
import { useMutation } from "@apollo/client";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps<{ id: string }> {}

export const Remove = withRouter((props: Props) => {
  const [remove] = useMutation<Boolean>(DELETE, {
    variables: { id: parseInt(props.match.params.id) },
  });
  useEffect(() => {
    remove().then(() => props.history.push("/hosting/listings"));
  });
  return (
    <React.Fragment>
      <div>Loading...</div>
    </React.Fragment>
  );
});

import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./Router";
import reportWebVitals from "./reportWebVitals";
import "fontsource-poppins";
import "fontsource-poppins/500.css";
import "react-datepicker/dist/react-datepicker-cssmodules.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils/apollo/client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

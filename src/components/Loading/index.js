import React from "react";
import * as ReactBootStrap from "react-bootstrap";

//Styles
import { LoadingWrapper } from "./styles";

const Loading = () => {
  return (
    <LoadingWrapper>
      <ReactBootStrap.Spinner
        className="spinner"
        animation="border"
        size="xl"
        as="div"
      />
      <h1>Loading ... Please Wait</h1>
    </LoadingWrapper>
  );
};

export default Loading;

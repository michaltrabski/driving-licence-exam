import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const AppWrapper = ({ children }) => {
  return (
    <section className="bg-light">
      <Wrapper>{children}</Wrapper>
    </section>
  );
};

export default AppWrapper;

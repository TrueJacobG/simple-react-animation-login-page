import React from "react";
import styled from "styled-components";
import LoginBox from "./components/loginBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <LoginBox />
    </AppContainer>
  );
}

export default App;

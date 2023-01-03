import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "../accountContext";
import SignUpForm from "./signUpForm";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: white;
  box-shadow: 0 0 2px black;
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -290px;
  left: -70px;
  transform: rotate(60deg);
  background: rgb(14, 175, 252);
  background: linear-gradient(90deg, rgba(14, 175, 252, 1) 41%, rgba(85, 202, 226, 1) 91%);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.3;
  color: white;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: white;
  font-weight: 500;
  font-size: 11px;
  z-index: 5;
  margin: 0;
  margin-top: 5px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const backDropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export default function LoginBox(props: any) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignUp = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignIn = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = {
    switchToSignUp,
    switchToSignIn,
  };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backDropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>back</HeaderText>
              <SmallText>Please sign in</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>account</HeaderText>
              <SmallText>Please sign up</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>

        <ContentContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignUpForm />}
        </ContentContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}

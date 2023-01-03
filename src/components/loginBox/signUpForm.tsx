import React, { useContext } from "react";
import { AccountContext } from "../accountContext";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";

export default function SignUpForm() {
  const { switchToSignIn } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <SubmitButton type="submit">Create Account</SubmitButton>
      <MutedLink href="#">
        Login?{" "}
        <BoldLink href="#" onClick={switchToSignIn}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

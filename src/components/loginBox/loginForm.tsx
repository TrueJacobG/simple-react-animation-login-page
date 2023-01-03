import React, { useContext } from "react";
import { AccountContext } from "../accountContext";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";

export default function LoginForm() {
  const { switchToSignUp } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <MutedLink href="#">Forget your password?</MutedLink>
      <SubmitButton type="submit">Sign in</SubmitButton>
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignUp}>
          Sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

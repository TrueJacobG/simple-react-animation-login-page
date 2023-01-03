import { createContext } from "react";

type tempType = () => void;
type tempType2 = { switchToSignUp: tempType; switchToSignIn: tempType };

export const AccountContext = createContext<tempType2>({
  switchToSignUp: function (): void {
    throw new Error("Function not implemented.");
  },
  switchToSignIn: function (): void {
    throw new Error("Function not implemented.");
  },
});

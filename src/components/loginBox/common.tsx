import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: #a8a8a8;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgb(14, 175, 252);
  font-weight: 500;
  text-decoration: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid grey;
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:last-of-type {
    border-bottom: 1.5px solid black;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(14, 175, 252);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 250ms ease-in-out;
  background: rgb(14, 175, 252);
  background: linear-gradient(90deg, rgba(14, 175, 252, 1) 41%, rgba(85, 202, 226, 1) 91%);
  margin-top: 20px;

  &:hover {
    filter: brightness(1.15);
  }
`;

import React from "react";
import { IUser } from "./App";

interface IUserProps {
  user: IUser;
  children: React.ReactNode;
  value: number;
  onChange: (value: number) => void;
  isVisible?: boolean;
}

export const User = (props: IUserProps) => {
  const { user, isVisible, children, onChange, value } = props;

  return (
    <>
      <input
        type="number"
        onChange={(e) => onChange(+e.target.value)}
        value={value}
      />
      {isVisible ? user.name : "Not user"}
      {children}
    </>
  );
};

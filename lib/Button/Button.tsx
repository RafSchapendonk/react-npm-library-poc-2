import { ReactNode } from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps): ReactNode => {
  return <button className="bg-red-500">{children}</button>;
};

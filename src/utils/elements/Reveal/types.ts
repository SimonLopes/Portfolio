import { ReactNode } from "react";

export interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  withBackground: boolean;
}

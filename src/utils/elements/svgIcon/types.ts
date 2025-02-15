import { CSSProperties } from "react";

export interface SVGIconProps {
  src: string;
  color?: string;
  iconSize?: number;
  id: number;
  onClick?: () => void;
  style?: CSSProperties;
}

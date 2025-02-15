import React, { CSSProperties } from "react";
import { SliderRootProps } from "./types";
import "./styles.css";

const SliderRoot: React.FC<SliderRootProps> = ({ quantity, children, position }) => {
  return (
    <div className="slider" style={{ "--quantity": quantity, "--position": position } as CSSProperties}>
      {children}
    </div>
  );
};
export default SliderRoot;

import React, { useEffect, useRef } from "react";
import { SVGIconProps } from "./types";

const SvgWithIcon: React.FC<SVGIconProps> = ({
  src,
  iconSize = 50,
  id,
  color,
  onClick,
  style,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const iconGroupRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const iconGroup = iconGroupRef.current;

    if (svg && iconGroup) {
      const svgWidth = svg.clientWidth;
      const svgHeight = svg.clientHeight;

      const iconWidth = iconSize;
      const iconHeight = iconSize;

      const translateX = (svgWidth - iconWidth) / 2;
      const translateY = (svgHeight - iconHeight) / 2;

      iconGroup.setAttribute(
        "transform",
        `translate(${translateX}, ${translateY})`
      );
    }
  }, [iconSize]);

  return (
    <svg
      ref={svgRef}
      id={String(id)}
      width="122"
      height="140"
      viewBox="0 0 121.2435565298214 140"
      onClick={() => onClick!()}
      style={style!}
    >
      <path
        fill={color}
        d="M51.96152422706631 4.999999999999999Q60.6217782649107 0 69.28203230275508 5L112.58330249197702 30Q121.2435565298214 35 121.2435565298214 45L121.2435565298214 95Q121.2435565298214 105 112.58330249197702 110L69.28203230275508 135Q60.6217782649107 140 51.96152422706632 135L8.660254037844386 110Q0 105 0 95L0 45Q0 35 8.660254037844387 30Z"
      ></path>
      <g id="iconGroup" ref={iconGroupRef}>
        <image href={src} width={iconSize} height={iconSize} />
      </g>
    </svg>
  );
};

export default SvgWithIcon;

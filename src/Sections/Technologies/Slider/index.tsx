import { Technology } from "../../../data/TechnologiesData/technologiesList";
import SvgWithIcon from "../../../utils/elements/svgIcon";
import "./styles.css";
import { BannerPorps } from "./types";

export function ImageSection({ icons, speed }: BannerPorps) {
  function shuffleArray(arr: Technology[]): void {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function getIconsForLoop(): Technology[] {
    let iconsList = [...icons];
    shuffleArray(iconsList);

    const loopSize = iconsList.length < 15 ? 15 : iconsList.length;

    while (iconsList.length < loopSize) {
      iconsList.push(...icons);
    }

    shuffleArray(iconsList);

    return iconsList;
  }

  const imagesStyle = {
    animation: `swipe ${speed}ms linear infinite`,
  };

  return (
    <div className="images" style={imagesStyle}>
      {getIconsForLoop().map(({ url }, i) => (
        <div className="image">
          <SvgWithIcon src={url} id={i} color="#D9D9D9" />
        </div>
      ))}
    </div>
  );
}

export default function Slider({ icons, speed }: BannerPorps) {
  return (
    <div className="banner-wrapper">
      <div className="wrapper">
        <ImageSection icons={icons} speed={speed} />
        <ImageSection icons={icons} speed={speed} />
      </div>
      <div className="wrapper">
        <ImageSection icons={icons} speed={speed} />
        <ImageSection icons={icons} speed={speed} />
      </div>
      <div className="wrapper">
        <ImageSection icons={icons} speed={speed} />
        <ImageSection icons={icons} speed={speed} />
      </div>
      <div className="wrapper">
        <ImageSection icons={icons} speed={speed} />
        <ImageSection icons={icons} speed={speed} />
      </div>
    </div>
  );
}

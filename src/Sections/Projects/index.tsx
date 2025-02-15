import React, { useState, useRef } from "react";
import "./styles.css";
import Slider from "./Slider";
import {
  Flex,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useLanguage } from "../../Hooks/LanguageProvider";
import { texts } from "../../utils/texts/PageTexts";
import { AllTexts, Language } from "../../utils/texts/types";
import { ProjectsData } from "../../data/ProjectsData/projectsData";
import Reveal from "../../utils/elements/Reveal";

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const { projects }: AllTexts = texts;
  const currentText = projects[language as Language];
  const { colorScheme } = useMantineColorScheme();

  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const threshold = 50;

  const nextItem = () => {
    setSliderPosition((state) => state + 1);
  };

  const prevItem = () => {
    setSliderPosition((state) => state - 1);
  };

  const handleMouseDown = (e: {
    clientX: number;
    preventDefault: () => void;
  }) => {
    isDragging.current = true;
    startX.current = e.clientX;
    e.preventDefault();
  };

  const handleMouseMove = (e: { clientX: number }) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    if (diff > threshold) {
      nextItem();
      isDragging.current = false;
    } else if (diff < -threshold) {
      prevItem();
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <Flex
      className="banner"
      flex={1}
      direction="column"
      p={100}
      align="center"
      style={{ userSelect: "none", overflowX: "hidden" }}
      h="100vh"
      w="100vw"
      id="projects"
    >
      <Reveal withBackground>
        <Text fz={50}>{currentText.title}</Text>
      </Reveal>
      <Flex
        align="center"
        justify="center"
        flex={1}
        w="100%"
        mt={0}
        className="projects-slider-container"
      >
        <Flex flex={1} align="center" justify="space-around">
          <UnstyledButton
            onClick={prevItem}
            style={{
              zIndex: 2,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            bg={
              colorScheme === "dark"
                ? "rgba(44, 44, 46, 0.9)"
                : "rgba(217, 217, 217, 0.7)"
            }
            w={60}
            h={60}
            ta="center"
          >
            <IconArrowLeft size={50} />
          </UnstyledButton>
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: "grab", userSelect: "none" }}
          >
            <Slider.root
              quantity={ProjectsData.length}
              position={sliderPosition}
            >
              {ProjectsData.map((item, key) => (
                <Slider.item
                  key={key}
                  src={item.imageUrl}
                  position={key}
                  title={item.title}
                  id={item.id}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  link={item.link}
                />
              ))}
            </Slider.root>
          </div>
          <UnstyledButton
            onClick={nextItem}
            style={{
              zIndex: 2,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            bg={
              colorScheme === "dark"
                ? "rgba(44, 44, 46, 0.9)"
                : "rgba(217, 217, 217, 0.7)"
            }
            w={60}
            h={60}
            ta="center"
          >
            <IconArrowRight size={50} />
          </UnstyledButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Projects;

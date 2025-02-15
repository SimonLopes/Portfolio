import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import Slider from "./Slider";
import { Flex, Text, UnstyledButton } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { getGitHubRepos } from "./services/getRepos";
import { reposListDTO } from "./List/types";
import { useLanguage } from "../../Hooks/LanguageProvider";
import { texts } from "../../utils/texts/PageTexts";
import { AllTexts, Language } from "../../utils/texts/types";

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const { projects }: AllTexts = texts;
  const currentText = projects[language as Language];

  const [reposList, setReposList] = useState<reposListDTO[]>([]);
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

  useEffect(() => {
    getGitHubRepos("SimonLopes").then((repos) => {
      const reposRes: reposListDTO[] = repos
        .filter((repo) => repo.description && repo.description.trim() !== "")
        .map((repo, i) => ({
          id: i,
          title: repo.name,
          description: repo.description,
          color: "",
          imageUrl:
            "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
          link: repo.html_url,
        }));

      setReposList(reposRes);
    });
  }, []);

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
      <Text fz={50}>{currentText.title}</Text>
      <Flex align="center" justify="center" flex={1} w="100%" mt={-200}>
        <Flex flex={1} align="center" justify="space-around">
          <UnstyledButton onClick={prevItem} style={{ zIndex: 2 }}>
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
            <Slider.root quantity={reposList.length} position={sliderPosition}>
              {reposList.map((item, key) => (
                <Slider.item
                  key={key}
                  src={item.imageUrl}
                  position={key}
                  title={item.title}
                  id={key}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  link={item.link}
                />
              ))}
            </Slider.root>
          </div>
          <UnstyledButton onClick={nextItem} style={{ zIndex: 2 }}>
            <IconArrowRight size={50} />
          </UnstyledButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Projects;

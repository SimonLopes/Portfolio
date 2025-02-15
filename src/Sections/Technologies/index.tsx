import React from "react";
import { Flex, Text } from "@mantine/core";
import { useLanguage } from "../../Hooks/LanguageProvider";
import { texts } from "../../utils/texts/PageTexts";
import { AllTexts, Language } from "../../utils/texts/types";
import { TechnologiesList } from "../../data/TechnologiesData/technologiesList";
import Slider from "./Slider";

const Technologies: React.FC = () => {
  const { language } = useLanguage();
  const { technologies }: AllTexts = texts;
  const currentText = technologies[language as Language];

  return (
    <div id="technologies">
      <Flex flex={1} align="center" justify="center" h={70} mb={30} mt={100}>
        <Text fz={50}>{currentText.title}</Text>
      </Flex>
      <Flex direction="row">
        <Slider icons={TechnologiesList} speed={60000} />
      </Flex>
    </div>
  );
};

export default Technologies;

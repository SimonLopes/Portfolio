import { Flex, Text, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { useLanguage } from "../../Hooks/LanguageProvider";
import { texts } from "../../utils/texts/PageTexts";
import { AllTexts, Language } from "../../utils/texts/types";
import Reveal from "../../utils/elements/Reveal";

const About: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const { language } = useLanguage();
  const { about }: AllTexts = texts;
  const currentText = about[language as Language];

  return (
    <Flex
      flex={1}
      direction={{ base: "column", md: "row" }}
      justify="center"
      align="center"
      gap={{ base: 50, md: 100 }}
      py={50}
      id="aboutMe"
      px={20}
      pt={100}
    >
      <Flex
        flex={{ base: "none", md: 0.18 }}
        justify={{ base: "center", md: "end" }}
        align="center"
        ta={{ base: "center", md: "right" }}
      >
        <Reveal withBackground>
          <Text fz={{ base: 35, sm: 40, md: 50 }} fw="lighter">
            {currentText.title}{" "}
            <span style={{ fontWeight: "bold" }}>{currentText.name}</span>
          </Text>
        </Reveal>
      </Flex>

      <Flex
        flex={{ base: "none", md: 0.4 }}
        justify="center"
        bg={colorScheme === "dark" ? "#2C2C2E" : "#D9D9D9"}
        p={{ base: 30, sm: 40, md: 50 }}
        style={{
          borderRadius: "26px",
          boxShadow: "5px 10px 30px rgba(0, 0, 0, 0.2)",
          maxWidth: "90%",
        }}
      >
        <Reveal withBackground={false}>
          <Text fz={{ base: 18, sm: 22, md: 25 }} fw="lighter" ta="center">
            {currentText.description}
          </Text>
        </Reveal>
      </Flex>
    </Flex>
  );
};

export default About;

import React from "react";
import { Flex, Image, Menu, Text } from "@mantine/core";
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
      <Flex
        flex={1}
        align="center"
        justify="center"
        h={70}
        mb={30}
        mt={100}
        direction="column"
      >
        <Text fz={50}>{currentText.title}</Text>
        <Menu trigger="hover" openDelay={100} closeDelay={400} withArrow>
          <Menu.Target>
            <Text fz={20} c="blue">
              {currentText.description}
            </Text>
          </Menu.Target>
          <Menu.Dropdown>
            {[...TechnologiesList]
              .sort((a, b) => a.title.localeCompare(b.title))
              .map(({ name, title, url }) => (
                <Menu.Item
                  leftSection={<Image src={url} h={10} w={10} />}
                  key={name}
                  h={23}
                >
                  <Text fz={12} key={name}>
                    {title}
                  </Text>
                </Menu.Item>
              ))}
          </Menu.Dropdown>
        </Menu>
      </Flex>
      <Flex direction="row">
        <Slider icons={TechnologiesList} speed={60000} />
      </Flex>
    </div>
  );
};

export default Technologies;

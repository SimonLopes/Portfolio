import { Flex, Text } from "@mantine/core";
import React from "react";
import { useLanguage } from "../../Hooks/LanguageProvider";
import { texts } from "../../utils/texts/PageTexts";
import { AllTexts, Language } from "../../utils/texts/types";
import SvgWithIcon from "../../utils/elements/svgIcon";
import { ContactsList } from "../../data/ContactsData/contactsList";
import Reveal from "../../utils/elements/Reveal";

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const { contact }: AllTexts = texts;
  const currentText = contact[language as Language];

  return (
    <Flex
      align="center"
      justify="center"
      flex={1}
      direction="column"
      mt={100}
      mb={150}
      id="contacts"
    >
      <Flex align="center" justify="center" px={50}>
        <Reveal withBackground>
          <Text fz={50} ta="center">
            {currentText.title}
          </Text>
        </Reveal>
      </Flex>
      <Flex
        gap={50}
        align="center"
        justify="center"
        py={100}
        flex={1}
        wrap="wrap"
        px={30}
      >
        {ContactsList.map(({ name, url, contact, iconUrl }) => (
          <Reveal withBackground={false}>
            <Flex
              flex={1}
              key={name}
              align="center"
              justify="center"
              direction="column"
              w={150}
            >
              <SvgWithIcon
                onClick={() => {
                  const newTab = window.open(url, "_blank");
                  if (newTab) {
                    newTab.focus();
                  }
                }}
                src={iconUrl}
                id={1}
                color="#D9D9D9"
                style={{ cursor: "pointer" }}
              />
              <Text mt={5} fz={15} fw="lighter">
                {contact}
              </Text>
            </Flex>
          </Reveal>
        ))}
      </Flex>
    </Flex>
  );
};

export default Contact;

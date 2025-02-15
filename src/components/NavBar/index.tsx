import {
  Flex,
  UnstyledButton,
  Menu,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconCaretDownFilled, IconMoon, IconSun } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { AllTexts, Language, languages } from "../../utils/texts/types";
import { useLanguage } from "../../Hooks/LanguageProvider";
import { texts } from "../../utils/texts/PageTexts";

const NavBar: React.FC = () => {
  const { language, handleLanguageChange } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const { menuItems }: AllTexts = texts;
  const currentText = menuItems[language as Language];

  const { setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    handleLanguageChange(lang.toLowerCase() as Language);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.body.style.transition =
      "background-color 0.2s ease, color 0.2s ease";
  }, []);

  return (
    <Flex direction="column" gap={30}>
      <UnstyledButton
        className="button"
        fw={500}
        onClick={() => {
          scrollToSection("aboutMe");
        }}
      >
        {currentText.aboutMe}
      </UnstyledButton>
      <UnstyledButton
        className="button"
        fw={500}
        onClick={() => {
          scrollToSection("projects");
        }}
      >
        {currentText.projects}
      </UnstyledButton>
      <UnstyledButton
        className="button"
        fw={500}
        onClick={() => {
          scrollToSection("technologies");
        }}
      >
        {currentText.technologies}
      </UnstyledButton>
      <UnstyledButton
        className="button"
        fw={500}
        onClick={() => {
          scrollToSection("contacts");
        }}
      >
        {currentText.contact}
      </UnstyledButton>
      <Menu withArrow>
        <Menu.Target>
          <UnstyledButton className="button" fw={500} w={50}>
            {selectedLanguage.toUpperCase()} <IconCaretDownFilled size={15} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          {languages.map((item, key) => (
            <Menu.Item key={key} onClick={() => handleLanguageSelect(item)}>
              {languages[key].toUpperCase()}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>

      <Flex
        w={50}
        h={25}
        bg={computedColorScheme === "dark" ? "#D9D9D9" : "black"}
        align="center"
        p={2}
        style={{
          cursor: "pointer",
          borderRadius: 50,
        }}
        onClick={toggleColorScheme}
      >
        <Flex
          w={21}
          h={21}
          bg={computedColorScheme === "dark" ? "black" : "white"}
          style={{
            transition: "transform 0.3s ease",
            transform:
              computedColorScheme === "dark"
                ? "translateX(25px)"
                : "translateX(0px)",
            borderRadius: 50,
          }}
          align="center"
          justify="center"
        >
          {computedColorScheme === "dark" ? (
            <IconMoon size={15} />
          ) : (
            <IconSun size={15} />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;

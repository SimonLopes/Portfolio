import { Flex, Text, Avatar } from "@mantine/core";
import { texts } from "../../utils/texts/PageTexts";
import { useLanguage } from "../../Hooks/LanguageProvider";
import { AllTexts, Language } from "../../utils/texts/types";

export default function Presentation() {
  const { language } = useLanguage();
  const { presentation }: AllTexts = texts;
  const currentText = presentation[language as Language];

  return (
    <Flex
      flex={1}
      direction={{ base: "column", md: "row" }}
      justify={{ base: "center", md: "space-arround" }}
      align="center"
      p="md"
      px={{ base: 50, md: 80 }}
      h="90vh"
    >
      <Flex
        flex={1}
        justify="center"
        align="center"
        px={{ base: 50, md: 90 }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          flex={0.8}
          direction="column"
          align={{ base: "center", md: "start" }}
          ta={{ base: "center", md: "left" }}
          mt={{ base: 30, md: 0 }}
        >
          <Text fz={{ base: 30, md: 50 }} fw="lighter">
            <span style={{ fontWeight: 500 }}>{currentText.name}</span>{" "}
            {currentText.role}
          </Text>
          <Text
            fz={{ base: 18, md: 30 }}
            fw="lighter"
            maw={{ base: "100%", md: "60%" }}
          >
            {currentText.description}
          </Text>
        </Flex>
        <Avatar
          src="./perfil.jpeg"
          size={300}
          style={{
            boxShadow: "5px 10px 40px rgba(0, 0, 0, 0.5)",
            border: "solid 4px #fff",
          }}
        />
      </Flex>
    </Flex>
  );
}

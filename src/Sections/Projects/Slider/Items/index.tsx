import React, { CSSProperties } from "react";
import { SliderItemProps } from "./types";
import "./styles.css";
import {
  Button,
  Card,
  Group,
  Image,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useLanguage } from "../../../../Hooks/LanguageProvider";
import { texts } from "../../../../utils/texts/PageTexts";
import { AllTexts, Language } from "../../../../utils/texts/types";

const SliderItem: React.FC<SliderItemProps> = ({
  description,
  title,
  src,
  position,
  link,
}) => {
  const { colorScheme } = useMantineColorScheme();
  const { language } = useLanguage();
  const { projects }: AllTexts = texts;
  const currentText = projects[language as Language];
  return (
    <Card
      shadow="lg"
      padding="lg"
      radius="md"
      withBorder
      className="item"
      style={{ "--position": position } as CSSProperties}
      miw={250}
      maw={250}
    >
      <Card.Section>
        <Image src={src} alt={`Item ${position}`} height={150} />
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs" mih={80} mah={80}>
        <Text fw={500}>{title}</Text>
      </Group>

      <Text size="sm" c="dimmed" mih={150} mah={150}>
        {description}
      </Text>

      <Button
        bg={colorScheme === "dark" ? "#D9D9D9" : "#2C2C2E"}
        c={colorScheme === "dark" ? "#2C2C2E" : "#D9D9D9"}
        fullWidth
        mt="md"
        radius="md"
        onClick={() => {
          const newTab = window.open(link, "_blank");
          if (newTab) {
            newTab.focus();
          }
        }}
      >
        {currentText.buttons}
      </Button>
    </Card>
  );
};
export default SliderItem;

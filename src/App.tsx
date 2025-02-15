import {
  AppShell,
  Burger,
  createTheme,
  Flex,
  Group,
  MantineProvider,
  Text,
  Container,
} from "@mantine/core";
import Header from "./components/Header";
import "@mantine/core/styles.css";
import Presentation from "./Sections/Presentation";
import { LanguageProvider } from "./Hooks/LanguageProvider";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Technologies from "./Sections/Technologies";
import Contact from "./Sections/Contact";
import { SiteData } from "./data/SiteData/siteData";
import { useDisclosure } from "@mantine/hooks";
import NavBar from "./components/NavBar";

const theme = createTheme({});

export default function App() {
  const [opened, { toggle }] = useDisclosure();
  const handleClickCount = () => {
    SiteData.clicks += 1;
  };
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <LanguageProvider>
        <AppShell
          onClick={handleClickCount}
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { desktop: true, mobile: !opened },
          }}
          style={{ overflowX: "hidden" }}
        >
          <AppShell.Header>
            <Container size="xl">
              <Group h="100%" px="md" justify="space-between">
                <Flex
                  flex={1}
                  direction="row"
                  justify="stretch"
                  align="center"
                  h={60}
                  hiddenFrom="sm"
                >
                  <Burger opened={opened} onClick={toggle} size="sm" />
                  <Text fw={500} fz={20} hiddenFrom="sm">
                    Simon Lopes
                  </Text>
                </Flex>
                <Header />
              </Group>
            </Container>
          </AppShell.Header>
          <AppShell.Navbar p="md" hidden={!opened} hiddenFrom="sm">
            <NavBar />
          </AppShell.Navbar>

          <AppShell.Main>
            <Presentation />
            <About />
            <Projects />
            <Technologies />
            <Contact />
            <Flex flex={1} justify="center">
              <Text fw="lighter">© {new Date().getFullYear()}, SimonLopes</Text>
            </Flex>
          </AppShell.Main>
        </AppShell>
      </LanguageProvider>
    </MantineProvider>
  );
}

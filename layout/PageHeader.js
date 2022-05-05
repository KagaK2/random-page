import { Header, AppShell, Text, Group, Center } from "@mantine/core";
import MainPage from "./MainPage";

const PageHeader = () => {
  return (
    <AppShell
      header={
        <Header
          height={60}
          p="xs"
          sx={{
            backdropFilter: "saturate(180%) blur(20px)",
            backgroundColor: "transparent",
          }}
        >
          <Center>
            <Group spacing="xl">
              <Text color={"white"}>Link 1</Text>
              <Text color={"white"}>Link 2</Text>
              <Text color={"white"}>Link 3</Text>
              <Text color={"white"}>Link 4</Text>
            </Group>
          </Center> 
        </Header>
      }
    >
      <MainPage/>
    </AppShell>
  );
};

export default PageHeader;

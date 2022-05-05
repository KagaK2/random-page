import { Container, Center } from "@mantine/core";

const PageCircle = ({ children, ...props }) => {
  return (
    <Container
      px={0}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        height: "15em",
        width: "15em",
        borderRadius: "50%",
        border: "1px solid black",
        zIndex: 100,
      }}
      {...props}
    >
      <Center style={{ height: "100%", width: "100%" }}>{children}</Center>
    </Container>
  );
};

export default PageCircle;

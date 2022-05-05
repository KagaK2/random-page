import { Container } from "@mantine/core";

const PageSquare = ({ children, ...props }) => {
  return (
    <Container
      px={0}
      style={{ height: "50vh", border: "1px solid black", width: "100%" }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default PageSquare;

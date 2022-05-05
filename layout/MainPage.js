import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SimpleGrid, Button, Center, Box } from "@mantine/core";
import PageSquare from "./PageSquare";
import PageCircle from "./PageCircle";

const MainPage = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <SimpleGrid
        cols={2}
        spacing={0}
        style={{ width: "100%", height: "100vh", position: "relative" }}
      >
        <PageCircle
          component={motion.div}
          layoutId={1}
          onClick={() => setSelectedId(1)}
        >
          My Picture here
        </PageCircle>
        <PageSquare
          component={motion.div}
          layoutId={2}
          onClick={() => setSelectedId(2)}
        >
          <div>Top Left</div>
        </PageSquare>
        <PageSquare
          component={motion.div}
          layoutId={3}
          onClick={() => setSelectedId(3)}
        >
          <div>Top Right</div>
        </PageSquare>
        <PageSquare
          component={motion.div}
          layoutId={4}
          onClick={() => setSelectedId(4)}
        >
          <div>Bottom Left</div>
        </PageSquare>
        <PageSquare
          component={motion.div}
          layoutId={5}
          onClick={() => setSelectedId(5)}
        >
          <div>Bottom Right</div>
        </PageSquare>
      </SimpleGrid>

      <AnimatePresence>
        {selectedId && (
          <Box
            component={motion.div}
            layoutId={selectedId}
            style={{
              position: "absolute",
              left: "33%",
              top: "33%",
              zIndex: 150,
              width: 450,
              height: 450,
              border: '1px solid black'
            }}
          >
            <Button
              component={motion.button}
              onClick={() => setSelectedId(null)}
            >
              X
            </Button>
          </Box>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainPage;

import { useEffect, useRef } from "react";
import { RevealProps } from "./types";
import { motion, useAnimation, useInView } from "framer-motion";
import { useMantineColorScheme } from "@mantine/core";

const Reveal = ({
  children,
  width = "fit-content",
  withBackground,
}: RevealProps) => {
  const { colorScheme } = useMantineColorScheme();

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
      {withBackground && (
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: colorScheme === "dark" ? "#D9D9D9" : "#2C2C2E",
            zIndex: 20,
          }}
        />
      )}
    </div>
  );
};

export default Reveal;

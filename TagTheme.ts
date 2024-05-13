import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    bgColor: "white",
    textTransform: "uppercase",
    boxShadow: "none",
  },
});

const health = definePartsStyle({
  container: {
    color: "#49FF00",
    outline: "2px solid #49FF00",
  },
});

const diet = definePartsStyle({
  container: {
    color: "#FF9300",
    outline: "2px solid #FF9300",
  },
});

const caution = definePartsStyle({
  container: {
    color: "#FF0000",
    outline: "2px solid #FF0000",
  },
});

export const TagTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    health: health,
    diet: diet,
    caution: caution,
  },
});

// labels: {
//     health: "#49FF00",
//     diet: "#FBFF00",
//     caition: "#FF0000",
//   }

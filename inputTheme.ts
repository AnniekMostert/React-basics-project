import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    color: "palette.greenDark",
    _placeholder: { color: "palette.greenLight" },
  },
});

const variantOutline = definePartsStyle({
    field: {
      borderColor: "palette.greenLight",
      _hover: { borderColor: "palette.greenLight" },
    },
  });

const variants = {
  outline: variantOutline,
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: { variant: "outline" },
});

import { extendTheme } from "@chakra-ui/react";
import { InputTheme } from "./InputTheme";
import { TagTheme } from "./TagTheme";
import { CheckboxTheme } from "./CheckboxTheme";

export const theme = extendTheme({
  colors: {
    palette: {
      yellowLight: "#FFF9E0",
      yellowDark: "#F1C550",
      red: "#EA4C4C",
      greenLight: "#A1C45A",
      greenDark: "#4b5f22",
    },
  },
  styles: {
    global: {
      body: {
        color: "palette.greenDark",
        width: "100%",
      },
    },
  },
  components: {
    Input: InputTheme,
    Tag: TagTheme,
    Checkbox: CheckboxTheme,
  },
});

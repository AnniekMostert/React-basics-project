import {
  extendTheme,
  defineStyleConfig
} from "@chakra-ui/react";
import { inputTheme } from "./inputTheme";


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
  //   styles: {
  //     global: {
  //       body: {
  //         color: "teal.800",
  //         width: "100%",
  //       },
  //     },
  //   },
  components: {
    Input: inputTheme
  },
});

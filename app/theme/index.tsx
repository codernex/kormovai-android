import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      900: "#13a488",
      800: "#18ceab",
      700: "#31e7c4",
      200: "#baf7eb",
    },
    secondary: {
      900: "#22a4dd",
    },
    gray: {
      900: "#8c8c8c",
      700: "#7E7E7E",
      500: "#f5f5f5",
      100: "#f5f5f5",
      50: "#E8E8E8",
    },
    black: {
      900: "#000000",
    },
    customGray: {
      900: "#dcdcdc",
      600: "#646464",
      300: "#565858",
    },
    lightGreen: "#00d566",
    gradient: {
      color1: "#22a4dd",
      color2: "#15a68a",
    },
  },
});

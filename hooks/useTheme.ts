import { useColorScheme } from "react-native";
import { Color, DarkColor } from "../GlobalStyles";

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return {
    isDark,
    colors: isDark ? DarkColor : Color,
  };
};


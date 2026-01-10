import { useColorScheme } from "react-native";
import { Color, DarkColor } from "../GlobalStyles";

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  // Debug: Log the color scheme (remove in production)
  // console.log('Current color scheme:', colorScheme, 'isDark:', isDark);

  return {
    isDark,
    colors: isDark ? DarkColor : Color,
  };
};


interface ThemeColors {
  background: string;
  text: string;
  textSecondary: string;
}

interface Theme {
  colors: ThemeColors;
}

export const useTheme = (): Theme => {
  return {
    colors: {
      background: '#FFFFFF',
      text: '#000000',
      textSecondary: '#666666',
    },
  };
}; 
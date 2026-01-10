/* fonts */
export const FontFamily = {
  sMMedium: "Inter-Medium",
  inputMediumSemiBold: "Inter-SemiBold",
};
/* font sizes */
export const FontSize = {
  sMMedium_size: 14,
  inputMediumSemiBold_size: 15,
  size_base: 16,
};
/* Colors */
export const Color = {
  colorWhite: "#fff",
  colorGainsboro_100: "#e5e5ea",
  colorGainsboro_200: "#dee2e6",
  colorRoyalblue: "#2563eb",
  colorCrimson: "#ef4444",
  colorGray: "#1f2937",
  colorAliceblue: "#eff6ff",
  colorDarkgray: "#a5a9af",
  colorSlategray: "#6b7280",
  colorBlack: "#000",
};

/* Dark Mode Colors */
export const DarkColor = {
  colorWhite: "#1a1a1a", // Dark background
  colorGainsboro_100: "#2d2d2d", // Dark border/divider
  colorGainsboro_200: "#3a3a3a", // Darker border
  colorRoyalblue: "#3b82f6", // Slightly lighter blue for dark mode
  colorCrimson: "#ef4444", // Keep red the same
  colorGray: "#e5e5e5", // Light text on dark
  colorAliceblue: "#1e3a5f", // Darker blue background
  colorDarkgray: "#9ca3af", // Lighter gray for dark mode
  colorSlategray: "#9ca3af", // Lighter gray for dark mode
  colorBlack: "#ffffff", // White text on dark
};

/* Theme-aware color getter */
export const getColors = (isDark: boolean) => {
  return isDark ? DarkColor : Color;
};
/* Style Variables */
export const StyleVariable = {
  advancedFormsDatepickerWeekNamesInlineListBorderRadius: 999,
  advancedFormsDatepickerWeekNamesSpacingBottom: 16,
  componentsButtonSpacingXLG: 20,
  componentsButtonSpacingYLG: 22,
};
/* Gaps */
export const Gap = {
  gap_0: 0,
  gap_xs: 2,
  gap_sm: 8,
  gap_md: 11,
  gap_lg: 16,
  gap_xl: 20,
};
/* Paddings */
export const Padding = {
  p_45xl: 64,
  p_5xl: 24,
  p_21xl: 40,
  p_xl: 20,
  p_xs: 12,
  p_mini: 15,
  p_33xl: 52,
  p_5xs: 8,
};
/* border radiuses */
export const Border = {
  br_5xs: 8,
  br_980xl: 999,
  br_678xl_1: 697,
  br_81xl: 100,
  br_243xl_9: 263,
  dateBorderRadius: 100, // Border radius for calendar date states
};

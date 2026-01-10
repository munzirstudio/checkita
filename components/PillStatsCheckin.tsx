import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";
import { useTheme } from "../hooks/useTheme";

export type PillStatsCheckinType = {
  label: string;
  count: number;
  color?: string;
  show?: boolean;
};

const PillStatsCheckin: React.FC<PillStatsCheckinType> = ({
  label,
  count,
  color = Color.colorRoyalblue,
  show = true,
}) => {
  const { colors: themeColors } = useTheme();
  if (!show) return null;

  return (
    <View style={[styles.pillStatsCheckin, styles.iconFlexBox, { backgroundColor: themeColors.colorWhite }]}>
      <Text style={[styles.bigCount, { color: themeColors.colorBlack }]}>{count}</Text>
      <View style={styles.labelContainer}>
        <View 
          style={[
            styles.icon, 
            { backgroundColor: color }
          ]} 
        />
        <Text style={[styles.textTypo, { color: themeColors.colorBlack }]}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.sMMedium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontSize: FontSize.sMMedium_size,
  },
  icon: {
    borderRadius: Border.br_243xl_9,
    width: 8,
    height: 8,
  },
  bigCount: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.inputMediumSemiBold,
    fontWeight: "600",
    fontSize: 46,
    lineHeight: 40,
    letterSpacing: 0,
    marginBottom: 20,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  pillStatsCheckin: {
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 0,
    flexDirection: "column",
    paddingHorizontal: 8,
    paddingVertical: 8,
    gap: 0,
    backgroundColor: Color.colorWhite,
  },
});

export default PillStatsCheckin;

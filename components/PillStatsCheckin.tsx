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
  if (!show) return null;

  return (
    <View style={[styles.pillStatsCheckin, styles.iconFlexBox]}>
      <View 
        style={[
          styles.icon, 
          styles.iconFlexBox, 
          { backgroundColor: color }
        ]} 
      />
      <Text style={styles.textTypo}>{label}</Text>
      <Text style={[styles.text, styles.textTypo]}>{count}</Text>
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
  text: {
    minWidth: 20,
  },
  pillStatsCheckin: {
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 8,
    gap: 8,
    backgroundColor: Color.colorWhite,
  },
});

export default PillStatsCheckin;

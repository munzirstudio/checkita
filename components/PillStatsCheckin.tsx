import React, { useMemo } from "react";
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
  checkIn?: string;

  /** Style props */
  iconBorderRadius?: number;
  iconBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PillStatsCheckin = ({
  checkIn,
  iconBorderRadius,
  iconBackgroundColor,
}: PillStatsCheckinType) => {
  const iconStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", iconBorderRadius),
      ...getStyleValue("backgroundColor", iconBackgroundColor),
    };
  }, [iconBorderRadius, iconBackgroundColor]);

  return (
    <View style={[styles.pillStatsCheckin, styles.iconFlexBox]}>
      <View style={[styles.icon, styles.iconFlexBox, iconStyle]} />
      <Text style={styles.textTypo}>{checkIn}</Text>
      <Text style={[styles.text, styles.textTypo]}>0</Text>
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
    backgroundColor: Color.colorRoyalblue,
    width: 10,
    height: 10,
  },
  text: {
    width: 20,
  },
  pillStatsCheckin: {
    flex: 1,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    gap: Gap.gap_sm,
  },
});

export default PillStatsCheckin;

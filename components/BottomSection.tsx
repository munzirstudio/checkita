import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Check from "../assets/check.svg";
import Morehorizontal from "../assets/morehorizontal.svg";
import Check1 from "../assets/check1.svg";
import Alarmclock1 from "../assets/alarmclock1.svg";
import {
  Color,
  StyleVariable,
  Border,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../GlobalStyles";

const BottomSection = () => {
  return (
    <View style={styles.bottomSection}>
      <View style={[styles.actionCard, styles.menuBarFlexBox1]}>
        <View style={styles.selectedDateLabel}>
          <Text style={styles.dateLabel}>Today, 22 Mar 2025</Text>
        </View>
        <View style={[styles.content, styles.buttonFlexBox2]}>
          <View style={styles.buttonFlexBox2}>
            <View style={[styles.buttonLarge, styles.buttonFlexBox1]}>
              <Text style={[styles.placeholder, styles.placeholderTypo]}>
                Check in
              </Text>
            </View>
          </View>
          <View style={[styles.secondaryActions, styles.menuBarFlexBox]}>
            <View style={styles.buttonFlexBox}>
              <View style={[styles.buttonText, styles.buttonFlexBox]}>
                <Image
                  style={[styles.trash2Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/trash2.png")}
                />
                <Text style={[styles.placeholder1, styles.placeholderTypo]}>
                  Clear
                </Text>
              </View>
            </View>
            <View style={[styles.buttonSchedule, styles.buttonFlexBox]}>
              <View style={[styles.buttonText, styles.buttonFlexBox]}>
                <Check
                  style={[styles.checkIcon, styles.iconLayout]}
                  width={16}
                  height={16}
                />
                <Morehorizontal
                  style={[styles.checkIcon, styles.iconLayout]}
                  width={16}
                  height={16}
                />
                <Image
                  style={styles.alarmClockIcon}
                  contentFit="cover"
                  source={require("../assets/alarmclock.png")}
                />
                <Text style={[styles.placeholder2, styles.placeholderTypo]}>
                  Schedule
                </Text>
              </View>
            </View>
            <View style={[styles.buttonSchedule, styles.buttonFlexBox]}>
              <View style={[styles.buttonText, styles.buttonFlexBox]}>
                <Check1
                  style={[styles.checkIcon, styles.iconLayout]}
                  width={16}
                  height={16}
                />
                <Alarmclock1
                  style={[styles.checkIcon, styles.iconLayout]}
                  width={16}
                  height={16}
                />
                <Image
                  style={[styles.trash2Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/morehorizontal-1.png")}
                />
                <Text style={[styles.placeholder2, styles.placeholderTypo]}>
                  More
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.menuBar, styles.menuBarFlexBox]}>
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
        <Image
          style={styles.trendingUpIcon}
          contentFit="cover"
          source={require("../assets/trendingup.png")}
        />
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/settings.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuBarFlexBox1: {
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  buttonFlexBox2: {
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttonFlexBox1: {
    paddingHorizontal: StyleVariable.componentsButtonSpacingXLG,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderTypo: {
    fontSize: FontSize.inputMediumSemiBold_size,
    textAlign: "center",
    letterSpacing: 0.1,
  },
  menuBarFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    flex: 1,
    flexDirection: "row",
  },
  iconLayout: {
    width: 16,
    height: 16,
  },
  dateLabel: {
    position: "absolute",
    top: "0%",
    left: "29.85%",
    fontSize: FontSize.sMMedium_size,
    lineHeight: 20,
    color: Color.colorGray,
    textAlign: "center",
    letterSpacing: 0.1,
    fontFamily: FontFamily.sMMedium,
    fontWeight: "500",
  },
  selectedDateLabel: {
    height: 20,
    alignSelf: "stretch",
  },
  placeholder: {
    fontWeight: "600",
    fontFamily: FontFamily.inputMediumSemiBold,
    color: Color.colorWhite,
  },
  buttonLarge: {
    backgroundColor: Color.colorRoyalblue,
    height: 62,
    paddingVertical: StyleVariable.componentsButtonSpacingYLG,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  trash2Icon: {
    height: 16,
  },
  placeholder1: {
    color: Color.colorCrimson,
    fontFamily: FontFamily.sMMedium,
    fontWeight: "500",
    fontSize: FontSize.inputMediumSemiBold_size,
  },
  buttonText: {
    paddingVertical: Padding.p_xs,
    gap: Gap.gap_sm,
    paddingHorizontal: StyleVariable.componentsButtonSpacingXLG,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    display: "none",
    overflow: "hidden",
  },
  alarmClockIcon: {
    width: 17,
    height: 16,
  },
  placeholder2: {
    color: Color.colorRoyalblue,
    fontFamily: FontFamily.sMMedium,
    fontWeight: "500",
    fontSize: FontSize.inputMediumSemiBold_size,
  },
  buttonSchedule: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  secondaryActions: {
    gap: Gap.gap_lg,
  },
  content: {
    gap: Gap.gap_xl,
  },
  actionCard: {
    padding: Padding.p_xl,
    gap: Gap.gap_lg,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  homeIcon: {
    width: 24,
    height: 24,
  },
  trendingUpIcon: {
    width: 25,
    height: 24,
  },
  menuBar: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 1,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_45xl,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_21xl,
    gap: Gap.gap_0,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  bottomSection: {
    alignSelf: "stretch",
  },
});

export default BottomSection;

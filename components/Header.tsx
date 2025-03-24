import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Padding, FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={[styles.monthHeader, styles.monthHeaderFlexBox]}>
        <View style={[styles.chevronLeftWrapper, styles.monthHeaderFlexBox]}>
          <Image
            style={styles.chevronLeftIcon}
            contentFit="cover"
            source={require("../assets/chevronleft.png")}
          />
        </View>
        <Text style={styles.march2025}>March, 2025</Text>
        <View style={[styles.chevronLeftWrapper, styles.monthHeaderFlexBox]}>
          <Image
            style={styles.chevronLeftIcon}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  monthHeaderFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  chevronLeftIcon: {
    width: 24,
    height: 24,
  },
  chevronLeftWrapper: {
    padding: Padding.p_5xs,
  },
  march2025: {
    fontSize: FontSize.size_base,
    letterSpacing: 0.1,
    fontWeight: "500",
    fontFamily: FontFamily.sMMedium,
    color: Color.colorGray,
    textAlign: "left",
  },
  monthHeader: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    gap: Gap.gap_0,
    alignSelf: "stretch",
  },
  header: {
    paddingTop: Padding.p_33xl,
    alignSelf: "stretch",
  },
});

export default Header;

import * as React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Body from "../components/Body";
import BottomSection from "../components/BottomSection";
import { Color, Gap } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.topSection}>
        <Header />
        <Body />
      </View>
      <BottomSection />
    </View>
  );
};

const styles = StyleSheet.create({
  topSection: {
    alignSelf: "stretch",
    gap: 12,
  },
  home: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    justifyContent: "space-between",
    gap: Gap.gap_0,
  },
});

export default Home;

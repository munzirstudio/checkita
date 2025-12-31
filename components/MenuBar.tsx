import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
} from "../GlobalStyles";

interface MenuBarProps {
  onNavigate: (screen: "home" | "leaderboard" | "settings") => void;
  currentScreen: "home" | "leaderboard" | "settings";
}

const MenuBar: React.FC<MenuBarProps> = ({ onNavigate, currentScreen }) => {
  return (
    <View style={[styles.menuBar]}>
      <TouchableOpacity
        style={styles.menuItemLeft}
        onPress={() => onNavigate("home")}
      >
        <Image
          style={[
            styles.homeIcon,
            currentScreen === "home" && styles.activeIcon,
          ]}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItemCenter}
        onPress={() => onNavigate("leaderboard")}
      >
        <Image
          style={[
            styles.trendingUpIcon,
            currentScreen === "leaderboard" && styles.activeIcon,
          ]}
          contentFit="cover"
          source={require("../assets/trendingup.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItemRight}
        onPress={() => onNavigate("settings")}
      >
        <Image
          style={[
            styles.homeIcon,
            currentScreen === "settings" && styles.activeIcon,
          ]}
          contentFit="cover"
          source={require("../assets/settings.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    width: 24,
    height: 24,
  },
  trendingUpIcon: {
    width: 25,
    height: 24,
  },
  activeIcon: {
    tintColor: Color.colorRoyalblue,
  },
  menuItem: {
    alignItems: "center",
  },
  menuItemLeft: {
    alignItems: "center",
    paddingLeft: 64,
  },
  menuItemRight: {
    alignItems: "center",
    paddingRight: 64,
  },
  menuItemCenter: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  menuBar: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 1,
    flexDirection: "row",
    paddingTop: 24,
    paddingBottom: 40,
    height: 88,
    backgroundColor: Color.colorWhite,
    justifyContent: "space-between",
  },
});

export default MenuBar; 
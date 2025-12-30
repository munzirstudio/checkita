import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
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
        <Feather 
          name="home" 
          size={24} 
          color={currentScreen === "home" ? Color.colorRoyalblue : Color.colorSlategray} 
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItemCenter}
        onPress={() => onNavigate("leaderboard")}
      >
        <Feather 
          name="trending-up" 
          size={24} 
          color={currentScreen === "leaderboard" ? Color.colorRoyalblue : Color.colorSlategray} 
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItemRight}
        onPress={() => onNavigate("settings")}
      >
        <Feather 
          name="settings" 
          size={24} 
          color={currentScreen === "settings" ? Color.colorRoyalblue : Color.colorSlategray} 
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
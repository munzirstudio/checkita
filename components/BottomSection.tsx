import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Color,
  StyleVariable,
  Border,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../GlobalStyles";
import { format, isToday } from "date-fns";

export type DateStatus = "active" | "inactive" | "checkin" | "scheduled" | "disabled";

interface BottomSectionProps {
  selectedDate: Date | null;
  dateStatus: DateStatus;
  onCheckIn: () => void;
  onSchedule: () => void;
  onClear: () => void;
  onNavigate: (screen: "home" | "leaderboard" | "settings") => void;
  currentScreen: "home" | "leaderboard" | "settings";
}

const BottomSection: React.FC<BottomSectionProps> = ({
  selectedDate,
  dateStatus,
  onCheckIn,
  onSchedule,
  onClear,
  onNavigate,
  currentScreen,
}) => {
  const showActionCard = selectedDate !== null && dateStatus !== "disabled";

  const getDateLabel = () => {
    if (!selectedDate) return "";
    return isToday(selectedDate)
      ? `Today, ${format(selectedDate, "d MMM, yyyy")}`
      : format(selectedDate, "EEE, d MMM, yyyy");
  };

  const renderActionCard = () => {
    if (!selectedDate) return null;

    const isActiveDate = dateStatus === "active";
    const isCheckinDate = dateStatus === "checkin";
    const isScheduledDate = dateStatus === "scheduled";
    const isCurrentDay = isToday(selectedDate);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const isFutureDate = selectedDate > now;

    return (
      <View style={[styles.actionCard, styles.menuBarFlexBox1]}>
        <View style={styles.selectedDateLabel}>
          <Text style={styles.dateLabel}>{getDateLabel()}</Text>
        </View>
        <View style={[styles.content, styles.buttonFlexBox2]}>
          {isCurrentDay && !isCheckinDate && (
            <View style={styles.buttonFlexBox2}>
              <TouchableOpacity
                style={[styles.buttonLarge, styles.buttonFlexBox1]}
                onPress={onCheckIn}
              >
                <Text style={[styles.placeholder, styles.placeholderTypo]}>
                  Check in
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={[styles.secondaryActions, styles.menuBarFlexBox]}>
            {(isCheckinDate || isScheduledDate) && (
              <TouchableOpacity
                style={[styles.buttonText, styles.buttonFlexBox]}
                onPress={onClear}
              >
                <Feather name="trash-2" size={16} color={Color.colorCrimson} />
                <Text style={[styles.placeholder1, styles.placeholderTypo]}>
                  Clear {isCheckinDate ? "check-in" : "schedule"}
                </Text>
              </TouchableOpacity>
            )}
            {(isFutureDate || (isCurrentDay && !isCheckinDate)) && !isScheduledDate && (
              <TouchableOpacity
                style={[styles.buttonSchedule, styles.buttonFlexBox]}
                onPress={onSchedule}
              >
                <View style={[styles.buttonText, styles.buttonFlexBox]}>
                  <Feather name="clock" size={16} color={Color.colorRoyalblue} />
                  <Text style={[styles.placeholder2, styles.placeholderTypo]}>
                    Schedule
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.bottomSection}>
      {renderActionCard()}
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
    fontSize: FontSize.sMMedium_size,
    lineHeight: 20,
    color: Color.colorGray,
    textAlign: "center",
    letterSpacing: 0.1,
    fontFamily: FontFamily.sMMedium,
    fontWeight: "500",
    width: "100%",
    position: "relative",
    left: 0,
  },
  selectedDateLabel: {
    height: 20,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  placeholder: {
    fontWeight: "600",
    fontFamily: FontFamily.inputMediumSemiBold,
    color: Color.colorWhite,
  },
  buttonLarge: {
    backgroundColor: Color.colorRoyalblue,
    height: 62,
    paddingVertical: 22,
    flexDirection: "row",
    alignSelf: "stretch",
    paddingHorizontal: StyleVariable.componentsButtonSpacingXLG,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
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
    paddingVertical: 12,
    gap: Gap.gap_sm,
    paddingHorizontal: StyleVariable.componentsButtonSpacingXLG,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
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
    flexDirection: "row",
    alignSelf: "stretch",
    gap: Gap.gap_lg,
  },
  content: {
    gap: 16,
  },
  actionCard: {
    padding: Padding.p_xl,
    justifyContent: "center",
    alignSelf: "stretch",
    paddingBottom: 40,
    paddingTop: 24,
  },
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
    display: 'none',
  },
  bottomSection: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    justifyContent: 'flex-end',
  },
});

export default BottomSection;

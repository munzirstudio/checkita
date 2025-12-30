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
import { DateStatus } from "./BottomSection";

interface ActionCardProps {
  selectedDate: Date | null;
  dateStatus: DateStatus;
  onCheckIn: () => void;
  onSchedule: () => void;
  onClear: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  selectedDate,
  dateStatus,
  onCheckIn,
  onSchedule,
  onClear,
}) => {
  if (!selectedDate || dateStatus === "disabled") return null;

  const isActiveDate = dateStatus === "active";
  const isCheckinDate = dateStatus === "checkin";
  const isScheduledDate = dateStatus === "scheduled";
  const isCurrentDay = isToday(selectedDate);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const isFutureDate = selectedDate > now;

  const getDateLabel = () => {
    return isToday(selectedDate)
      ? `Today, ${format(selectedDate, "d MMM, yyyy")}`
      : format(selectedDate, "EEE, d MMM, yyyy");
  };

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
    gap: Gap.gap_lg + Gap.gap_xs,
  },
  actionCard: {
    paddingTop: Padding.p_xl,
    paddingHorizontal: Padding.p_xl,
    paddingBottom: Padding.p_5xl + Padding.p_5xl - Padding.p_5xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default ActionCard; 
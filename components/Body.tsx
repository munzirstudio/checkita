import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PillStatsCheckin from "./PillStatsCheckin";
import {
  Gap,
  StyleVariable,
  FontFamily,
  FontSize,
  Padding,
  Color,
  Border,
} from "../GlobalStyles";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay, addDays, subDays } from "date-fns";
import { DateStatus } from "./BottomSection";
import { useTheme } from "../hooks/useTheme";

interface BodyProps {
  currentDate: Date;
  selectedDate: Date | null;
  checkinDates: Date[];
  scheduledDates: Date[];
  onDateSelect: (date: Date) => void;
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  statsBarFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  statsBar: {
    gap: 12,
    marginBottom: 32,
  },
  pillContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  pillContainerCenter: {
    alignSelf: 'center',
    flex: undefined,
  },
  calendar: {
    gap: 3,
  },
  weekFlexBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 8,
    marginBottom: 3,
  },
  dateLayout: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  dateTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sMMedium,
    fontWeight: "500",
    fontSize: FontSize.sMMedium_size,
  },
  week: {
    fontSize: 12,
    lineHeight: 16,
  },
  datepickerWeekDate: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  dateNumber: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 38,
    height: 38,
    borderRadius: Border.dateBorderRadius,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    overflow: "hidden",
  },
  date: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: FontFamily.sMMedium,
    fontWeight: "500",
  },
  dateDisabled: {
    backgroundColor: "transparent",
  },
  dateInactive: {
    backgroundColor: "transparent",
  },
  dateActive: {
    backgroundColor: "transparent",
  },
  dateCheckin: {
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.dateBorderRadius,
  },
  dateScheduled: {
    backgroundColor: Color.colorAliceblue,
    borderWidth: 0,
    borderRadius: Border.dateBorderRadius,
  },
  dateSelectedCheckin: {
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.dateBorderRadius,
  },
  dateSelectedScheduled: {
    backgroundColor: Color.colorAliceblue,
    borderWidth: 1,
    borderColor: Color.colorRoyalblue,
    borderRadius: Border.dateBorderRadius,
  },
  dateSelectedInactive: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Color.colorRoyalblue,
    borderRadius: Border.dateBorderRadius,
  },
  dateSelectedActive: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Color.colorRoyalblue,
    borderRadius: Border.dateBorderRadius,
  },
  dateTextDisabled: {
    color: Color.colorGainsboro_100,
  },
  dateTextInactive: {
    color: "#A5A9AF",
  },
  dateTextActive: {
    color: Color.colorBlack,
  },
  dateTextCheckin: {
    color: Color.colorWhite,
  },
  dateTextScheduled: {
    color: Color.colorBlack,
  },
  weekNames: {
    flexDirection: "row",
    alignSelf: "stretch",
  }
});

const Body: React.FC<BodyProps> = ({
  currentDate,
  selectedDate,
  checkinDates,
  scheduledDates,
  onDateSelect,
}) => {
  const { colors } = useTheme();
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  // Get counts for current month only
  const currentMonthCheckins = checkinDates.filter(date => isSameMonth(date, currentDate));
  const currentMonthSchedules = scheduledDates.filter(date => isSameMonth(date, currentDate));

  // Show schedule pill for current month and future months
  const showSchedulePill = () => {
    const today = new Date();
    const firstOfDisplayedMonth = startOfMonth(currentDate);
    const firstOfCurrentMonth = startOfMonth(today);
    return firstOfDisplayedMonth >= firstOfCurrentMonth;
  };

  // Function to determine if the displayed month is before March 2025
  const isBeforeMarch2025 = () => {
    const march2025 = new Date(2025, 2, 1); // March is 2 (0-based)
    return currentDate < march2025;
  };

  const getDateStatus = (date: Date): DateStatus => {
    // If not in current month, always return disabled
    if (!isSameMonth(date, currentDate)) return "disabled";

    // First check for check-in and scheduled states as they take precedence
    if (checkinDates.some(d => isSameDay(d, date))) return "checkin";
    if (scheduledDates.some(d => isSameDay(d, date))) return "scheduled";
    
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const isUpcoming = date >= now;

    return isUpcoming ? "active" : "inactive";
  };

  const getDateStyle = (date: Date) => {
    const status = getDateStatus(date);
    const isSelected = selectedDate && isSameDay(date, selectedDate);

    const baseStyle = [styles.icon];
    
    switch (status) {
      case "disabled":
        return [baseStyle, styles.dateDisabled];
      case "checkin":
        return [baseStyle, isSelected ? styles.dateSelectedCheckin : styles.dateCheckin, { backgroundColor: colors.colorRoyalblue }];
      case "scheduled":
        return [baseStyle, isSelected ? styles.dateSelectedScheduled : styles.dateScheduled, { backgroundColor: colors.colorAliceblue, borderColor: isSelected ? colors.colorRoyalblue : undefined, borderWidth: isSelected ? 1 : 0 }];
      case "inactive":
        return [baseStyle, styles.dateInactive, isSelected && { borderColor: colors.colorRoyalblue, borderWidth: 1, borderRadius: Border.dateBorderRadius }];
      case "active":
        return [baseStyle, styles.dateActive, isSelected && { borderColor: colors.colorRoyalblue, borderWidth: 1, borderRadius: Border.dateBorderRadius }];
      default:
        return [baseStyle, styles.dateActive, isSelected && { borderColor: colors.colorRoyalblue, borderWidth: 1, borderRadius: Border.dateBorderRadius }];
    }
  };

  const getDateTextStyle = (date: Date) => {
    const status = getDateStatus(date);
    
    switch (status) {
      case "disabled":
        return [styles.date, { color: colors.colorGainsboro_100 }];
      case "inactive":
        return [styles.date, { color: colors.colorDarkgray }];
      case "active":
        return [styles.date, { color: colors.colorBlack }];
      case "checkin":
        return [styles.date, { color: colors.colorWhite }];
      case "scheduled":
        return [styles.date, { color: colors.colorBlack }];
      default:
        return [styles.date, { color: colors.colorBlack }];
    }
  };

  const renderCalendarDays = () => {
    const weeks: Date[][] = [];
    let currentWeek: Date[] = [];

    // Add days from previous month
    const firstDayOfMonth = monthStart.getDay();
    for (let i = 0; i < firstDayOfMonth; i++) {
      currentWeek.push(subDays(monthStart, firstDayOfMonth - i));
    }

    // Add days of current month
    days.forEach((day) => {
      if (currentWeek.length === 7) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
      currentWeek.push(day);
    });

    // Add days from next month
    if (currentWeek.length > 0) {
      const daysToAdd = 7 - currentWeek.length;
      for (let i = 0; i < daysToAdd; i++) {
        currentWeek.push(addDays(monthEnd, i + 1));
      }
      weeks.push(currentWeek);
    }

    return weeks.map((week, weekIndex) => (
      <View key={weekIndex} style={styles.weekFlexBox}>
        {week.map((date, dayIndex) => {
          const dateStatus = getDateStatus(date);
          const now = new Date();
          now.setHours(0, 0, 0, 0);
          
          // Only disable dates from previous/next months
          const isDisabled = dateStatus === "disabled";
          const isSelected = selectedDate && isSameDay(date, selectedDate);
          
          return (
            <TouchableOpacity
              key={dayIndex}
              style={styles.dateNumber}
              onPress={() => !isDisabled && onDateSelect(date)}
              disabled={isDisabled}
            >
              <View style={getDateStyle(date)}>
                <Text style={getDateTextStyle(date)}>
                  {format(date, "d")}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    ));
  };

  return (
    <View style={[styles.body, { backgroundColor: colors.colorWhite }]}>
      <View style={[styles.statsBar, styles.statsBarFlexBox]}>
        <View style={styles.pillContainerCenter}>
          <PillStatsCheckin
            label={currentMonthCheckins.length > 1 ? "Check-ins" : "Check-in"}
            count={currentMonthCheckins.length}
            color={colors.colorRoyalblue}
          />
        </View>
      </View>
      <View style={styles.calendar}>
        <View style={styles.weekFlexBox}>
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
            <View key={index} style={styles.datepickerWeekDate}>
              <Text style={[styles.week, styles.dateTypo, { color: colors.colorSlategray }]}>{day}</Text>
            </View>
          ))}
        </View>
        {renderCalendarDays()}
      </View>
    </View>
  );
};

export default Body;

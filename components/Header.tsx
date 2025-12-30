import * as React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Padding, FontSize, FontFamily, Color, Gap } from "../GlobalStyles";
import { format, addMonths, subMonths } from "date-fns";

interface HeaderProps {
  currentDate: Date;
  onMonthChange: (date: Date) => void;
  title?: string;
  showChevrons?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  currentDate,
  onMonthChange,
  title,
  showChevrons = true,
}) => {
  const handlePreviousMonth = () => {
    onMonthChange(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    onMonthChange(addMonths(currentDate, 1));
  };

  const displayTitle = title || format(currentDate, "MMMM, yyyy");

  return (
    <View style={styles.header}>
      <View style={[styles.monthHeader, styles.monthHeaderFlexBox]}>
        {showChevrons && (
          <TouchableOpacity
            style={[styles.chevronLeftWrapper, styles.monthHeaderFlexBox]}
            onPress={handlePreviousMonth}
          >
            <Feather name="chevron-left" size={24} color={Color.colorGray} />
          </TouchableOpacity>
        )}
        <Text style={styles.march2025}>{displayTitle}</Text>
        {showChevrons && (
          <TouchableOpacity
            style={[styles.chevronLeftWrapper, styles.monthHeaderFlexBox]}
            onPress={handleNextMonth}
          >
            <Feather name="chevron-right" size={24} color={Color.colorGray} />
          </TouchableOpacity>
        )}
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

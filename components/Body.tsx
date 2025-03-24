import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
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

const Body = () => {
  return (
    <View style={styles.body}>
      <View style={[styles.statsBar, styles.statsBarFlexBox]}>
        <PillStatsCheckin checkIn="Check-in" />
        <PillStatsCheckin
          checkIn="Schedule"
          iconBorderRadius={999}
          iconBackgroundColor="#eff6ff"
        />
      </View>
      <View style={[styles.calendar, styles.statsBarFlexBox]}>
        <View style={[styles.weekNames, styles.weekFlexBox]}>
          <View style={[styles.datepickerWeekDate, styles.dateLayout]}>
            <Text style={[styles.week, styles.dateTypo]}>Su</Text>
          </View>
          <View style={[styles.datepickerWeekDate, styles.dateLayout]}>
            <Text style={[styles.week, styles.dateTypo]}>Mo</Text>
          </View>
          <View style={[styles.datepickerWeekDate, styles.dateLayout]}>
            <Text style={[styles.week, styles.dateTypo]}>Tu</Text>
          </View>
          <View style={[styles.datepickerWeekDate, styles.dateLayout]}>
            <Text style={[styles.week, styles.dateTypo]}>We</Text>
          </View>
          <View style={[styles.datepickerWeekDate, styles.dateLayout]}>
            <Text style={[styles.week, styles.dateTypo]}>Th</Text>
          </View>
          <View style={[styles.datepickerWeekDate, styles.dateLayout]}>
            <Text style={[styles.week, styles.dateTypo]}>Fr</Text>
          </View>
          <View style={[styles.datepickerWeekDate, styles.dateLayout]}>
            <Text style={[styles.week, styles.dateTypo]}>Sa</Text>
          </View>
        </View>
        <View style={styles.weekFlexBox}>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date, styles.dateTypo]}>23</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date, styles.dateTypo]}>24</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date, styles.dateTypo]}>25</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date, styles.dateTypo]}>26</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date, styles.dateTypo]}>27</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date, styles.dateTypo]}>28</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>1</Text>
            </View>
          </View>
        </View>
        <View style={styles.weekFlexBox}>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>2</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>3</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>4</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>5</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>6</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>7</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>8</Text>
            </View>
          </View>
        </View>
        <View style={styles.weekFlexBox}>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>9</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>10</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>11</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>12</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>13</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>14</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>15</Text>
            </View>
          </View>
        </View>
        <View style={styles.weekFlexBox}>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>16</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>17</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>18</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>19</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>20</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon26, styles.iconLayout]}>
              <Text style={[styles.date6, styles.dateTypo]}>21</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon26, styles.iconLayout]}>
              <Text style={[styles.date27, styles.dateTypo]}>22</Text>
            </View>
          </View>
        </View>
        <View style={styles.weekFlexBox}>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon28, styles.iconLayout]}>
              <Text style={[styles.date27, styles.dateTypo]}>23</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon29, styles.iconLayout]}>
              <Text style={[styles.date29, styles.dateTypo]}>24</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date27, styles.dateTypo]}>25</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date27, styles.dateTypo]}>26</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date27, styles.dateTypo]}>27</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date27, styles.dateTypo]}>28</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date27, styles.dateTypo]}>29</Text>
            </View>
          </View>
        </View>
        <View style={styles.weekFlexBox}>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date27, styles.dateTypo]}>30</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date27, styles.dateTypo]}>31</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date, styles.dateTypo]}>1</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date, styles.dateTypo]}>2</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date, styles.dateTypo]}>3</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date, styles.dateTypo]}>4</Text>
            </View>
          </View>
          <View style={[styles.dateNumber, styles.dateLayout]}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Text style={[styles.date, styles.dateTypo]}>5</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsBarFlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  weekFlexBox: {
    gap: Gap.gap_0,
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius:
      StyleVariable.advancedFormsDatepickerWeekNamesInlineListBorderRadius,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  dateLayout: {
    width: 42,
    justifyContent: "center",
  },
  dateTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sMMedium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontSize: FontSize.sMMedium_size,
  },
  iconLayout: {
    height: 38,
    width: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  statsBar: {
    paddingHorizontal: Padding.p_xl,
    gap: Gap.gap_md,
    flexDirection: "row",
  },
  week: {
    color: Color.colorSlategray,
  },
  datepickerWeekDate: {
    flexDirection: "row",
  },
  weekNames: {
    paddingHorizontal: 0,
    paddingVertical:
      StyleVariable.advancedFormsDatepickerWeekNamesSpacingBottom,
  },
  date: {
    color: Color.colorGainsboro_200,
  },
  icon: {
    borderRadius: Border.br_980xl,
    height: 38,
    width: 38,
  },
  dateNumber: {
    height: 42,
    alignItems: "center",
  },
  date6: {
    color: Color.colorDarkgray,
  },
  icon26: {
    borderRadius: Border.br_678xl_1,
    borderStyle: "solid",
    borderColor: Color.colorRoyalblue,
    borderWidth: 1,
  },
  date27: {
    color: Color.colorGray,
  },
  icon28: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_980xl,
    height: 38,
    width: 38,
  },
  date29: {
    color: Color.colorWhite,
  },
  icon29: {
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_980xl,
    height: 38,
    width: 38,
  },
  calendar: {
    paddingHorizontal: Padding.p_mini,
    gap: Gap.gap_xs,
  },
  body: {
    gap: Gap.gap_lg,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default Body;

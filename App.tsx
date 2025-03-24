import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { format, startOfDay, isSameDay } from "date-fns";
import Header from "./components/Header";
import Body from "./components/Body";
import BottomSection from "./components/BottomSection";
import { Color, FontFamily, FontSize } from "./GlobalStyles";

const Tab = createBottomTabNavigator();

type Screen = "home" | "leaderboard" | "settings";

const HomeScreen = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [checkinDates, setCheckinDates] = React.useState<Date[]>([]);
  const [scheduledDates, setScheduledDates] = React.useState<Date[]>([]);

  React.useEffect(() => {
    // Set initial selected date to today
    setSelectedDate(startOfDay(new Date()));
  }, []);

  const handleMonthChange = (date: Date) => {
    setCurrentDate(date);
    // Auto-select today's date if we're viewing the current month
    const today = startOfDay(new Date());
    if (format(date, 'yyyy-MM') === format(today, 'yyyy-MM')) {
      setSelectedDate(today);
    } else {
      setSelectedDate(null);
    }
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(startOfDay(date));
  };

  const handleCheckIn = () => {
    if (!selectedDate) return;
    setCheckinDates((prev: Date[]) => [...prev, selectedDate]);
    setScheduledDates((prev: Date[]) =>
      prev.filter((date: Date) => !isSameDay(date, selectedDate))
    );
  };

  const handleSchedule = () => {
    if (!selectedDate) return;
    setScheduledDates((prev: Date[]) => [...prev, selectedDate]);
  };

  const handleClear = () => {
    if (!selectedDate) return;
    setCheckinDates((prev: Date[]) =>
      prev.filter((date: Date) => !isSameDay(date, selectedDate))
    );
    setScheduledDates((prev: Date[]) =>
      prev.filter((date: Date) => !isSameDay(date, selectedDate))
    );
  };

  return (
    <View style={styles.container}>
      <Header
        currentDate={currentDate}
        onMonthChange={handleMonthChange}
      />
      <Body
        currentDate={currentDate}
        selectedDate={selectedDate}
        checkinDates={checkinDates}
        scheduledDates={scheduledDates}
        onDateSelect={handleDateSelect}
      />
      <BottomSection
        selectedDate={selectedDate}
        dateStatus={
          !selectedDate
            ? "disabled"
            : checkinDates.some((date: Date) => isSameDay(date, selectedDate))
            ? "checkin"
            : scheduledDates.some((date: Date) => isSameDay(date, selectedDate))
            ? "scheduled"
            : selectedDate < startOfDay(new Date())
            ? "inactive"
            : "active"
        }
        onCheckIn={handleCheckIn}
        onSchedule={handleSchedule}
        onClear={handleClear}
        onNavigate={() => {}}
        currentScreen="home"
      />
    </View>
  );
};

const LeaderboardScreen = () => {
  const [currentDate] = React.useState(new Date());
  
  const handleMonthChange = (date: Date) => {
    // No-op since we don't need month navigation in leaderboard
  };

  return (
    <View style={styles.container}>
      <Header
        currentDate={currentDate}
        title="Leaderboard"
        showChevrons={false}
        onMonthChange={handleMonthChange}
      />
      <View style={styles.content}>
        <Text style={styles.comingSoon}>Coming soon</Text>
      </View>
    </View>
  );
};

const SettingsScreen = () => {
  const [currentDate] = React.useState(new Date());
  
  const handleMonthChange = (date: Date) => {
    // No-op since we don't need month navigation in settings
  };

  return (
    <View style={styles.container}>
      <Header
        currentDate={currentDate}
        title="Settings"
        showChevrons={false}
        onMonthChange={handleMonthChange}
      />
      <View style={styles.content}>
        <Text style={styles.comingSoon}>Coming soon</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  comingSoon: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sMMedium,
    color: Color.colorGray,
  },
});

export default App;

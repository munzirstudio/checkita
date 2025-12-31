import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { format, startOfDay, isSameDay, parseISO } from "date-fns";
import Header from "./components/Header";
import Body from "./components/Body";
import BottomSection from "./components/BottomSection";
import { Color, FontFamily, FontSize } from "./GlobalStyles";
import { dataService, DateStatus } from "./lib/dataService";

const Tab = createBottomTabNavigator();

type Screen = "home" | "leaderboard" | "settings";

const HomeScreen = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [checkinDates, setCheckinDates] = React.useState<Date[]>([]);
  const [scheduledDates, setScheduledDates] = React.useState<Date[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // Load saved data on mount
  React.useEffect(() => {
    const loadSavedData = async () => {
      try {
        setIsLoading(true);
        const allStatuses = await dataService.getAllStatuses();
        
        const checkins: Date[] = [];
        const scheduled: Date[] = [];
        
        allStatuses.forEach((status: DateStatus) => {
          const date = startOfDay(parseISO(status.date));
          if (status.status === 'checkin') {
            checkins.push(date);
          } else if (status.status === 'scheduled') {
            scheduled.push(date);
          }
        });
        
        setCheckinDates(checkins);
        setScheduledDates(scheduled);
      } catch (error) {
        console.error('Error loading saved data:', error);
      } finally {
        setIsLoading(false);
        // Set initial selected date to today
        setSelectedDate(startOfDay(new Date()));
      }
    };
    
    loadSavedData();
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

  const handleCheckIn = async () => {
    if (!selectedDate) return;
    
    const normalizedDate = startOfDay(selectedDate);
    
    // Update local state
    setCheckinDates((prev: Date[]) => {
      const exists = prev.some((date: Date) => isSameDay(date, normalizedDate));
      return exists ? prev : [...prev, normalizedDate];
    });
    setScheduledDates((prev: Date[]) =>
      prev.filter((date: Date) => !isSameDay(date, normalizedDate))
    );
    
    // Save to storage
    try {
      await dataService.saveStatus(normalizedDate, 'checkin');
    } catch (error) {
      console.error('Error saving check-in:', error);
    }
  };

  const handleSchedule = async () => {
    if (!selectedDate) return;
    
    const normalizedDate = startOfDay(selectedDate);
    
    // Update local state
    setScheduledDates((prev: Date[]) => {
      const exists = prev.some((date: Date) => isSameDay(date, normalizedDate));
      return exists ? prev : [...prev, normalizedDate];
    });
    
    // Save to storage
    try {
      await dataService.saveStatus(normalizedDate, 'scheduled');
    } catch (error) {
      console.error('Error saving schedule:', error);
    }
  };

  const handleClear = async () => {
    if (!selectedDate) return;
    
    const normalizedDate = startOfDay(selectedDate);
    
    // Update local state
    setCheckinDates((prev: Date[]) =>
      prev.filter((date: Date) => !isSameDay(date, normalizedDate))
    );
    setScheduledDates((prev: Date[]) =>
      prev.filter((date: Date) => !isSameDay(date, normalizedDate))
    );
    
    // Remove from storage
    try {
      await dataService.clearStatus(normalizedDate);
    } catch (error) {
      console.error('Error clearing status:', error);
    }
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

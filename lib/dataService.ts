import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

// Types
export interface DateStatus {
  id: string;
  date: string;
  status: 'checkin' | 'scheduled';
}

// Constants
const STORAGE_KEY = '@checkita_data';

// Helper functions
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Main service class
class DataService {
  private async getStoredData(): Promise<DateStatus[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('[Storage] Error getting data:', error);
      return [];
    }
  }

  private async saveData(data: DateStatus[]) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('[Storage] Error saving data:', error);
    }
  }

  async saveStatus(date: Date, status: 'checkin' | 'scheduled'): Promise<DateStatus> {
    console.log('[Save] Saving status:', { date, status });

    const dateStr = format(date, 'yyyy-MM-dd');
    const newStatus: DateStatus = {
      id: generateUUID(),
      date: dateStr,
      status,
    };

    const storedData = await this.getStoredData();
    const existingIndex = storedData.findIndex(
      item => item.date === dateStr
    );

    if (existingIndex >= 0) {
      storedData[existingIndex] = newStatus;
      console.log('[Save] Updated existing status');
    } else {
      storedData.push(newStatus);
      console.log('[Save] Added new status');
    }
    await this.saveData(storedData);

    return newStatus;
  }

  async clearStatus(date: Date): Promise<void> {
    const dateStr = format(date, 'yyyy-MM-dd');

    const storedData = await this.getStoredData();
    const filteredData = storedData.filter(
      item => item.date !== dateStr
    );
    await this.saveData(filteredData);
  }

  async getStatuses(month: Date): Promise<DateStatus[]> {
    const startDate = format(new Date(month.getFullYear(), month.getMonth(), 1), 'yyyy-MM-dd');
    const endDate = format(new Date(month.getFullYear(), month.getMonth() + 1, 0), 'yyyy-MM-dd');

    const storedData = await this.getStoredData();
    return storedData.filter(item => 
      item.date >= startDate && 
      item.date <= endDate
    );
  }
}

export const dataService = new DataService(); 
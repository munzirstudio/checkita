import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = 'https://imbrlckxcfwlaeujuvoo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltYnJsY2t4Y2Z3bGFldWp1dm9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MDYzMTIsImV4cCI6MjA1ODM4MjMxMn0.Sc0Lo_CAcAZkuktvshe6YaAcmkiTAro7JicvV8nbdhs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
}); 
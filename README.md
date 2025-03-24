# Checkita - Attendance Check-in App

A React Native mobile application for managing attendance check-ins and schedules.

## Features

- Calendar view with date selection
- Check-in functionality for today
- Schedule management for future dates
- Clear check-in and schedule status
- Monthly statistics tracking
- Offline support (coming soon)
- Supabase integration (coming soon)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd checkita
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
- iOS: Press `i` in the terminal or run `npm run ios`
- Android: Press `a` in the terminal or run `npm run android`
- Web: Press `w` in the terminal or run `npm run web`

## Project Structure

```
checkita/
├── assets/           # Static assets (images, icons)
├── components/       # Reusable UI components
│   ├── Body.tsx     # Calendar component
│   ├── Header.tsx   # Header component
│   └── BottomSection.tsx # Action card and navigation
├── screens/         # Screen components
├── App.tsx          # Main application component
└── GlobalStyles.ts  # Global styling constants
```

## Features in Detail

### Calendar View
- Shows current month with day and date
- Supports month navigation
- Different states for dates:
  - Active dates (today and future)
  - Inactive dates (past)
  - Check-in dates
  - Scheduled dates
  - Disabled dates (previous/next month)

### Check-in System
- Check-in for today
- Schedule for future dates
- Clear check-in and schedule status
- Monthly statistics tracking

### Navigation
- Home screen with calendar
- Leaderboard (coming soon)
- Settings (coming soon)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
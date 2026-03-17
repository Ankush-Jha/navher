import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'theme/app_theme.dart';
import 'screens/onboarding_screen.dart';
import 'screens/home_screen.dart';
import 'screens/pad_delivery_screen.dart';
import 'screens/washroom_details_screen.dart';
import 'screens/period_tracker_screen.dart';
import 'screens/rewards_screen.dart';
import 'screens/safe_spaces_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.dark,
    ),
  );
  runApp(const LooPadApp());
}

class LooPadApp extends StatelessWidget {
  const LooPadApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'LooPad',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      initialRoute: '/onboarding',
      routes: {
        '/onboarding': (context) => const OnboardingScreen(),
        '/home': (context) => const HomeScreen(),
        '/pad-delivery': (context) => const PadDeliveryScreen(),
        '/washroom-details': (context) => const WashroomDetailsScreen(),
        '/period-tracker': (context) => const PeriodTrackerScreen(),
        '/rewards': (context) => const RewardsScreen(),
        '/safe-spaces': (context) => const SafeSpacesScreen(),
      },
    );
  }
}

import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'firebase_options.dart';
import 'theme/app_theme.dart';
import 'screens/onboarding_screen.dart';
import 'screens/home_screen.dart';
import 'screens/pad_delivery_screen.dart';
import 'screens/washroom_details_screen.dart';
import 'screens/period_tracker_screen.dart';
import 'screens/rewards_screen.dart';
import 'screens/safe_spaces_screen.dart';
import 'screens/splash_screen.dart';
import 'screens/signup_screen.dart';
import 'screens/sos_screen.dart';
import 'screens/profile_screen.dart';
import 'screens/rate_review_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.dark,
    ),
  );
  runApp(const ProviderScope(child: NavHerApp()));
}

class NavHerApp extends StatelessWidget {
  const NavHerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'NavHer',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      initialRoute: '/splash',
      routes: {
        '/splash': (context) => const SplashScreen(),
        '/signup': (context) => const SignUpScreen(),
        '/onboarding': (context) => const OnboardingScreen(),
        '/home': (context) => const HomeScreen(),
        '/pad-delivery': (context) => const PadDeliveryScreen(),
        '/washroom-details': (context) => const WashroomDetailsScreen(),
        '/period-tracker': (context) => const PeriodTrackerScreen(),
        '/rewards': (context) => const RewardsScreen(),
        '/safe-spaces': (context) => const SafeSpacesScreen(),
        '/sos': (context) => const SOSScreen(),
        '/profile': (context) => const ProfileScreen(),
        '/rate-review': (context) => const RateReviewScreen(),
      },
    );
  }
}

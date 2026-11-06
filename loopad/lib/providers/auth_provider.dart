import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../services/auth_service.dart';
import '../models/user.dart';

// ── Auth service singleton ──────────────────────────────────────────────────────
final authServiceProvider = Provider<AuthService>((ref) => AuthService());

// ── Firebase auth state (raw) ───────────────────────────────────────────────────
final authStateProvider = StreamProvider<User?>(
  (ref) => ref.watch(authServiceProvider).authStateChanges,
);

// ── App user model ──────────────────────────────────────────────────────────────
// A convenience StateProvider that is populated after sign-up / log-in.
final appUserProvider = StateProvider<UserModel?>((ref) => null);

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import '../models/user.dart';

class AuthService {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  // ── Current auth user ──────────────────────────────────────────────────────
  User? get currentUser => _auth.currentUser;
  Stream<User?> get authStateChanges => _auth.authStateChanges();

  // ── Sign Up ─────────────────────────────────────────────────────────────────
  Future<UserModel> signUp({
    required String name,
    required String email,
    required String password,
  }) async {
    final cred = await _auth.createUserWithEmailAndPassword(
      email: email,
      password: password,
    );
    final user = UserModel(
      uid: cred.user!.uid,
      name: name,
      email: email,
      foxPoints: 0,
      createdAt: DateTime.now(),
    );
    await _db
        .collection('users')
        .doc(cred.user!.uid)
        .set(user.toFirestore());
    return user;
  }

  // ── Log In ──────────────────────────────────────────────────────────────────
  Future<UserModel> logIn({
    required String email,
    required String password,
  }) async {
    final cred = await _auth.signInWithEmailAndPassword(
      email: email,
      password: password,
    );
    final snap =
        await _db.collection('users').doc(cred.user!.uid).get();
    if (!snap.exists) throw Exception('User profile not found');
    return UserModel.fromFirestore(snap);
  }

  // ── Log Out ─────────────────────────────────────────────────────────────────
  Future<void> logOut() => _auth.signOut();
}

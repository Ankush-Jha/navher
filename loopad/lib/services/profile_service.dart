import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/user.dart';

class ProfileService {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  // ── Live profile stream ─────────────────────────────────────────────────────
  Stream<UserModel?> getProfileStream(String uid) {
    return _db.collection('users').doc(uid).snapshots().map(
          (snap) => snap.exists ? UserModel.fromFirestore(snap) : null,
        );
  }

  // ── Update display name ─────────────────────────────────────────────────────
  Future<void> updateName({required String uid, required String name}) async {
    await _db.collection('users').doc(uid).update({'name': name});
  }

  // ── Update avatar URL ────────────────────────────────────────────────────────
  Future<void> updateAvatar({
    required String uid,
    required String avatarUrl,
  }) async {
    await _db.collection('users').doc(uid).update({'avatarUrl': avatarUrl});
  }
}

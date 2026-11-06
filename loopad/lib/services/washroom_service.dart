import 'dart:math';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/washroom.dart';

class WashroomService {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  // ── Get washrooms sorted by distance (haversine) ────────────────────────────
  Future<List<Washroom>> getNearby({
    required double userLat,
    required double userLng,
    double radiusKm = 5.0,
  }) async {
    // Fetch all washrooms (small dataset for hackathon; use geo-queries for prod)
    final snap = await _db.collection('washrooms').get();
    final all = snap.docs.map((d) => Washroom.fromFirestore(d)).toList();

    // Filter by radius & sort by distance
    final nearby = all.where((w) {
      final dist = _haversineKm(userLat, userLng, w.lat, w.lng);
      return dist <= radiusKm;
    }).toList();

    nearby.sort((a, b) {
      final da = _haversineKm(userLat, userLng, a.lat, a.lng);
      final db = _haversineKm(userLat, userLng, b.lat, b.lng);
      return da.compareTo(db);
    });

    return nearby;
  }

  // ── Get live stream of a single washroom ───────────────────────────────────
  Stream<Washroom?> getDetailsStream(String washroomId) {
    return _db
        .collection('washrooms')
        .doc(washroomId)
        .snapshots()
        .map((snap) => snap.exists ? Washroom.fromFirestore(snap) : null);
  }

  // ── Report an issue ─────────────────────────────────────────────────────────
  Future<void> reportIssue({
    required String washroomId,
    required String issueType,
    String? description,
  }) async {
    await _db
        .collection('washrooms')
        .doc(washroomId)
        .collection('issues')
        .add({
      'issueType': issueType,
      'description': description ?? '',
      'reportedAt': FieldValue.serverTimestamp(),
    });
  }

  // ── Haversine distance in km ─────────────────────────────────────────────────
  double _haversineKm(double lat1, double lng1, double lat2, double lng2) {
    const r = 6371.0;
    final dLat = _rad(lat2 - lat1);
    final dLng = _rad(lng2 - lng1);
    final a = sin(dLat / 2) * sin(dLat / 2) +
        cos(_rad(lat1)) * cos(_rad(lat2)) * sin(dLng / 2) * sin(dLng / 2);
    return r * 2 * atan2(sqrt(a), sqrt(1 - a));
  }

  double _rad(double deg) => deg * pi / 180;
}

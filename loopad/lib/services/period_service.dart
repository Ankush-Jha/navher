import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/period_data.dart';

class PeriodService {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  // ── Get most recent cycle (or null) as a stream ─────────────────────────────
  Stream<PeriodData?> getCurrentStream(String userId) {
    return _db
        .collection('periods')
        .where('userId', isEqualTo: userId)
        .orderBy('cycleStart', descending: true)
        .limit(1)
        .snapshots()
        .map((snap) =>
            snap.docs.isEmpty ? null : PeriodData.fromFirestore(snap.docs.first));
  }

  // ── Start a new cycle ───────────────────────────────────────────────────────
  Future<void> startCycle({
    required String userId,
    required DateTime startDate,
    int cycleLengthDays = 28,
  }) async {
    await _db.collection('periods').add({
      'userId': userId,
      'cycleStart': Timestamp.fromDate(startDate),
      'cycleEnd': null,
      'cycleLengthDays': cycleLengthDays,
      'symptoms': [],
    });
  }

  // ── Log a symptom on the current cycle ─────────────────────────────────────
  Future<void> logSymptom({
    required String periodDocId,
    required String symptomName,
  }) async {
    final symptom = Symptom(name: symptomName, loggedAt: DateTime.now());
    await _db.collection('periods').doc(periodDocId).update({
      'symptoms': FieldValue.arrayUnion([symptom.toMap()]),
    });
  }
}

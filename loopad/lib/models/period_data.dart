import 'package:cloud_firestore/cloud_firestore.dart';

class Symptom {
  final String name;
  final DateTime loggedAt;

  const Symptom({required this.name, required this.loggedAt});

  factory Symptom.fromMap(Map<String, dynamic> map) => Symptom(
        name: map['name'] as String? ?? '',
        loggedAt:
            (map['loggedAt'] as Timestamp?)?.toDate() ?? DateTime.now(),
      );

  Map<String, dynamic> toMap() => {
        'name': name,
        'loggedAt': Timestamp.fromDate(loggedAt),
      };
}

class PeriodData {
  final String id;
  final String userId;
  final DateTime cycleStart;
  final DateTime? cycleEnd;
  final int cycleLengthDays;
  final List<Symptom> symptoms;

  const PeriodData({
    required this.id,
    required this.userId,
    required this.cycleStart,
    this.cycleEnd,
    this.cycleLengthDays = 28,
    this.symptoms = const [],
  });

  factory PeriodData.fromFirestore(DocumentSnapshot doc) {
    final data = doc.data() as Map<String, dynamic>;
    final rawSymptoms = data['symptoms'] as List<dynamic>? ?? [];
    return PeriodData(
      id: doc.id,
      userId: data['userId'] as String? ?? '',
      cycleStart:
          (data['cycleStart'] as Timestamp?)?.toDate() ?? DateTime.now(),
      cycleEnd: (data['cycleEnd'] as Timestamp?)?.toDate(),
      cycleLengthDays: (data['cycleLengthDays'] as num?)?.toInt() ?? 28,
      symptoms:
          rawSymptoms.map((s) => Symptom.fromMap(s as Map<String, dynamic>)).toList(),
    );
  }

  Map<String, dynamic> toFirestore() => {
        'userId': userId,
        'cycleStart': Timestamp.fromDate(cycleStart),
        'cycleEnd': cycleEnd != null ? Timestamp.fromDate(cycleEnd!) : null,
        'cycleLengthDays': cycleLengthDays,
        'symptoms': symptoms.map((s) => s.toMap()).toList(),
      };

  PeriodData copyWith({
    DateTime? cycleStart,
    DateTime? cycleEnd,
    int? cycleLengthDays,
    List<Symptom>? symptoms,
  }) =>
      PeriodData(
        id: id,
        userId: userId,
        cycleStart: cycleStart ?? this.cycleStart,
        cycleEnd: cycleEnd ?? this.cycleEnd,
        cycleLengthDays: cycleLengthDays ?? this.cycleLengthDays,
        symptoms: symptoms ?? this.symptoms,
      );

  /// Next period estimated start date.
  DateTime get nextPeriodStart =>
      cycleStart.add(Duration(days: cycleLengthDays));

  /// Days remaining until next period (can be negative if overdue).
  int get daysUntilNext =>
      nextPeriodStart.difference(DateTime.now()).inDays;
}

import 'package:cloud_firestore/cloud_firestore.dart';

class RewardItem {
  final String id;
  final String name;
  final String description;
  final int pointsCost;
  final String emoji;

  const RewardItem({
    required this.id,
    required this.name,
    required this.description,
    required this.pointsCost,
    required this.emoji,
  });
}

class RewardsService {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  // ── Static reward catalog ────────────────────────────────────────────────────
  static const List<RewardItem> catalog = [
    RewardItem(
      id: 'free_pad',
      name: 'Free Sanitary Pad Pack',
      description: 'Delivered to nearest campus kiosk',
      pointsCost: 1500,
      emoji: '🩸',
    ),
    RewardItem(
      id: 'coffee',
      name: 'Free Coffee',
      description: 'Redeem at partner cafés',
      pointsCost: 800,
      emoji: '☕',
    ),
    RewardItem(
      id: 'movie_ticket',
      name: 'Movie Ticket',
      description: 'One standard ticket at partner cinemas',
      pointsCost: 2000,
      emoji: '🎬',
    ),
    RewardItem(
      id: 'reusable_bottle',
      name: 'Reusable Bottle',
      description: 'Eco-friendly stainless steel bottle',
      pointsCost: 1200,
      emoji: '🍶',
    ),
  ];

  // ── Live Fox Points stream ──────────────────────────────────────────────────
  Stream<int> getPointsStream(String userId) {
    return _db.collection('users').doc(userId).snapshots().map(
          (snap) => snap.exists
              ? ((snap.data()!['foxPoints'] as num?)?.toInt() ?? 0)
              : 0,
        );
  }

  // ── Redeem reward (deducts points via Firestore transaction) ─────────────────
  Future<void> redeem({
    required String userId,
    required RewardItem item,
  }) async {
    final userRef = _db.collection('users').doc(userId);

    await _db.runTransaction((txn) async {
      final snap = await txn.get(userRef);
      final current = (snap.data()!['foxPoints'] as num?)?.toInt() ?? 0;
      if (current < item.pointsCost) {
        throw Exception('Not enough Fox Points. You need ${item.pointsCost} but have $current.');
      }

      final orderRef = _db.collection('orders').doc();
      txn.set(orderRef, {
        'userId': userId,
        'rewardId': item.id,
        'rewardName': item.name,
        'pointsCost': item.pointsCost,
        'status': 'pending',
        'createdAt': FieldValue.serverTimestamp(),
      });

      txn.update(userRef, {
        'foxPoints': FieldValue.increment(-item.pointsCost),
      });
    });
  }
}

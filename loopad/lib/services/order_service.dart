import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/order.dart';

class OrderService {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Future<void> placeOrder({
    required String userId,
    required String rewardId,
    required String rewardName,
    required int pointsCost,
  }) async {
    final userRef = _db.collection('users').doc(userId);

    await _db.runTransaction((txn) async {
      final userSnap = await txn.get(userRef);
      final current = (userSnap.data()!['foxPoints'] as num?)?.toInt() ?? 0;
      if (current < pointsCost) throw Exception('Insufficient Fox Points');

      final orderRef = _db.collection('orders').doc();
      txn.set(orderRef, {
        'userId': userId,
        'rewardId': rewardId,
        'rewardName': rewardName,
        'pointsCost': pointsCost,
        'status': OrderStatus.pending.name,
        'createdAt': FieldValue.serverTimestamp(),
      });

      txn.update(userRef, {'foxPoints': FieldValue.increment(-pointsCost)});
    });
  }

  Stream<List<Order>> getHistory(String userId) {
    return _db
        .collection('orders')
        .where('userId', isEqualTo: userId)
        .orderBy('createdAt', descending: true)
        .snapshots()
        .map((snap) => snap.docs.map(Order.fromFirestore).toList());
  }
}

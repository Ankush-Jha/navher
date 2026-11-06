import 'package:cloud_firestore/cloud_firestore.dart';

enum OrderStatus { pending, confirmed, delivered, cancelled }

class Order {
  final String id;
  final String userId;
  final String rewardId;
  final String rewardName;
  final int pointsCost;
  final OrderStatus status;
  final DateTime createdAt;

  const Order({
    required this.id,
    required this.userId,
    required this.rewardId,
    required this.rewardName,
    required this.pointsCost,
    this.status = OrderStatus.pending,
    required this.createdAt,
  });

  factory Order.fromFirestore(DocumentSnapshot doc) {
    final data = doc.data() as Map<String, dynamic>;
    return Order(
      id: doc.id,
      userId: data['userId'] as String? ?? '',
      rewardId: data['rewardId'] as String? ?? '',
      rewardName: data['rewardName'] as String? ?? '',
      pointsCost: (data['pointsCost'] as num?)?.toInt() ?? 0,
      status: OrderStatus.values.firstWhere(
        (s) => s.name == (data['status'] as String? ?? 'pending'),
        orElse: () => OrderStatus.pending,
      ),
      createdAt: (data['createdAt'] as Timestamp?)?.toDate() ?? DateTime.now(),
    );
  }

  Map<String, dynamic> toFirestore() => {
        'userId': userId,
        'rewardId': rewardId,
        'rewardName': rewardName,
        'pointsCost': pointsCost,
        'status': status.name,
        'createdAt': Timestamp.fromDate(createdAt),
      };
}

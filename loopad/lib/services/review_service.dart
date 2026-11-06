import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/review.dart';

class ReviewService {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  // ── Submit review and award +20 Fox Points ──────────────────────────────────
  Future<void> submit({
    required String washroomId,
    required String userId,
    required String userName,
    required double rating,
    required String comment,
  }) async {
    final review = Review(
      id: '',
      washroomId: washroomId,
      userId: userId,
      userName: userName,
      rating: rating,
      comment: comment,
      createdAt: DateTime.now(),
    );

    final washroomRef = _db.collection('washrooms').doc(washroomId);
    final userRef = _db.collection('users').doc(userId);

    await _db.runTransaction((txn) async {
      final washroomSnap = await txn.get(washroomRef);
      if (!washroomSnap.exists) throw Exception('Washroom not found');

      final currentRating = (washroomSnap.data()!['rating'] as num?)?.toDouble() ?? 0.0;
      final currentCount = (washroomSnap.data()!['reviewCount'] as num?)?.toInt() ?? 0;
      final newCount = currentCount + 1;
      final newRating = ((currentRating * currentCount) + rating) / newCount;

      // Write review doc
      final reviewRef = washroomRef.collection('reviews').doc();
      txn.set(reviewRef, review.toFirestore());

      // Update washroom aggregate
      txn.update(washroomRef, {
        'rating': newRating,
        'reviewCount': newCount,
      });

      // Award Fox Points
      txn.update(userRef, {
        'foxPoints': FieldValue.increment(20),
      });
    });
  }

  // ── Get reviews for a washroom ───────────────────────────────────────────────
  Stream<List<Review>> getReviews(String washroomId) {
    return _db
        .collection('washrooms')
        .doc(washroomId)
        .collection('reviews')
        .orderBy('createdAt', descending: true)
        .snapshots()
        .map((snap) => snap.docs.map(Review.fromFirestore).toList());
  }
}

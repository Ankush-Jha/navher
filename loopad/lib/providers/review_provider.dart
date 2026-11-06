import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../services/review_service.dart';
import '../models/review.dart';

final reviewServiceProvider =
    Provider<ReviewService>((ref) => ReviewService());

final reviewsProvider =
    StreamProvider.family<List<Review>, String>((ref, washroomId) {
  return ref.watch(reviewServiceProvider).getReviews(washroomId);
});

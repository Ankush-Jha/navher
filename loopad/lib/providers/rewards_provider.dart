import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../services/rewards_service.dart';

final rewardsServiceProvider =
    Provider<RewardsService>((ref) => RewardsService());

final foxPointsProvider = StreamProvider.family<int, String>((ref, userId) {
  return ref.watch(rewardsServiceProvider).getPointsStream(userId);
});

final rewardCatalogProvider = Provider<List<RewardItem>>(
  (ref) => RewardsService.catalog,
);

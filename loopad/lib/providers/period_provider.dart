import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../services/period_service.dart';
import '../models/period_data.dart';

final periodServiceProvider =
    Provider<PeriodService>((ref) => PeriodService());

final currentCycleProvider =
    StreamProvider.family<PeriodData?, String>((ref, userId) {
  return ref.watch(periodServiceProvider).getCurrentStream(userId);
});

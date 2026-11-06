import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../services/profile_service.dart';
import '../models/user.dart';

final profileServiceProvider =
    Provider<ProfileService>((ref) => ProfileService());

final userProfileProvider =
    StreamProvider.family<UserModel?, String>((ref, uid) {
  return ref.watch(profileServiceProvider).getProfileStream(uid);
});

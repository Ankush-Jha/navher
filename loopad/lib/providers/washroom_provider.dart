import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../services/washroom_service.dart';
import '../models/washroom.dart';

final washroomServiceProvider =
    Provider<WashroomService>((ref) => WashroomService());

// Location is injected as a parameter when calling nearbyWashroomsProvider.
final nearbyWashroomsProvider =
    FutureProvider.family<List<Washroom>, ({double lat, double lng})>(
  (ref, pos) => ref
      .watch(washroomServiceProvider)
      .getNearby(userLat: pos.lat, userLng: pos.lng),
);

final washroomDetailsProvider =
    StreamProvider.family<Washroom?, String>((ref, id) {
  return ref.watch(washroomServiceProvider).getDetailsStream(id);
});

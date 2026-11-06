import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../services/sos_service.dart';
import '../models/sos_contact.dart';

final sosServiceProvider =
    Provider<SosService>((ref) => SosService());

final sosContactsProvider =
    StreamProvider.family<List<SosContact>, String>((ref, userId) {
  return ref.watch(sosServiceProvider).getContacts(userId);
});

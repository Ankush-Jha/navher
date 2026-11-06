import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/sos_contact.dart';

class SosService {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  // ── Get contacts as live stream ─────────────────────────────────────────────
  Stream<List<SosContact>> getContacts(String userId) {
    return _db
        .collection('sos_contacts')
        .where('userId', isEqualTo: userId)
        .snapshots()
        .map((snap) => snap.docs.map(SosContact.fromFirestore).toList());
  }

  // ── Add contact ─────────────────────────────────────────────────────────────
  Future<void> addContact({
    required String userId,
    required String name,
    required String phone,
  }) async {
    await _db.collection('sos_contacts').add({
      'userId': userId,
      'name': name,
      'phone': phone,
    });
  }

  // ── Delete contact ──────────────────────────────────────────────────────────
  Future<void> deleteContact(String contactId) async {
    await _db.collection('sos_contacts').doc(contactId).delete();
  }

  /// triggerSOS: records an SOS event in Firestore so contacts can be notified.
  /// In a production app you'd invoke a Cloud Function that sends SMS via Twilio.
  Future<void> triggerSOS({
    required String userId,
    required double lat,
    required double lng,
  }) async {
    await _db.collection('sos_events').add({
      'userId': userId,
      'location': GeoPoint(lat, lng),
      'triggeredAt': FieldValue.serverTimestamp(),
    });
  }
}

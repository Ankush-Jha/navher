import 'package:cloud_firestore/cloud_firestore.dart';

class SosContact {
  final String id;
  final String userId;
  final String name;
  final String phone;

  const SosContact({
    required this.id,
    required this.userId,
    required this.name,
    required this.phone,
  });

  factory SosContact.fromFirestore(DocumentSnapshot doc) {
    final data = doc.data() as Map<String, dynamic>;
    return SosContact(
      id: doc.id,
      userId: data['userId'] as String? ?? '',
      name: data['name'] as String? ?? '',
      phone: data['phone'] as String? ?? '',
    );
  }

  Map<String, dynamic> toFirestore() => {
        'userId': userId,
        'name': name,
        'phone': phone,
      };
}

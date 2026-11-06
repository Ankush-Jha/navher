import 'package:cloud_firestore/cloud_firestore.dart';

class Washroom {
  final String id;
  final String name;
  final String address;
  final double lat;
  final double lng;
  final bool hasPads;
  final bool vendingWorking;
  final double rating;
  final int reviewCount;
  final bool isVerified;
  final String? imageUrl;

  const Washroom({
    required this.id,
    required this.name,
    required this.address,
    required this.lat,
    required this.lng,
    this.hasPads = false,
    this.vendingWorking = false,
    this.rating = 0.0,
    this.reviewCount = 0,
    this.isVerified = false,
    this.imageUrl,
  });

  factory Washroom.fromFirestore(DocumentSnapshot doc) {
    final data = doc.data() as Map<String, dynamic>;
    final geo = data['location'] as GeoPoint? ?? const GeoPoint(0, 0);
    return Washroom(
      id: doc.id,
      name: data['name'] as String? ?? '',
      address: data['address'] as String? ?? '',
      lat: geo.latitude,
      lng: geo.longitude,
      hasPads: data['hasPads'] as bool? ?? false,
      vendingWorking: data['vendingWorking'] as bool? ?? false,
      rating: (data['rating'] as num?)?.toDouble() ?? 0.0,
      reviewCount: (data['reviewCount'] as num?)?.toInt() ?? 0,
      isVerified: data['isVerified'] as bool? ?? false,
      imageUrl: data['imageUrl'] as String?,
    );
  }

  Map<String, dynamic> toFirestore() => {
        'name': name,
        'address': address,
        'location': GeoPoint(lat, lng),
        'hasPads': hasPads,
        'vendingWorking': vendingWorking,
        'rating': rating,
        'reviewCount': reviewCount,
        'isVerified': isVerified,
        'imageUrl': imageUrl,
      };

  Washroom copyWith({
    String? name,
    String? address,
    double? lat,
    double? lng,
    bool? hasPads,
    bool? vendingWorking,
    double? rating,
    int? reviewCount,
    bool? isVerified,
    String? imageUrl,
  }) =>
      Washroom(
        id: id,
        name: name ?? this.name,
        address: address ?? this.address,
        lat: lat ?? this.lat,
        lng: lng ?? this.lng,
        hasPads: hasPads ?? this.hasPads,
        vendingWorking: vendingWorking ?? this.vendingWorking,
        rating: rating ?? this.rating,
        reviewCount: reviewCount ?? this.reviewCount,
        isVerified: isVerified ?? this.isVerified,
        imageUrl: imageUrl ?? this.imageUrl,
      );
}

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:geolocator/geolocator.dart';
import '../theme/app_colors.dart';
import '../providers/washroom_provider.dart';

/// Provides the current device position (requests permission automatically).
final _locationProvider = FutureProvider<Position?>((ref) async {
  try {
    bool serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) return null;

    LocationPermission permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) return null;
    }
    if (permission == LocationPermission.deniedForever) return null;

    return await Geolocator.getCurrentPosition();
  } catch (_) {
    return null;
  }
});

class HomeScreen extends ConsumerWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final locationAsync = ref.watch(_locationProvider);

    // Derive nearest washroom distance string from live Firestore data
    String nearestLabel = 'Loading…';

    locationAsync.whenData((pos) {
      if (pos != null) {
        final washAsync = ref.watch(
          nearbyWashroomsProvider((lat: pos.latitude, lng: pos.longitude)),
        );
        washAsync.whenData((washrooms) {
          if (washrooms.isNotEmpty) {
            final dist = washrooms.first.distanceM ?? 0;
            nearestLabel = dist < 1000
                ? '${dist.round()} m away'
                : '${(dist / 1000).toStringAsFixed(1)} km away';
          }
        });
      }
    });

    return Scaffold(
      backgroundColor: const Color(0xFFEBF5FF), // blue-50
      body: Stack(
        children: [
          // Map-like background with dot pattern
          Positioned.fill(
            child: CustomPaint(
              painter: _DotPatternPainter(),
            ),
          ),

          // Floating emoji pins on map
          Positioned(
            top: MediaQuery.of(context).size.height * 0.25,
            left: MediaQuery.of(context).size.width * 0.2,
            child: _MapPin(emoji: '🚽', borderColor: AppColors.accentBlue, size: 48),
          ),
          Positioned(
            top: MediaQuery.of(context).size.height * 0.4,
            left: MediaQuery.of(context).size.width * 0.65,
            child: _MapPin(emoji: '🛍️', borderColor: AppColors.primary, size: 48),
          ),
          Positioned(
            top: MediaQuery.of(context).size.height * 0.52,
            left: MediaQuery.of(context).size.width * 0.35,
            child: _MapPin(emoji: '🦊', borderColor: AppColors.accentGreen, size: 64),
          ),

          // Top search bar
          Positioned(
            top: MediaQuery.of(context).padding.top + 8,
            left: 20,
            right: 20,
            child: Row(
              children: [
                // Mascot button
                _TopBarButton(child: const Text('🦊', style: TextStyle(fontSize: 24))),
                const SizedBox(width: 12),
                // Search bar
                Expanded(
                  child: Container(
                    height: 48,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(color: AppColors.borderSlate, width: 2),
                      boxShadow: const [
                        BoxShadow(
                          color: Color(0x0D000000),
                          offset: Offset(0, 2),
                          blurRadius: 8,
                        ),
                      ],
                    ),
                    child: Row(
                      children: [
                        const SizedBox(width: 16),
                        const Icon(Icons.search, color: AppColors.textLight, size: 20),
                        const SizedBox(width: 8),
                        Text(
                          'Find washrooms...',
                          style: GoogleFonts.nunito(
                            color: AppColors.textLight,
                            fontWeight: FontWeight.w700,
                            fontSize: 14,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(width: 12),
                // Filter button
                _TopBarButton(
                  child: const Icon(Icons.tune, color: AppColors.textDark, size: 20),
                ),
              ],
            ),
          ),

          // SOS Button
          Positioned(
            bottom: 340,
            right: 20,
            child: GestureDetector(
              onTap: () => Navigator.pushNamed(context, '/sos'),
              child: Container(
                width: 68,
                height: 68,
                decoration: BoxDecoration(
                  color: AppColors.primary,
                  shape: BoxShape.circle,
                  border: Border.all(color: Colors.white, width: 4),
                  boxShadow: const [
                    BoxShadow(
                      color: AppColors.primaryDark,
                      offset: Offset(0, 8),
                      blurRadius: 0,
                    ),
                  ],
                ),
                child: const Center(
                  child: Icon(Icons.sos, color: Colors.white, size: 32),
                ),
              ),
            ),
          ),

          // Bottom sheet
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            child: Container(
              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.vertical(top: Radius.circular(32)),
                boxShadow: [
                  BoxShadow(
                    color: Color(0x0D000000),
                    offset: Offset(0, -8),
                    blurRadius: 20,
                  ),
                ],
              ),
              child: SafeArea(
                top: false,
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(24, 12, 24, 24),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // Handle
                      Center(
                        child: Container(
                          width: 48,
                          height: 6,
                          decoration: BoxDecoration(
                            color: const Color(0xFFE2E8F0),
                            borderRadius: BorderRadius.circular(99),
                          ),
                        ),
                      ),
                      const SizedBox(height: 20),

                      // Title
                      RichText(
                        text: TextSpan(
                          children: [
                            TextSpan(
                              text: 'Emergency Needed?\n',
                              style: GoogleFonts.nunito(
                                fontSize: 26,
                                fontWeight: FontWeight.w800,
                                color: AppColors.textDark,
                                height: 1.1,
                                letterSpacing: -0.5,
                              ),
                            ),
                            TextSpan(
                              text: 'Delivered in 15 mins',
                              style: GoogleFonts.nunito(
                                fontSize: 28,
                                fontWeight: FontWeight.w800,
                                color: AppColors.primary,
                                height: 1.3,
                              ),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 20),

                      // Clean Washrooms card — shows live nearest distance
                      _ActionCard(
                        emoji: '🚽',
                        title: 'Clean Washrooms',
                        subtitle: locationAsync.when(
                          data: (pos) {
                            if (pos == null) return 'Enable location';
                            final washAsync = ref.watch(
                              nearbyWashroomsProvider(
                                  (lat: pos.latitude, lng: pos.longitude)),
                            );
                            return washAsync.when(
                              data: (w) => w.isNotEmpty
                                  ? _formatDist(w.first.distanceM)
                                  : 'No washrooms found',
                              loading: () => 'Finding nearest…',
                              error: (_, __) => 'Unable to load',
                            );
                          },
                          loading: () => 'Getting location…',
                          error: (_, __) => 'Location error',
                        ),
                        subtitleIcon: Icons.location_on,
                        borderColor: AppColors.accentBlue,
                        accentColor: AppColors.accentBlue,
                        bgColor: const Color(0xFFEFF6FF),
                        onTap: () => Navigator.pushNamed(context, '/safe-spaces'),
                      ),
                      const SizedBox(height: 16),

                      // Order Pads card
                      _ActionCard(
                        emoji: '🛍️',
                        title: 'Order Pads',
                        subtitle: 'Fast Delivery',
                        subtitleIcon: Icons.bolt,
                        borderColor: AppColors.primary,
                        accentColor: AppColors.primary,
                        bgColor: const Color(0xFFFFF0F3),
                        onTap: () => Navigator.pushNamed(context, '/pad-delivery'),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  String _formatDist(double? distM) {
    if (distM == null) return 'Nearby';
    return distM < 1000
        ? '${distM.round()} m away'
        : '${(distM / 1000).toStringAsFixed(1)} km away';
  }
}

class _TopBarButton extends StatelessWidget {
  final Widget child;
  const _TopBarButton({required this.child});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 48,
      height: 48,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppColors.borderSlate, width: 2),
        boxShadow: const [
          BoxShadow(
            color: Color(0x0D000000),
            offset: Offset(0, 2),
            blurRadius: 8,
          ),
        ],
      ),
      child: Center(child: child),
    );
  }
}

class _MapPin extends StatelessWidget {
  final String emoji;
  final Color borderColor;
  final double size;
  const _MapPin({required this.emoji, required this.borderColor, this.size = 48});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        color: Colors.white,
        shape: BoxShape.circle,
        border: Border.all(color: borderColor, width: 4),
        boxShadow: const [
          BoxShadow(
            color: Color(0x1A000000),
            offset: Offset(0, 4),
            blurRadius: 8,
          ),
        ],
      ),
      child: Center(
        child: Text(emoji, style: TextStyle(fontSize: size * 0.45)),
      ),
    );
  }
}

class _ActionCard extends StatelessWidget {
  final String emoji;
  final String title;
  final String subtitle;
  final IconData subtitleIcon;
  final Color borderColor;
  final Color accentColor;
  final Color bgColor;
  final VoidCallback? onTap;

  const _ActionCard({
    required this.emoji,
    required this.title,
    required this.subtitle,
    required this.subtitleIcon,
    required this.borderColor,
    required this.accentColor,
    required this.bgColor,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: borderColor, width: 3),
          boxShadow: [
            BoxShadow(
              color: borderColor.withOpacity(0.3),
              offset: const Offset(0, 4),
              blurRadius: 0,
            ),
          ],
        ),
        child: Row(
          children: [
            Container(
              width: 52,
              height: 52,
              decoration: BoxDecoration(
                color: bgColor,
                borderRadius: BorderRadius.circular(16),
              ),
              child: Center(
                child: Text(emoji, style: const TextStyle(fontSize: 28)),
              ),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: GoogleFonts.nunito(
                      fontSize: 18,
                      fontWeight: FontWeight.w800,
                      color: AppColors.textDark,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Row(
                    children: [
                      Icon(subtitleIcon, size: 16, color: accentColor),
                      const SizedBox(width: 4),
                      Text(
                        subtitle,
                        style: GoogleFonts.nunito(
                          fontSize: 14,
                          fontWeight: FontWeight.w700,
                          color: accentColor,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            Container(
              width: 40,
              height: 40,
              decoration: BoxDecoration(
                color: accentColor.withOpacity(0.1),
                shape: BoxShape.circle,
              ),
              child: Icon(Icons.arrow_forward_ios, size: 18, color: accentColor),
            ),
          ],
        ),
      ),
    );
  }
}

class _DotPatternPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = AppColors.accentBlue.withOpacity(0.12)
      ..style = PaintingStyle.fill;

    const spacing = 30.0;
    const radius = 2.0;

    for (double x = 0; x < size.width; x += spacing) {
      for (double y = 0; y < size.height; y += spacing) {
        canvas.drawCircle(Offset(x, y), radius, paint);
      }
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

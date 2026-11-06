import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../theme/app_colors.dart';

class SafeSpacesScreen extends StatelessWidget {
  const SafeSpacesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFAFAFA),
      body: Stack(
        children: [
          // Map background
          Positioned.fill(
            child: Container(
              color: const Color(0xFFE8F3F1),
              child: Stack(
                children: [
                  // Map image
                  Positioned.fill(
                    child: Image.network(
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPcqDuljvZDVvdVfNLtkUd_F7XfbSMqN4yOONyTml0PF3mCT7ogd9SczT4_DG98ELqR73-TuBF0xOTMWYU7ApXe1zidodKRO0MN68fAgDx0mFfl4lo9gHPT718MiQ2oWkpiiYreRAQY25WpqKXXd-aqxOTJUzvCuwA26P9LfoDncbXn-sCbt8EYlsmWyQRQYz5A6xXrOwZb-JFz2eo-CosDiR21YcTkdM7lRUNPstuhElxtFfPHKXRwU04625FqDg8FJqX9PMEa-qj',
                      fit: BoxFit.cover,
                      opacity: const AlwaysStoppedAnimation(0.8),
                      errorBuilder: (_, __, ___) => CustomPaint(
                        painter: _MapPatternPainter(),
                      ),
                    ),
                  ),

                  // Primary pulsing pin
                  Positioned(
                    top: MediaQuery.of(context).size.height * 0.45,
                    left: MediaQuery.of(context).size.width * 0.35,
                    child: _PulsingMapPin(),
                  ),

                  // Secondary pins
                  Positioned(
                    top: MediaQuery.of(context).size.height * 0.55,
                    left: MediaQuery.of(context).size.width * 0.72,
                    child: _SmallMapPin(
                      icon: Icons.wc,
                      color: AppColors.accent,
                    ),
                  ),
                  Positioned(
                    top: MediaQuery.of(context).size.height * 0.3,
                    left: MediaQuery.of(context).size.width * 0.62,
                    child: _SmallMapPin(
                      icon: Icons.water_drop,
                      color: const Color(0xFF00C4B4),
                    ),
                  ),
                ],
              ),
            ),
          ),

          // Glassmorphic header
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            child: SafeArea(
              bottom: false,
              child: Container(
                margin: const EdgeInsets.fromLTRB(8, 4, 8, 0),
                decoration: BoxDecoration(
                  color: Colors.white.withOpacity(0.85),
                  borderRadius: const BorderRadius.vertical(bottom: Radius.circular(24)),
                  boxShadow: const [
                    BoxShadow(
                      color: Color(0x0A000000),
                      offset: Offset(0, 8),
                      blurRadius: 30,
                    ),
                  ],
                  border: Border.all(color: Colors.white.withOpacity(0.4)),
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    // App bar
                    Padding(
                      padding: const EdgeInsets.fromLTRB(16, 12, 16, 12),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Container(
                            width: 44, height: 44,
                            decoration: BoxDecoration(
                              color: AppColors.accent.withOpacity(0.2),
                              shape: BoxShape.circle,
                            ),
                            child: const Icon(Icons.face_3, color: AppColors.accent, size: 24),
                          ),
                          Text(
                            'NavHer',
                            style: GoogleFonts.nunito(
                              fontSize: 24,
                              fontWeight: FontWeight.w800,
                              color: AppColors.textDark,
                              letterSpacing: -0.5,
                            ),
                          ),
                          Container(
                            width: 44, height: 44,
                            decoration: BoxDecoration(
                              color: const Color(0xFFF1F5F9).withOpacity(0.5),
                              shape: BoxShape.circle,
                            ),
                            child: const Icon(Icons.notifications_outlined, color: AppColors.textMedium, size: 24),
                          ),
                        ],
                      ),
                    ),

                    // Emergency pad banner
                    Padding(
                      padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
                      child: GestureDetector(
                        onTap: () => Navigator.pushNamed(context, '/pad-delivery'),
                        child: Container(
                          padding: const EdgeInsets.all(14),
                          decoration: BoxDecoration(
                            gradient: LinearGradient(
                              colors: [
                                AppColors.accent.withOpacity(0.15),
                                const Color(0xFF00C4B4).withOpacity(0.15),
                              ],
                            ),
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(color: Colors.white.withOpacity(0.6)),
                          ),
                          child: Row(
                            children: [
                              Container(
                                padding: const EdgeInsets.all(8),
                                decoration: BoxDecoration(
                                  color: Colors.white,
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: const Icon(Icons.medical_services, size: 20, color: AppColors.accent),
                              ),
                              const SizedBox(width: 14),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      'No pads nearby?',
                                      style: GoogleFonts.nunito(
                                        fontSize: 14,
                                        fontWeight: FontWeight.w700,
                                        color: AppColors.textDark,
                                      ),
                                    ),
                                    Text(
                                      'Order in ~15 mins (Blinkit)',
                                      style: GoogleFonts.nunito(
                                        fontSize: 13,
                                        fontWeight: FontWeight.w700,
                                        color: const Color(0xFF00C4B4),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              Container(
                                width: 36, height: 36,
                                decoration: BoxDecoration(
                                  color: Colors.white,
                                  shape: BoxShape.circle,
                                  boxShadow: [
                                    BoxShadow(
                                      color: Colors.black.withOpacity(0.05),
                                      blurRadius: 4,
                                    ),
                                  ],
                                ),
                                child: const Icon(
                                  Icons.arrow_forward,
                                  size: 18,
                                  color: Color(0xFF00C4B4),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),

                    // Search bar
                    Padding(
                      padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
                      child: Container(
                        height: 52,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: const Color(0xFFF1F5F9)),
                          boxShadow: [
                            BoxShadow(
                              color: Colors.black.withOpacity(0.03),
                              blurRadius: 4,
                            ),
                          ],
                        ),
                        child: Row(
                          children: [
                            const SizedBox(width: 16),
                            const Icon(Icons.search, color: AppColors.textLight, size: 22),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Text(
                                'Search washrooms or pads',
                                style: GoogleFonts.nunito(
                                  fontSize: 15,
                                  fontWeight: FontWeight.w600,
                                  color: AppColors.textLight,
                                ),
                              ),
                            ),
                            const Icon(Icons.tune, color: AppColors.textLight, size: 22),
                            const SizedBox(width: 16),
                          ],
                        ),
                      ),
                    ),

                    // Filter chips
                    Padding(
                      padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
                      child: Row(
                        children: [
                          _FilterChip(label: 'Free', isSelected: true),
                          const SizedBox(width: 10),
                          _FilterChip(label: 'Has Pads', icon: Icons.water_drop, iconColor: AppColors.accent),
                          const SizedBox(width: 10),
                          _FilterChip(label: 'Cleanest', icon: Icons.cleaning_services, iconColor: const Color(0xFF00C4B4)),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),

          // "Find Nearest" floating button
          Positioned(
            bottom: 290,
            right: 20,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
              decoration: BoxDecoration(
                color: const Color(0xFF00C4B4),
                borderRadius: BorderRadius.circular(16),
                boxShadow: [
                  BoxShadow(
                    color: const Color(0xFF00C4B4).withOpacity(0.3),
                    offset: const Offset(0, 8),
                    blurRadius: 20,
                  ),
                ],
              ),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.navigation, size: 20, color: Colors.white),
                  const SizedBox(width: 8),
                  Text(
                    'Find Nearest Safe Loo',
                    style: GoogleFonts.nunito(
                      fontSize: 15,
                      fontWeight: FontWeight.w700,
                      color: Colors.white,
                    ),
                  ),
                ],
              ),
            ),
          ),

          // Bottom sheet with nearby spaces
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            child: Container(
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.85),
                borderRadius: const BorderRadius.vertical(top: Radius.circular(32)),
                border: Border.all(color: Colors.white.withOpacity(0.4)),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.05),
                    offset: const Offset(0, -10),
                    blurRadius: 30,
                  ),
                ],
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  // Handle
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    child: Container(
                      width: 56, height: 6,
                      decoration: BoxDecoration(
                        color: const Color(0xFFCBD5E1),
                        borderRadius: BorderRadius.circular(99),
                      ),
                    ),
                  ),

                  Padding(
                    padding: const EdgeInsets.fromLTRB(20, 0, 20, 16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Nearby Safe Spaces',
                          style: GoogleFonts.nunito(
                            fontSize: 20,
                            fontWeight: FontWeight.w800,
                            color: AppColors.textDark,
                          ),
                        ),
                        const SizedBox(height: 16),

                        // Space card 1
                        _SpaceCard(
                          name: 'The Oberoi Hotel',
                          type: 'Hotel Washroom • Ground Floor',
                          rating: '4.8',
                          distance: '450m',
                          badge: 'Has Pads',
                          badgeColor: const Color(0xFF00C4B4),
                          isClean: true,
                          onTap: () => Navigator.pushNamed(
                            context,
                            '/washroom-details',
                            arguments: const {
                              'name': 'The Oberoi Hotel',
                              'subtitle': 'Hotel Washroom • Ground Floor',
                              'distance': '450m',
                              'rating': 4.8,
                              'hasPads': true,
                              'vendingWorking': true,
                              'vendingInStock': true,
                              'brands': ['Whisper', 'Sofy'],
                            },
                          ),
                        ),
                        const SizedBox(height: 14),

                        // Space card 2
                        _SpaceCard(
                          name: 'Select Citywalk Mall',
                          type: 'Mall Washroom • Level 1',
                          rating: '4.5',
                          distance: '800m',
                          badge: 'Free',
                          badgeColor: AppColors.textMedium,
                          isClean: false,
                          onTap: () => Navigator.pushNamed(
                            context,
                            '/washroom-details',
                            arguments: const {
                              'name': 'Select Citywalk Mall',
                              'subtitle': 'Mall Washroom • Level 1',
                              'distance': '800m',
                              'rating': 4.5,
                              'hasPads': false,
                              'vendingWorking': false,
                              'vendingInStock': false,
                              'brands': <String>[],
                            },
                          ),
                        ),
                      ],
                    ),
                  ),

                  // Bottom navigation
                  Container(
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.85),
                      borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.05),
                          offset: const Offset(0, -10),
                          blurRadius: 30,
                        ),
                      ],
                    ),
                    padding: const EdgeInsets.only(bottom: 24, top: 12),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        _NavItem(icon: Icons.explore, label: 'Explore', isSelected: true, onTap: () {}),
                        _NavItem(icon: Icons.shopping_bag_outlined, label: 'Order Pads', onTap: () {
                          Navigator.pushNamed(context, '/pad-delivery');
                        }),
                        _NavItem(icon: Icons.bookmark_outline, label: 'Saved', onTap: () {}),
                        _NavItem(icon: Icons.person_outline, label: 'Profile', onTap: () {
                          Navigator.pushNamed(context, '/rewards');
                        }),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _PulsingMapPin extends StatefulWidget {
  @override
  State<_PulsingMapPin> createState() => _PulsingMapPinState();
}

class _PulsingMapPinState extends State<_PulsingMapPin> with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    )..repeat();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 64, height: 64,
      child: Stack(
        alignment: Alignment.center,
        children: [
          // Pulsing rings
          AnimatedBuilder(
            animation: _controller,
            builder: (_, __) {
              return Container(
                width: 64 * (0.8 + _controller.value * 0.4),
                height: 64 * (0.8 + _controller.value * 0.4),
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: const Color(0xFF00C4B4).withOpacity(0.2 * (1 - _controller.value)),
                ),
              );
            },
          ),
          Container(
            width: 48, height: 48,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: const Color(0xFF00C4B4).withOpacity(0.3),
            ),
          ),
          Container(
            width: 40, height: 40,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: const Color(0xFF00C4B4),
              border: Border.all(color: Colors.white, width: 3),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.15),
                  blurRadius: 8,
                  offset: const Offset(0, 2),
                ),
              ],
            ),
            child: const Icon(Icons.wc, color: Colors.white, size: 20),
          ),
        ],
      ),
    );
  }
}

class _SmallMapPin extends StatelessWidget {
  final IconData icon;
  final Color color;
  const _SmallMapPin({required this.icon, required this.color});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 36, height: 36,
      decoration: BoxDecoration(
        color: Colors.white,
        shape: BoxShape.circle,
        border: Border.all(color: color.withOpacity(0.3), width: 3),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.08),
            blurRadius: 4,
          ),
        ],
      ),
      child: Icon(icon, size: 18, color: color),
    );
  }
}

class _FilterChip extends StatelessWidget {
  final String label;
  final bool isSelected;
  final IconData? icon;
  final Color? iconColor;

  const _FilterChip({
    required this.label,
    this.isSelected = false,
    this.icon,
    this.iconColor,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 40,
      padding: const EdgeInsets.symmetric(horizontal: 16),
      decoration: BoxDecoration(
        color: isSelected ? const Color(0xFF00C4B4) : Colors.white,
        borderRadius: BorderRadius.circular(9999),
        border: isSelected ? null : Border.all(color: const Color(0xFFE2E8F0)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.03),
            blurRadius: 4,
          ),
        ],
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (icon != null) ...[
            Icon(icon, size: 18, color: isSelected ? Colors.white : iconColor),
            const SizedBox(width: 6),
          ],
          Text(
            label,
            style: GoogleFonts.nunito(
              fontSize: 15,
              fontWeight: FontWeight.w700,
              color: isSelected ? Colors.white : AppColors.textMedium,
            ),
          ),
        ],
      ),
    );
  }
}

class _SpaceCard extends StatelessWidget {
  final String name;
  final String type;
  final String rating;
  final String distance;
  final String badge;
  final Color badgeColor;
  final bool isClean;
  final VoidCallback? onTap;

  const _SpaceCard({
    required this.name,
    required this.type,
    required this.rating,
    required this.distance,
    required this.badge,
    required this.badgeColor,
    required this.isClean,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: Colors.white.withOpacity(0.9),
          borderRadius: BorderRadius.circular(24),
          border: Border.all(color: const Color(0xFFF1F5F9).withOpacity(0.5)),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.03),
              blurRadius: 4,
            ),
          ],
        ),
        child: Column(
          children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      name,
                      style: GoogleFonts.nunito(
                        fontSize: 17,
                        fontWeight: FontWeight.w800,
                        color: AppColors.textDark,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      type,
                      style: GoogleFonts.nunito(
                        fontSize: 14,
                        fontWeight: FontWeight.w600,
                        color: AppColors.textMedium,
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                decoration: BoxDecoration(
                  color: badgeColor == AppColors.textMedium
                      ? const Color(0xFFF1F5F9)
                      : badgeColor.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(12),
                  border: badgeColor == AppColors.textMedium
                      ? null
                      : Border.all(color: badgeColor.withOpacity(0.1)),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    if (badgeColor != AppColors.textMedium) ...[
                      Icon(Icons.water_drop, size: 14, color: badgeColor),
                      const SizedBox(width: 4),
                    ],
                    Text(
                      badge,
                      style: GoogleFonts.nunito(
                        fontSize: 12,
                        fontWeight: FontWeight.w800,
                        color: badgeColor == AppColors.textMedium
                            ? AppColors.textMedium
                            : badgeColor,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.only(top: 12),
            decoration: const BoxDecoration(
              border: Border(top: BorderSide(color: Color(0xFFF1F5F9))),
            ),
            child: Row(
              children: [
                const Icon(Icons.star, size: 20, color: Color(0xFFFBBF24)),
                const SizedBox(width: 6),
                Text(
                  rating,
                  style: GoogleFonts.nunito(
                    fontSize: 14,
                    fontWeight: FontWeight.w700,
                    color: AppColors.textDark,
                  ),
                ),
                const SizedBox(width: 18),
                Icon(Icons.location_on, size: 20, color: AppColors.accent),
                const SizedBox(width: 6),
                Text(
                  distance,
                  style: GoogleFonts.nunito(
                    fontSize: 14,
                    fontWeight: FontWeight.w700,
                    color: AppColors.textDark,
                  ),
                ),
                if (isClean) ...[
                  const SizedBox(width: 18),
                  const Icon(Icons.check_circle, size: 20, color: Color(0xFF00C4B4)),
                  const SizedBox(width: 6),
                  Text(
                    'Clean',
                    style: GoogleFonts.nunito(
                      fontSize: 14,
                      fontWeight: FontWeight.w700,
                      color: const Color(0xFF00C4B4),
                    ),
                  ),
                ],
              ],
            ),
          ),
          ],
        ),
      ),
    );
  }
}

class _NavItem extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool isSelected;
  final VoidCallback onTap;

  const _NavItem({
    required this.icon,
    required this.label,
    this.isSelected = false,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(
            icon,
            size: 28,
            color: isSelected ? const Color(0xFF00C4B4) : AppColors.textLight,
          ),
          const SizedBox(height: 6),
          Text(
            label,
            style: GoogleFonts.nunito(
              fontSize: 11,
              fontWeight: isSelected ? FontWeight.w800 : FontWeight.w700,
              color: isSelected ? const Color(0xFF00C4B4) : AppColors.textLight,
            ),
          ),
        ],
      ),
    );
  }
}

class _MapPatternPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFF00C4B4).withOpacity(0.08)
      ..style = PaintingStyle.fill;

    const spacing = 24.0;

    for (double x = 0; x < size.width; x += spacing) {
      for (double y = 0; y < size.height; y += spacing) {
        canvas.drawCircle(Offset(x, y), 1.5, paint);
      }
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

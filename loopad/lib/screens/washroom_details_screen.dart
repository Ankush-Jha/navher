import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';
import '../theme/app_colors.dart';
import '../widgets/duo_button.dart';
import '../widgets/progress_bar.dart';
import '../widgets/section_header.dart';

class WashroomDetailsScreen extends StatelessWidget {
  const WashroomDetailsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final args = (ModalRoute.of(context)?.settings.arguments as Map?) ?? const {};
    final name = (args['name'] as String?) ?? 'Nexus Mall';
    final subtitle = (args['subtitle'] as String?) ?? 'Ground Floor, Near Gate 2';
    final distance = (args['distance'] as String?) ?? '120m';
    final rating = (args['rating'] as num?)?.toDouble() ?? 4.8;
    final hasPads = (args['hasPads'] as bool?) ?? true;
    final vendingWorking = (args['vendingWorking'] as bool?) ?? true;
    final vendingInStock = (args['vendingInStock'] as bool?) ?? true;
    final brands = (args['brands'] as List?)?.whereType<String>().toList() ?? const <String>['Whisper', 'Sofy'];

    Future<void> launchExternal(String url) async {
      final uri = Uri.parse(url);
      if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
        if (context.mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Could not open link')),
          );
        }
      }
    }

    String vendingSubtitle() {
      if (!vendingWorking) return 'Not Working';
      if (!vendingInStock) return 'Working • Out of Stock';
      return 'Working • In Stock';
    }

    final blinkitSearchUrl = 'https://blinkit.com/s/?q=sanitary%20pads';
    final pharmacyMapsUrl = 'https://www.google.com/maps/search/?api=1&query=pharmacy%20near%20me';

    return Scaffold(
      backgroundColor: AppColors.backgroundLight,
      body: SafeArea(
        child: Column(
          children: [
            // Progress bar
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 8, 20, 16),
              child: Row(
                children: [
                  GestureDetector(
                    onTap: () => Navigator.maybePop(context),
                    child: Container(
                      width: 40, height: 40,
                      decoration: const BoxDecoration(shape: BoxShape.circle),
                      child: const Icon(Icons.arrow_back, color: AppColors.textLight, size: 24),
                    ),
                  ),
                  const SizedBox(width: 12),
                  const Expanded(
                    child: ProgressBar(
                      progress: 1.0,
                      color: AppColors.accentBlue,
                      mascot: '🐦',
                    ),
                  ),
                ],
              ),
            ),

            // Scrollable content
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.only(bottom: 100),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Title + Rating
                    Padding(
                      padding: const EdgeInsets.fromLTRB(24, 8, 24, 16),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                RichText(
                                  text: TextSpan(
                                    children: [
                                      TextSpan(
                                        text: '$name\n',
                                        style: GoogleFonts.nunito(
                                          fontSize: 28,
                                          fontWeight: FontWeight.w800,
                                          color: AppColors.textDark,
                                          height: 1.1,
                                          letterSpacing: -0.5,
                                        ),
                                      ),
                                      TextSpan(
                                        text: subtitle,
                                        style: GoogleFonts.nunito(
                                          fontSize: 22,
                                          fontWeight: FontWeight.w800,
                                          color: AppColors.accentTeal,
                                          height: 1.3,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                const SizedBox(height: 4),
                                Text(
                                  'Open until 11:00 PM • $distance away',
                                  style: GoogleFonts.nunito(
                                    fontSize: 14,
                                    fontWeight: FontWeight.w700,
                                    color: AppColors.textMedium,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(width: 12),
                          // Rating badge
                          Container(
                            padding: const EdgeInsets.all(8),
                            decoration: BoxDecoration(
                              color: AppColors.accentYellow.withOpacity(0.1),
                              borderRadius: BorderRadius.circular(16),
                              border: Border.all(
                                color: AppColors.accentYellow.withOpacity(0.2),
                                width: 2,
                              ),
                            ),
                            child: Column(
                              children: [
                                Text(
                                  rating.toStringAsFixed(1),
                                  style: GoogleFonts.nunito(
                                    fontSize: 24,
                                    fontWeight: FontWeight.w900,
                                    color: AppColors.accentYellow,
                                  ),
                                ),
                                const Row(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    Icon(Icons.star, size: 12, color: AppColors.accentYellow),
                                    Icon(Icons.star, size: 12, color: AppColors.accentYellow),
                                    Icon(Icons.star, size: 12, color: AppColors.accentYellow),
                                    Icon(Icons.star, size: 12, color: AppColors.accentYellow),
                                    Icon(Icons.star_half, size: 12, color: AppColors.accentYellow),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),

                    // Women-only banner
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Container(
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: AppColors.primary.withOpacity(0.1),
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(
                            color: AppColors.primary.withOpacity(0.2),
                            width: 2,
                          ),
                        ),
                        child: Row(
                          children: [
                            const Text('💖', style: TextStyle(fontSize: 24)),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'Women-only facility.',
                                    style: GoogleFonts.nunito(
                                      fontSize: 14,
                                      fontWeight: FontWeight.w700,
                                      color: AppColors.primary,
                                    ),
                                  ),
                                  Text(
                                    'Highly rated for safety and cleanliness.',
                                    style: GoogleFonts.nunito(
                                      fontSize: 14,
                                      fontWeight: FontWeight.w600,
                                      color: AppColors.textMedium,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),

                    const SizedBox(height: 24),

                    // What women rate here
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const SectionHeader(title: 'What women rate here', icon: Icons.bar_chart),
                          const SizedBox(height: 12),
                          _RatingRow(label: 'Cleanliness', value: 4.7, icon: Icons.cleaning_services),
                          const SizedBox(height: 10),
                          _RatingRow(label: 'Safety', value: 4.6, icon: Icons.shield),
                          const SizedBox(height: 10),
                          _RatingRow(label: 'Lighting', value: 4.5, icon: Icons.light_mode),
                          const SizedBox(height: 10),
                          _RatingRow(label: 'CCTV', value: 4.3, icon: Icons.videocam),
                          const SizedBox(height: 10),
                          _RatingRow(label: 'Water / Soap', value: 4.4, icon: Icons.water_drop),
                        ],
                      ),
                    ),

                    const SizedBox(height: 24),

                    // Verified Features
                    const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 24),
                      child: SectionHeader(title: 'Verified Features', icon: Icons.verified),
                    ),
                    const SizedBox(height: 16),

                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Column(
                        children: [
                          _FeatureCard(
                            emoji: '🛍️',
                            title: 'Sanitary Pad Vending Machine',
                            subtitle: vendingSubtitle(),
                            subtitleIcon: vendingWorking && vendingInStock ? Icons.check_circle : Icons.error,
                            gradientColors: [const Color(0xFFF9A8D4), const Color(0xFFEC4899)],
                          ),
                          const SizedBox(height: 16),
                          _FeatureCard(
                            emoji: '✨',
                            title: 'Cleanliness',
                            subtitle: 'Cleaned 10 mins ago',
                            subtitleIcon: Icons.cleaning_services,
                            gradientColors: [const Color(0xFF93C5FD), const Color(0xFF3B82F6)],
                          ),
                          const SizedBox(height: 16),
                          _FeatureCard(
                            emoji: '🛡️',
                            title: 'Safety & Privacy',
                            subtitle: 'Well-lit, Secure Locks',
                            subtitleIcon: Icons.security,
                            gradientColors: [const Color(0xFFC4B5FD), const Color(0xFF8B5CF6)],
                          ),
                          const SizedBox(height: 16),
                          _FeatureCard(
                            emoji: '📹',
                            title: 'CCTV & Lighting',
                            subtitle: 'CCTV nearby • Bright lights',
                            subtitleIcon: Icons.videocam,
                            gradientColors: [const Color(0xFF86EFAC), const Color(0xFF16A34A)],
                          ),
                          const SizedBox(height: 16),
                          _FeatureCard(
                            emoji: '🧼',
                            title: 'Water & Soap',
                            subtitle: 'Running water • Soap available',
                            subtitleIcon: Icons.water_drop,
                            gradientColors: [const Color(0xFF67E8F9), const Color(0xFF06B6D4)],
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 24),

                    // Vending machine details + fallback actions
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Container(
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(color: const Color(0xFFF1F5F9), width: 2),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                Text(
                                  'Pad availability',
                                  style: GoogleFonts.nunito(
                                    fontSize: 16,
                                    fontWeight: FontWeight.w900,
                                    color: AppColors.textDark,
                                  ),
                                ),
                                const Spacer(),
                                Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                                  decoration: BoxDecoration(
                                    color: (vendingWorking && vendingInStock)
                                        ? const Color(0xFF00C4B4).withOpacity(0.1)
                                        : AppColors.primary.withOpacity(0.1),
                                    borderRadius: BorderRadius.circular(999),
                                    border: Border.all(
                                      color: (vendingWorking && vendingInStock)
                                          ? const Color(0xFF00C4B4).withOpacity(0.2)
                                          : AppColors.primary.withOpacity(0.2),
                                    ),
                                  ),
                                  child: Text(
                                    vendingWorking && vendingInStock ? 'AVAILABLE' : 'NOT AVAILABLE',
                                    style: GoogleFonts.nunito(
                                      fontSize: 12,
                                      fontWeight: FontWeight.w900,
                                      color: vendingWorking && vendingInStock ? const Color(0xFF00C4B4) : AppColors.primary,
                                      letterSpacing: 1,
                                    ),
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 8),
                            Text(
                              hasPads
                                  ? 'Vending machine: ${vendingSubtitle()}'
                                  : 'This location does not have a vending machine listed yet.',
                              style: GoogleFonts.nunito(
                                fontSize: 14,
                                fontWeight: FontWeight.w700,
                                color: AppColors.textMedium,
                                height: 1.4,
                              ),
                            ),
                            if (brands.isNotEmpty) ...[
                              const SizedBox(height: 10),
                              Text(
                                'Brands: ${brands.join(', ')}',
                                style: GoogleFonts.nunito(
                                  fontSize: 14,
                                  fontWeight: FontWeight.w800,
                                  color: AppColors.textDark,
                                ),
                              ),
                            ],
                            const SizedBox(height: 14),
                            if (!vendingWorking || !vendingInStock || !hasPads) ...[
                              Row(
                                children: [
                                  Expanded(
                                    child: DuoButton(
                                      height: 48,
                                      label: 'ORDER (BLINKIT)',
                                      icon: Icons.shopping_bag,
                                      color: AppColors.primary,
                                      shadowColor: AppColors.primaryDark,
                                      onTap: () => launchExternal(blinkitSearchUrl),
                                    ),
                                  ),
                                  const SizedBox(width: 12),
                                  Expanded(
                                    child: DuoButton(
                                      height: 48,
                                      label: 'PHARMACY NEARBY',
                                      icon: Icons.local_pharmacy,
                                      color: AppColors.accentTeal,
                                      shadowColor: const Color(0xFF0F766E),
                                      textColor: AppColors.textDark,
                                      onTap: () => launchExternal(pharmacyMapsUrl),
                                    ),
                                  ),
                                ],
                              ),
                            ] else ...[
                              DuoButton(
                                height: 48,
                                label: 'REPORT STOCK / ISSUE',
                                icon: Icons.flag,
                                color: AppColors.accentBlue,
                                shadowColor: const Color(0xFF0B74A6),
                                onTap: () {
                                  ScaffoldMessenger.of(context).showSnackBar(
                                    const SnackBar(content: Text('Thanks! Reporting flow coming next.')),
                                  );
                                },
                              ),
                            ],
                          ],
                        ),
                      ),
                    ),

                    // Rate after visit banner
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(
                            color: AppColors.accentBlue,
                            width: 2,
                            strokeAlign: BorderSide.strokeAlignInside,
                          ),
                          color: AppColors.accentBlue.withOpacity(0.05),
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            const Icon(Icons.rate_review, color: AppColors.accentBlue, size: 24),
                            const SizedBox(width: 8),
                            RichText(
                              text: TextSpan(
                                children: [
                                  TextSpan(
                                    text: 'Rate after visit to earn ',
                                    style: GoogleFonts.nunito(
                                      fontSize: 14,
                                      fontWeight: FontWeight.w700,
                                      color: AppColors.textDark,
                                    ),
                                  ),
                                  TextSpan(
                                    text: '+20 Points',
                                    style: GoogleFonts.nunito(
                                      fontSize: 16,
                                      fontWeight: FontWeight.w800,
                                      color: AppColors.accentBlue,
                                    ),
                                  ),
                                  TextSpan(
                                    text: '!',
                                    style: GoogleFonts.nunito(
                                      fontSize: 14,
                                      fontWeight: FontWeight.w700,
                                      color: AppColors.textDark,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),

            // Bottom CTA
            Container(
              padding: const EdgeInsets.fromLTRB(24, 16, 24, 32),
              decoration: const BoxDecoration(
                color: Colors.white,
                border: Border(top: BorderSide(color: Color(0xFFF1F5F9), width: 2)),
              ),
              child: DuoButton(
                label: 'NAVIGATE NOW',
                icon: Icons.directions,
                color: AppColors.accentTeal,
                shadowColor: const Color(0xFF0F766E),
                textColor: AppColors.textDark,
                onTap: () => launchExternal(
                  'https://www.google.com/maps/dir/?api=1&destination=${Uri.encodeComponent(name)}',
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _FeatureCard extends StatelessWidget {
  final String emoji;
  final String title;
  final String subtitle;
  final IconData subtitleIcon;
  final List<Color> gradientColors;

  const _FeatureCard({
    required this.emoji,
    required this.title,
    required this.subtitle,
    required this.subtitleIcon,
    required this.gradientColors,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.accentTealLight,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: const Color(0xFF99F6E4), width: 2),
      ),
      child: Row(
        children: [
          Container(
            width: 56,
            height: 56,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: gradientColors,
              ),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: gradientColors[0].withOpacity(0.5)),
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
                    Icon(subtitleIcon, size: 16, color: AppColors.accentTeal),
                    const SizedBox(width: 4),
                    Text(
                      subtitle,
                      style: GoogleFonts.nunito(
                        fontSize: 15,
                        fontWeight: FontWeight.w700,
                        color: AppColors.accentTeal,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _RatingRow extends StatelessWidget {
  final String label;
  final double value;
  final IconData icon;

  const _RatingRow({
    required this.label,
    required this.value,
    required this.icon,
  });

  @override
  Widget build(BuildContext context) {
    final clamped = value.clamp(0, 5);
    final percent = clamped / 5;

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFF1F5F9), width: 2),
      ),
      child: Row(
        children: [
          Container(
            width: 38,
            height: 38,
            decoration: BoxDecoration(
              color: AppColors.accentBlue.withOpacity(0.08),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Icon(icon, color: AppColors.accentBlue, size: 20),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  style: GoogleFonts.nunito(
                    fontSize: 14,
                    fontWeight: FontWeight.w900,
                    color: AppColors.textDark,
                  ),
                ),
                const SizedBox(height: 6),
                ClipRRect(
                  borderRadius: BorderRadius.circular(999),
                  child: LinearProgressIndicator(
                    value: percent,
                    minHeight: 8,
                    backgroundColor: const Color(0xFFF1F5F9),
                    valueColor: const AlwaysStoppedAnimation(AppColors.accentBlue),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(width: 12),
          Text(
            clamped.toStringAsFixed(1),
            style: GoogleFonts.nunito(
              fontSize: 14,
              fontWeight: FontWeight.w900,
              color: AppColors.textDark,
            ),
          ),
        ],
      ),
    );
  }
}

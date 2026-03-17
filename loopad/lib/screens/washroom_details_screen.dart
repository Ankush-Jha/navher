import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../theme/app_colors.dart';
import '../widgets/duo_button.dart';
import '../widgets/progress_bar.dart';
import '../widgets/section_header.dart';

class WashroomDetailsScreen extends StatelessWidget {
  const WashroomDetailsScreen({super.key});

  @override
  Widget build(BuildContext context) {
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
                                        text: 'Nexus Mall\n',
                                        style: GoogleFonts.nunito(
                                          fontSize: 28,
                                          fontWeight: FontWeight.w800,
                                          color: AppColors.textDark,
                                          height: 1.1,
                                          letterSpacing: -0.5,
                                        ),
                                      ),
                                      TextSpan(
                                        text: 'Ground Floor, Near Gate 2',
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
                                  'Open until 11:00 PM • 120m away',
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
                                  '4.8',
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
                            title: 'Pad Vending Machine',
                            subtitle: 'Fully Stocked',
                            subtitleIcon: Icons.check_circle,
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
                        ],
                      ),
                    ),

                    const SizedBox(height: 24),

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
                onTap: () {},
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

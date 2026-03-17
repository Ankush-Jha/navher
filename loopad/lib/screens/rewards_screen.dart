import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../theme/app_colors.dart';

class RewardsScreen extends StatelessWidget {
  const RewardsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.backgroundLight,
      body: SafeArea(
        child: Column(
          children: [
            // Header
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 8, 20, 16),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  GestureDetector(
                    onTap: () => Navigator.maybePop(context),
                    child: Container(
                      width: 40, height: 40,
                      decoration: const BoxDecoration(shape: BoxShape.circle),
                      child: const Icon(Icons.arrow_back_ios_new, color: AppColors.textLight, size: 20),
                    ),
                  ),
                  Text(
                    'Rewards',
                    style: GoogleFonts.nunito(
                      fontSize: 20,
                      fontWeight: FontWeight.w800,
                      color: AppColors.textDark,
                    ),
                  ),
                  Container(
                    width: 40, height: 40,
                    decoration: BoxDecoration(
                      color: AppColors.primary.withOpacity(0.1),
                      shape: BoxShape.circle,
                    ),
                    child: const Center(
                      child: Text('🦊', style: TextStyle(fontSize: 20)),
                    ),
                  ),
                ],
              ),
            ),

            const Divider(height: 2, color: Color(0xFFF1F5F9)),

            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.only(bottom: 32),
                child: Column(
                  children: [
                    const SizedBox(height: 24),

                    // Points display
                    Center(
                      child: Column(
                        children: [
                          Container(
                            width: 96, height: 96,
                            decoration: BoxDecoration(
                              color: AppColors.accentYellow.withOpacity(0.1),
                              shape: BoxShape.circle,
                              border: Border.all(
                                color: AppColors.accentYellow,
                                width: 4,
                                strokeAlign: BorderSide.strokeAlignInside,
                              ),
                            ),
                            child: const Icon(
                              Icons.monetization_on,
                              size: 48,
                              color: AppColors.accentYellow,
                            ),
                          ),
                          const SizedBox(height: 16),
                          Text(
                            '1,250',
                            style: GoogleFonts.nunito(
                              fontSize: 32,
                              fontWeight: FontWeight.w800,
                              color: AppColors.textDark,
                              height: 1.1,
                              letterSpacing: -0.5,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            'FOX POINTS',
                            style: GoogleFonts.nunito(
                              fontSize: 14,
                              fontWeight: FontWeight.w700,
                              color: AppColors.textMedium,
                              letterSpacing: 3,
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 24),

                    // Encouragement banner
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Container(
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: AppColors.accentBlue.withOpacity(0.1),
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(
                            color: AppColors.accentBlue.withOpacity(0.2),
                            width: 2,
                          ),
                        ),
                        child: Row(
                          children: [
                            const Text('🦊', style: TextStyle(fontSize: 24)),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'You\'re doing great!',
                                    style: GoogleFonts.nunito(
                                      fontSize: 14,
                                      fontWeight: FontWeight.w700,
                                      color: AppColors.textDark,
                                    ),
                                  ),
                                  Text(
                                    'Earn 250 more points to unlock a free pad.',
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

                    // Redeem section header
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Row(
                        children: [
                          const Icon(Icons.card_giftcard, size: 18, color: AppColors.textLight),
                          const SizedBox(width: 8),
                          Text(
                            'REDEEM',
                            style: GoogleFonts.nunito(
                              fontSize: 15,
                              fontWeight: FontWeight.w700,
                              color: AppColors.textLight,
                              letterSpacing: 3,
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 16),

                    // Redeem cards
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Column(
                        children: [
                          _RewardCard(
                            emoji: '🩸',
                            title: 'Free Pad',
                            points: '1,500 pts',
                            gradientColors: [const Color(0xFFF9A8D4), const Color(0xFFEC4899)],
                            isLocked: true,
                          ),
                          const SizedBox(height: 16),
                          _RewardCard(
                            emoji: '☕',
                            title: 'Coffee Voucher',
                            points: '800 pts',
                            gradientColors: [const Color(0xFF86EFAC), const Color(0xFF22C55E)],
                            isLocked: false,
                          ),
                          const SizedBox(height: 16),
                          _RewardCard(
                            emoji: '🎫',
                            title: 'Movie Ticket 10% Off',
                            points: '500 pts',
                            gradientColors: [const Color(0xFF93C5FD), const Color(0xFF3B82F6)],
                            isLocked: false,
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
    );
  }
}

class _RewardCard extends StatelessWidget {
  final String emoji;
  final String title;
  final String points;
  final List<Color> gradientColors;
  final bool isLocked;

  const _RewardCard({
    required this.emoji,
    required this.title,
    required this.points,
    required this.gradientColors,
    required this.isLocked,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppColors.borderLight),
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
          Container(
            width: 56, height: 56,
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
                Text(
                  points,
                  style: GoogleFonts.nunito(
                    fontSize: 15,
                    fontWeight: FontWeight.w700,
                    color: AppColors.accentYellow,
                  ),
                ),
              ],
            ),
          ),
          if (isLocked)
            Container(
              width: 32, height: 32,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                border: Border.all(color: AppColors.borderSlate, width: 2),
              ),
              child: const Icon(Icons.lock, size: 20, color: AppColors.textLight),
            )
          else
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
              decoration: BoxDecoration(
                color: AppColors.primary,
                borderRadius: BorderRadius.circular(12),
              ),
              child: Text(
                'Claim',
                style: GoogleFonts.nunito(
                  fontSize: 14,
                  fontWeight: FontWeight.w700,
                  color: Colors.white,
                ),
              ),
            ),
        ],
      ),
    );
  }
}

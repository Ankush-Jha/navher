import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';
import '../theme/app_colors.dart';
import '../providers/auth_provider.dart';
import '../providers/rewards_provider.dart';
import '../services/rewards_service.dart';
import '../widgets/section_header.dart';

class RewardsScreen extends ConsumerWidget {
  const RewardsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final authState = ref.watch(authStateProvider);
    final userId = authState.valueOrNull?.uid ?? '';

    final foxPointsAsync = userId.isNotEmpty
        ? ref.watch(foxPointsProvider(userId))
        : const AsyncValue<int>.data(0);

    final catalog = ref.watch(rewardCatalogProvider);

    final points = foxPointsAsync.valueOrNull ?? 0;

    return Scaffold(
      backgroundColor: AppColors.backgroundLight,
      body: SafeArea(
        child: Column(
          children: [
            // ── Header ────────────────────────────────────────────────────────
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 8, 20, 16),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  GestureDetector(
                    onTap: () => Navigator.maybePop(context),
                    child: Container(
                      width: 40,
                      height: 40,
                      decoration: const BoxDecoration(shape: BoxShape.circle),
                      child: const Icon(
                        Icons.arrow_back_ios_new,
                        color: AppColors.textLight,
                        size: 20,
                      ),
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
                    width: 40,
                    height: 40,
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

                    // ── Fox Points badge ──────────────────────────────────────
                    Center(
                      child: Column(
                        children: [
                          Container(
                            width: 96,
                            height: 96,
                            decoration: BoxDecoration(
                              color: AppColors.accentYellow.withOpacity(0.1),
                              shape: BoxShape.circle,
                              border: Border.all(
                                color: AppColors.accentYellow,
                                width: 4,
                                strokeAlign: BorderSide.strokeAlignInside,
                              ),
                            ),
                            child: foxPointsAsync.isLoading
                                ? const Center(
                                    child: CircularProgressIndicator(
                                      strokeWidth: 2,
                                      color: AppColors.accentYellow,
                                    ),
                                  )
                                : const Icon(
                                    Icons.monetization_on,
                                    size: 48,
                                    color: AppColors.accentYellow,
                                  ),
                          ),
                          const SizedBox(height: 12),
                          Text(
                            foxPointsAsync.isLoading
                                ? '—'
                                : _formatPoints(points),
                            style: GoogleFonts.nunito(
                              fontSize: 48,
                              fontWeight: FontWeight.w900,
                              color: AppColors.textDark,
                              height: 1,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            'Fox Points',
                            style: GoogleFonts.nunito(
                              fontSize: 16,
                              fontWeight: FontWeight.w700,
                              color: AppColors.textMedium,
                            ),
                          ),
                          const SizedBox(height: 16),

                          // Progress bar toward Free Pad (1500 pts)
                          SizedBox(
                            width: 240,
                            child: Column(
                              children: [
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text(
                                      'Progress to Free Pad',
                                      style: GoogleFonts.nunito(
                                        fontSize: 12,
                                        fontWeight: FontWeight.w600,
                                        color: AppColors.textLight,
                                      ),
                                    ),
                                    Text(
                                      '${_formatPoints(points)}/1,500',
                                      style: GoogleFonts.nunito(
                                        fontSize: 12,
                                        fontWeight: FontWeight.w700,
                                        color: AppColors.accentYellow,
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 8),
                                ClipRRect(
                                  borderRadius: BorderRadius.circular(4),
                                  child: LinearProgressIndicator(
                                    value: (points / 1500).clamp(0.0, 1.0),
                                    backgroundColor:
                                        const Color(0xFFF1F5F9),
                                    color: AppColors.accentYellow,
                                    minHeight: 8,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 32),

                    // ── How to earn ───────────────────────────────────────────
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const SectionHeader(
                            title: 'How to Earn',
                            icon: Icons.star,
                          ),
                          const SizedBox(height: 12),
                          _EarnTile(
                            emoji: '⭐',
                            label: 'Write a review',
                            pts: '+20 pts',
                            color: AppColors.accentYellow,
                          ),
                          _EarnTile(
                            emoji: '📍',
                            label: 'Report washroom issue',
                            pts: '+10 pts',
                            color: AppColors.accentTeal,
                          ),
                          _EarnTile(
                            emoji: '🗺️',
                            label: 'Add new washroom',
                            pts: '+50 pts',
                            color: AppColors.primary,
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 32),

                    // ── Redeem section ────────────────────────────────────────
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Row(
                        children: [
                          const Icon(
                            Icons.card_giftcard,
                            size: 18,
                            color: AppColors.textLight,
                          ),
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

                    // Catalog cards
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Column(
                        children: [
                          for (int i = 0; i < catalog.length; i++) ...[
                            if (i > 0) const SizedBox(height: 16),
                            _RewardCard(
                              item: catalog[i],
                              userPoints: points,
                              onClaim: userId.isEmpty
                                  ? null
                                  : () => _handleRedeem(
                                        context,
                                        ref,
                                        userId,
                                        catalog[i],
                                      ),
                            ),
                          ]
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

  String _formatPoints(int pts) {
    if (pts >= 1000) {
      return '${(pts / 1000).toStringAsFixed(pts % 1000 == 0 ? 0 : 1)}k';
    }
    return pts.toString();
  }

  Future<void> _handleRedeem(
    BuildContext context,
    WidgetRef ref,
    String userId,
    RewardItem item,
  ) async {
    final confirm = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        title: Text(
          'Redeem ${item.emoji} ${item.name}?',
          style: GoogleFonts.nunito(fontWeight: FontWeight.w800),
        ),
        content: Text(
          'This will deduct ${item.pointsCost} Fox Points from your account.',
          style: GoogleFonts.nunito(),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(ctx).pop(false),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: AppColors.primary,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
            ),
            onPressed: () => Navigator.of(ctx).pop(true),
            child: Text(
              'Redeem',
              style: GoogleFonts.nunito(
                fontWeight: FontWeight.w700,
                color: Colors.white,
              ),
            ),
          ),
        ],
      ),
    );

    if (confirm != true) return;

    try {
      final svc = ref.read(rewardsServiceProvider);
      await svc.redeem(userId: userId, item: item);
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              '${item.emoji} ${item.name} redeemed! Check your email.',
              style: GoogleFonts.nunito(fontWeight: FontWeight.w700),
            ),
            backgroundColor: AppColors.accentTeal,
            behavior: SnackBarBehavior.floating,
          ),
        );
      }
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              e.toString().replaceFirst('Exception: ', ''),
              style: GoogleFonts.nunito(fontWeight: FontWeight.w700),
            ),
            backgroundColor: Colors.redAccent,
            behavior: SnackBarBehavior.floating,
          ),
        );
      }
    }
  }
}

// ── Earn tile ───────────────────────────────────────────────────────────────────

class _EarnTile extends StatelessWidget {
  final String emoji;
  final String label;
  final String pts;
  final Color color;

  const _EarnTile({
    required this.emoji,
    required this.label,
    required this.pts,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Row(
        children: [
          Text(emoji, style: const TextStyle(fontSize: 20)),
          const SizedBox(width: 12),
          Expanded(
            child: Text(
              label,
              style: GoogleFonts.nunito(
                fontSize: 15,
                fontWeight: FontWeight.w600,
                color: AppColors.textDark,
              ),
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            decoration: BoxDecoration(
              color: color.withOpacity(0.12),
              borderRadius: BorderRadius.circular(20),
            ),
            child: Text(
              pts,
              style: GoogleFonts.nunito(
                fontSize: 13,
                fontWeight: FontWeight.w800,
                color: color,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

// ── Reward catalog card ─────────────────────────────────────────────────────────

class _RewardCard extends StatelessWidget {
  final RewardItem item;
  final int userPoints;
  final VoidCallback? onClaim;

  const _RewardCard({
    required this.item,
    required this.userPoints,
    this.onClaim,
  });

  @override
  Widget build(BuildContext context) {
    final canClaim = userPoints >= item.pointsCost;

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
          // Emoji bubble
          Container(
            width: 56,
            height: 56,
            decoration: BoxDecoration(
              color: canClaim
                  ? AppColors.primary.withOpacity(0.12)
                  : const Color(0xFFF1F5F9),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(
                color: canClaim
                    ? AppColors.primary.withOpacity(0.3)
                    : const Color(0xFFE2E8F0),
              ),
            ),
            child: Center(
              child: Text(
                item.emoji,
                style: const TextStyle(fontSize: 28),
              ),
            ),
          ),
          const SizedBox(width: 16),

          // Name + cost
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  item.name,
                  style: GoogleFonts.nunito(
                    fontSize: 16,
                    fontWeight: FontWeight.w800,
                    color: AppColors.textDark,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  '${item.pointsCost} pts',
                  style: GoogleFonts.nunito(
                    fontSize: 14,
                    fontWeight: FontWeight.w700,
                    color: canClaim
                        ? AppColors.accentYellow
                        : AppColors.textLight,
                  ),
                ),
              ],
            ),
          ),

          // Claim / locked
          if (!canClaim)
            Container(
              width: 32,
              height: 32,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                border: Border.all(color: AppColors.borderSlate, width: 2),
              ),
              child: const Icon(
                Icons.lock,
                size: 20,
                color: AppColors.textLight,
              ),
            )
          else
            GestureDetector(
              onTap: onClaim,
              child: Container(
                padding:
                    const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
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
            ),
        ],
      ),
    );
  }
}

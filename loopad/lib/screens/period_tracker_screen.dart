import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';
import '../theme/app_colors.dart';
import '../providers/auth_provider.dart';
import '../providers/period_provider.dart';
import '../services/period_service.dart';
import '../models/period_data.dart';
import '../widgets/duo_button.dart';
import '../widgets/progress_bar.dart';
import '../widgets/section_header.dart';

class PeriodTrackerScreen extends ConsumerWidget {
  const PeriodTrackerScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final authState = ref.watch(authStateProvider);
    final userId = authState.valueOrNull?.uid ?? '';

    final cycleAsync = userId.isNotEmpty
        ? ref.watch(currentCycleProvider(userId))
        : const AsyncValue<PeriodData?>.data(null);

    return Scaffold(
      backgroundColor: AppColors.backgroundLight,
      body: SafeArea(
        child: Column(
          children: [
            // ── Progress bar + back ───────────────────────────────────────────
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 8, 20, 16),
              child: Row(
                children: [
                  GestureDetector(
                    onTap: () => Navigator.maybePop(context),
                    child: const SizedBox(
                      width: 40,
                      height: 40,
                      child: Icon(
                        Icons.arrow_back,
                        color: AppColors.textLight,
                        size: 24,
                      ),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: cycleAsync.when(
                      data: (cycle) {
                        final progress = cycle != null
                            ? (DateTime.now()
                                        .difference(cycle.cycleStart)
                                        .inDays /
                                    cycle.cycleLengthDays)
                                .clamp(0.0, 1.0)
                            : 0.0;
                        return ProgressBar(
                          progress: progress,
                          color: AppColors.accentTeal,
                          mascot: '🌸',
                        );
                      },
                      loading: () => const ProgressBar(
                        progress: 0,
                        color: AppColors.accentTeal,
                        mascot: '🌸',
                      ),
                      error: (_, __) => const ProgressBar(
                        progress: 0,
                        color: AppColors.accentTeal,
                        mascot: '🌸',
                      ),
                    ),
                  ),
                ],
              ),
            ),

            Expanded(
              child: cycleAsync.when(
                loading: () => const Center(
                  child: CircularProgressIndicator(color: AppColors.accentTeal),
                ),
                error: (e, _) => Center(
                  child: Text(
                    'Error: $e',
                    style: GoogleFonts.nunito(color: AppColors.textMedium),
                  ),
                ),
                data: (cycle) => _CycleBody(
                  cycle: cycle,
                  userId: userId,
                ),
              ),
            ),

            // ── Bottom CTA ────────────────────────────────────────────────────
            Container(
              padding: const EdgeInsets.fromLTRB(24, 16, 24, 32),
              decoration: const BoxDecoration(
                color: Colors.white,
                border: Border(
                  top: BorderSide(color: Color(0xFFF1F5F9), width: 2),
                ),
              ),
              child: cycleAsync.maybeWhen(
                data: (cycle) => DuoButton(
                  label: cycle == null ? 'START CYCLE' : 'LOG SYMPTOMS',
                  icon: cycle == null ? Icons.play_circle : Icons.add_circle,
                  onTap: () => cycle == null
                      ? _showStartCycleDialog(
                          context, WidgetRef_hack(ref), userId)
                      : _showSymptomPicker(context, ref, cycle),
                ),
                orElse: () => DuoButton(
                  label: 'LOG SYMPTOMS',
                  icon: Icons.add_circle,
                  onTap: () {},
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  // ── Start cycle dialog ──────────────────────────────────────────────────────
  void _showStartCycleDialog(
      BuildContext context, _RefWrap ref, String userId) {
    if (userId.isEmpty) return;
    showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        title: Text(
          'Start new cycle?',
          style: GoogleFonts.nunito(fontWeight: FontWeight.w800),
        ),
        content: Text(
          'Today will be set as Day 1 of your cycle.',
          style: GoogleFonts.nunito(),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(ctx).pop(),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: AppColors.accentTeal,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12)),
            ),
            onPressed: () async {
              Navigator.of(ctx).pop();
              final svc = ref.inner.read(periodServiceProvider);
              await svc.startCycle(
                  userId: userId, startDate: DateTime.now());
            },
            child: Text(
              'Start',
              style: GoogleFonts.nunito(
                  fontWeight: FontWeight.w700, color: Colors.white),
            ),
          ),
        ],
      ),
    );
  }

  // ── Symptom picker ──────────────────────────────────────────────────────────
  Future<void> _showSymptomPicker(
    BuildContext context,
    WidgetRef ref,
    PeriodData cycle,
  ) async {
    const symptoms = [
      '😴 Fatigue',
      '💧 Bloating',
      '🤕 Cramps',
      '😤 Mood swings',
      '🍫 Cravings',
      '😮 Headache',
    ];

    final chosen = await showModalBottomSheet<String>(
      context: context,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (ctx) => Padding(
        padding: const EdgeInsets.fromLTRB(24, 16, 24, 40),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Center(
              child: Container(
                width: 40,
                height: 4,
                margin: const EdgeInsets.only(bottom: 20),
                decoration: BoxDecoration(
                  color: const Color(0xFFE2E8F0),
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
            ),
            Text(
              'Log a symptom',
              style: GoogleFonts.nunito(
                fontSize: 20,
                fontWeight: FontWeight.w800,
                color: AppColors.textDark,
              ),
            ),
            const SizedBox(height: 16),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: [
                for (final s in symptoms)
                  ActionChip(
                    label: Text(
                      s,
                      style: GoogleFonts.nunito(
                        fontWeight: FontWeight.w600,
                        color: AppColors.textDark,
                      ),
                    ),
                    backgroundColor: AppColors.accentTeal.withOpacity(0.1),
                    side: BorderSide(
                        color: AppColors.accentTeal.withOpacity(0.3)),
                    onPressed: () => Navigator.of(ctx).pop(s),
                  ),
              ],
            ),
          ],
        ),
      ),
    );

    if (chosen == null || !context.mounted) return;

    try {
      final svc = ref.read(periodServiceProvider);
      await svc.logSymptom(
        periodDocId: cycle.id,
        symptomName: chosen,
      );
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          content: Text(
            '$chosen logged!',
            style: GoogleFonts.nunito(fontWeight: FontWeight.w700),
          ),
          backgroundColor: AppColors.accentTeal,
          behavior: SnackBarBehavior.floating,
        ));
      }
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          content: Text('Error: $e',
              style: GoogleFonts.nunito(fontWeight: FontWeight.w700)),
          backgroundColor: Colors.redAccent,
          behavior: SnackBarBehavior.floating,
        ));
      }
    }
  }
}

// Small hack-wrapper so we can pass ref into a sync function ─────────────────
class _RefWrap {
  final WidgetRef inner;
  const _RefWrap(this.inner);
}

// ignore: non_constant_identifier_names
_RefWrap WidgetRef_hack(WidgetRef r) => _RefWrap(r);

// Extension so the bottom button can call ref without a wrapper ───────────────
extension on PeriodTrackerScreen {
  // (intentionally empty – extension target for the _showStartCycleDialog wrap)
}

// ── Main body when we have data ──────────────────────────────────────────────────

class _CycleBody extends StatelessWidget {
  final PeriodData? cycle;
  final String userId;

  const _CycleBody({required this.cycle, required this.userId});

  @override
  Widget build(BuildContext context) {
    if (cycle == null) {
      return _NoCycleState(userId: userId);
    }

    final now = DateTime.now();
    final dayOfCycle =
        now.difference(cycle!.cycleStart).inDays + 1; // 1-indexed
    final daysLeft = cycle!.daysUntilNext;
    final phaseLabel = _phaseLabel(dayOfCycle, cycle!.cycleLengthDays);
    final phaseEmoji = _phaseEmoji(dayOfCycle, cycle!.cycleLengthDays);
    final progressFraction =
        (dayOfCycle / cycle!.cycleLengthDays).clamp(0.0, 1.0);

    return SingleChildScrollView(
      padding: const EdgeInsets.only(bottom: 100),
      child: Column(
        children: [
          // ── Title block ─────────────────────────────────────────────────────
          Padding(
            padding: const EdgeInsets.fromLTRB(24, 8, 24, 24),
            child: RichText(
              textAlign: TextAlign.center,
              text: TextSpan(
                children: [
                  TextSpan(
                    text: 'Day $dayOfCycle\n',
                    style: GoogleFonts.nunito(
                      fontSize: 32,
                      fontWeight: FontWeight.w800,
                      color: AppColors.textDark,
                      height: 1.1,
                      letterSpacing: -0.5,
                    ),
                  ),
                  TextSpan(
                    text: daysLeft > 0
                        ? '$daysLeft days until next period'
                        : daysLeft == 0
                            ? 'Period expected today!'
                            : 'Period is ${-daysLeft} day(s) late',
                    style: GoogleFonts.nunito(
                      fontSize: 20,
                      fontWeight: FontWeight.w800,
                      color: daysLeft <= 0
                          ? const Color(0xFFEC4899)
                          : AppColors.primary,
                      height: 1.5,
                    ),
                  ),
                ],
              ),
            ),
          ),

          // ── Cycle ring ─────────────────────────────────────────────────────
          Center(
            child: SizedBox(
              width: 192,
              height: 192,
              child: CustomPaint(
                painter: _CycleRingPainter(progress: progressFraction),
                child: Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(phaseEmoji,
                          style: const TextStyle(fontSize: 48)),
                      const SizedBox(height: 4),
                      Text(
                        phaseLabel,
                        style: GoogleFonts.nunito(
                          fontSize: 14,
                          fontWeight: FontWeight.w700,
                          color: AppColors.textDark,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),

          const SizedBox(height: 32),

          // ── Logged symptoms ─────────────────────────────────────────────────
          if (cycle!.symptoms.isNotEmpty) ...[
            const Padding(
              padding: EdgeInsets.symmetric(horizontal: 24),
              child: SectionHeader(
                  title: 'Today\'s Symptoms', icon: Icons.favorite_border),
            ),
            const SizedBox(height: 12),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: Wrap(
                spacing: 8,
                runSpacing: 8,
                children: [
                  for (final s in cycle!.symptoms.reversed.take(6))
                    Chip(
                      label: Text(
                        s.name,
                        style: GoogleFonts.nunito(
                          fontWeight: FontWeight.w600,
                          color: AppColors.textDark,
                          fontSize: 13,
                        ),
                      ),
                      backgroundColor: AppColors.accentTeal.withOpacity(0.1),
                      side: BorderSide(
                          color: AppColors.accentTeal.withOpacity(0.3)),
                    ),
                ],
              ),
            ),
            const SizedBox(height: 32),
          ],

          // ── Daily insights ──────────────────────────────────────────────────
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 24),
            child:
                SectionHeader(title: 'Daily Insights', icon: Icons.insights),
          ),
          const SizedBox(height: 16),

          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24),
            child: Column(
              children: _insightsForPhase(phaseLabel),
            ),
          ),
        ],
      ),
    );
  }

  String _phaseLabel(int day, int cycleLen) {
    final pct = day / cycleLen;
    if (day <= 5) return 'Menstruation';
    if (pct < 0.43) return 'Follicular';
    if (pct < 0.57) return 'Ovulation';
    return 'Luteal (PMS)';
  }

  String _phaseEmoji(int day, int cycleLen) {
    final label = _phaseLabel(day, cycleLen);
    switch (label) {
      case 'Menstruation':
        return '🌺';
      case 'Follicular':
        return '🌱';
      case 'Ovulation':
        return '💫';
      default:
        return '✨';
    }
  }

  List<Widget> _insightsForPhase(String phase) {
    final rows = switch (phase) {
      'Menstruation' => [
          const _InsightRow(
            emoji: '💧',
            title: 'Hydration',
            subtitle: 'Drink 8+ glasses today',
            colors: [Color(0xFFF9A8D4), Color(0xFFEC4899)],
          ),
          const _InsightRow(
            emoji: '🛌',
            title: 'Rest',
            subtitle: 'Extra sleep is okay!',
            colors: [Color(0xFF93C5FD), Color(0xFF3B82F6)],
          ),
          const _InsightRow(
            emoji: '🍫',
            title: 'Cravings',
            subtitle: 'Dark chocolate helps with cramps',
            colors: [Color(0xFFFCD34D), Color(0xFFF59E0B)],
          ),
        ],
      'Follicular' => [
          const _InsightRow(
            emoji: '🏃‍♀️',
            title: 'Activity',
            subtitle: 'Great time for cardio & strength',
            colors: [Color(0xFF5EEAD4), Color(0xFF14B8A6)],
          ),
          const _InsightRow(
            emoji: '🥗',
            title: 'Nutrition',
            subtitle: 'Eat iron-rich foods',
            colors: [Color(0xFF86EFAC), Color(0xFF22C55E)],
          ),
          const _InsightRow(
            emoji: '🧠',
            title: 'Focus',
            subtitle: 'Peak cognitive energy!',
            colors: [Color(0xFFFCA5A5), Color(0xFFEF4444)],
          ),
        ],
      'Ovulation' => [
          const _InsightRow(
            emoji: '💫',
            title: 'Peak Energy',
            subtitle: 'You feel amazing right now',
            colors: [Color(0xFFFCD34D), Color(0xFFF59E0B)],
          ),
          const _InsightRow(
            emoji: '🗣️',
            title: 'Social',
            subtitle: 'Great day for meetings',
            colors: [Color(0xFF93C5FD), Color(0xFF3B82F6)],
          ),
          const _InsightRow(
            emoji: '🧘‍♀️',
            title: 'Mindfulness',
            subtitle: 'Channel this energy intentionally',
            colors: [Color(0xFF5EEAD4), Color(0xFF14B8A6)],
          ),
        ],
      _ => [
          const _InsightRow(
            emoji: '💧',
            title: 'Hydration',
            subtitle: 'Drink 8 glasses today',
            colors: [Color(0xFFF9A8D4), Color(0xFFEC4899)],
          ),
          const _InsightRow(
            emoji: '🧘‍♀️',
            title: 'Activity',
            subtitle: 'Gentle yoga recommended',
            colors: [Color(0xFF5EEAD4), Color(0xFF14B8A6)],
          ),
          const _InsightRow(
            emoji: '🍫',
            title: 'Cravings',
            subtitle: 'Dark chocolate helps!',
            colors: [Color(0xFFFCD34D), Color(0xFFF59E0B)],
          ),
        ],
    };

    return [
      for (int i = 0; i < rows.length; i++) ...[
        if (i > 0) const SizedBox(height: 16),
        rows[i],
      ]
    ];
  }
}

// ── No-cycle placeholder ─────────────────────────────────────────────────────

class _NoCycleState extends StatelessWidget {
  final String userId;
  const _NoCycleState({required this.userId});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 40),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text('🌸', style: TextStyle(fontSize: 64)),
            const SizedBox(height: 16),
            Text(
              'No cycle tracked yet',
              textAlign: TextAlign.center,
              style: GoogleFonts.nunito(
                fontSize: 22,
                fontWeight: FontWeight.w800,
                color: AppColors.textDark,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'Tap START CYCLE below to begin tracking today.',
              textAlign: TextAlign.center,
              style: GoogleFonts.nunito(
                fontSize: 15,
                fontWeight: FontWeight.w600,
                color: AppColors.textMedium,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ── Cycle ring painter ────────────────────────────────────────────────────────

class _CycleRingPainter extends CustomPainter {
  final double progress;
  const _CycleRingPainter({this.progress = 0.8});

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = size.width / 2 - 12;
    const strokeWidth = 12.0;

    // Background ring
    final bgPaint = Paint()
      ..color = AppColors.accentTeal.withOpacity(0.15)
      ..style = PaintingStyle.stroke
      ..strokeWidth = strokeWidth
      ..strokeCap = StrokeCap.round;
    canvas.drawCircle(center, radius, bgPaint);

    // Progress arc
    final progressPaint = Paint()
      ..color = AppColors.accentTeal
      ..style = PaintingStyle.stroke
      ..strokeWidth = strokeWidth
      ..strokeCap = StrokeCap.round;

    const startAngle = -math.pi / 2;
    final sweepAngle = 2 * math.pi * progress;

    canvas.drawArc(
      Rect.fromCircle(center: center, radius: radius),
      startAngle,
      sweepAngle,
      false,
      progressPaint,
    );
  }

  @override
  bool shouldRepaint(_CycleRingPainter old) => old.progress != progress;
}

// ── Insight card row ──────────────────────────────────────────────────────────

class _InsightRow extends StatelessWidget {
  final String emoji;
  final String title;
  final String subtitle;
  final List<Color> colors;

  const _InsightRow({
    required this.emoji,
    required this.title,
    required this.subtitle,
    required this.colors,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFE5E7EB), width: 2),
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
            width: 56,
            height: 56,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: colors,
              ),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: colors[0].withOpacity(0.5)),
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
                  subtitle,
                  style: GoogleFonts.nunito(
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                    color: AppColors.textMedium,
                  ),
                ),
              ],
            ),
          ),
          const Icon(Icons.chevron_right, color: AppColors.textLight),
        ],
      ),
    );
  }
}

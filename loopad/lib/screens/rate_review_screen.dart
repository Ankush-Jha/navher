import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../theme/app_colors.dart';

/// RateReviewScreen
/// Matches Stitch pink Duolingo system exactly:
/// - White (#FFFFFF) scaffold background
/// - Place header card (notion-card style, with blue badge)
/// - ★ star rating row — interactive, amber stars
/// - Tag chips row: Clean / Safe / Well-Lit / Private / Has Pads
///   Selected: pink bg, extrabold white. Unselected: slate border.
/// - Multiline text field (notion-card)
/// - Full-width pink "SUBMIT REVIEW" Duolingo button with flat shadow
/// - "+50 Points" yellow dashed banner (matching Rewards screen style)
class RateReviewScreen extends StatefulWidget {
  const RateReviewScreen({super.key});

  @override
  State<RateReviewScreen> createState() => _RateReviewScreenState();
}

class _RateReviewScreenState extends State<RateReviewScreen> {
  int _starRating = 0;
  final Set<String> _selected = {};
  final _reviewCtrl = TextEditingController();
  bool _pressed = false;
  bool _submitted = false;

  static const _tags = [
    'Clean',
    'Safe',
    'Well-Lit',
    'Private',
    'Has Pads',
  ];

  @override
  void dispose() {
    _reviewCtrl.dispose();
    super.dispose();
  }

  void _submit() {
    if (_starRating == 0) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content: Text('Please select a star rating first!',
            style: GoogleFonts.nunito(fontWeight: FontWeight.w800)),
        backgroundColor: AppColors.primaryDark,
        behavior: SnackBarBehavior.floating,
        shape:
            RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      ));
      return;
    }

    setState(() => _submitted = true);

    ScaffoldMessenger.of(context).showSnackBar(SnackBar(
      content: Text('⭐ Review submitted! You earned +50 Fox Points!',
          style: GoogleFonts.nunito(fontWeight: FontWeight.w800)),
      backgroundColor: const Color(0xFFFFC800),
      behavior: SnackBarBehavior.floating,
      shape:
          RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
    ));

    Future.delayed(const Duration(milliseconds: 1200), () {
      if (mounted) Navigator.pop(context);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Column(
          children: [
            // Top nav
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              child: Row(
                children: [
                  IconButton(
                    icon: const Icon(Icons.close,
                        color: Color(0xFF1E293B), size: 22),
                    onPressed: () => Navigator.pop(context),
                  ),
                  // Progress bar — matches pad delivery flow (2/3 done)
                  Expanded(
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(99),
                      child: const LinearProgressIndicator(
                        value: 0.67,
                        backgroundColor: Color(0xFFF1F5F9),
                        valueColor: AlwaysStoppedAnimation<Color>(
                            AppColors.accentGreen),
                        minHeight: 10,
                      ),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      color: AppColors.primary.withOpacity(0.10),
                      shape: BoxShape.circle,
                    ),
                    child: const Center(
                        child: Text('🦊', style: TextStyle(fontSize: 20))),
                  ),
                  const SizedBox(width: 8),
                ],
              ),
            ),

            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const SizedBox(height: 8),

                    // Big heading — matching Stitch "Emergency Pads Needed?" style
                    RichText(
                      text: TextSpan(
                        children: [
                          TextSpan(
                            text: 'How was this\n',
                            style: GoogleFonts.nunito(
                              fontSize: 28,
                              fontWeight: FontWeight.w900,
                              color: const Color(0xFF1E293B),
                              letterSpacing: -0.5,
                              height: 1.1,
                            ),
                          ),
                          TextSpan(
                            text: 'Safe Space?',
                            style: GoogleFonts.nunito(
                              fontSize: 28,
                              fontWeight: FontWeight.w900,
                              color: AppColors.primary,
                              letterSpacing: -0.5,
                              height: 1.1,
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 20),

                    // Place card — notion-card with blue "Has Pads" badge
                    Container(
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(
                            color: const Color(0xFFE5E7EB), width: 1.5),
                        boxShadow: const [
                          BoxShadow(
                            color: Color(0x08000000),
                            offset: Offset(0, 2),
                            blurRadius: 8,
                          ),
                        ],
                      ),
                      child: Row(
                        children: [
                          Container(
                            width: 50,
                            height: 50,
                            decoration: BoxDecoration(
                              color: AppColors.accentBlue.withOpacity(0.10),
                              shape: BoxShape.circle,
                            ),
                            child: const Center(
                                child: Text('🚽',
                                    style: TextStyle(fontSize: 24))),
                          ),
                          const SizedBox(width: 14),
                          Expanded(
                            child: Column(
                              crossAxisAlignment:
                                  CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'The Oberoi Hotel',
                                  style: GoogleFonts.nunito(
                                    fontSize: 16,
                                    fontWeight: FontWeight.w900,
                                    color: const Color(0xFF1E293B),
                                  ),
                                ),
                                const SizedBox(height: 2),
                                Text(
                                  'Hotel Washroom • Ground Floor',
                                  style: GoogleFonts.nunito(
                                    fontSize: 13,
                                    fontWeight: FontWeight.w600,
                                    color: const Color(0xFF94A3B8),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          // "Has Pads" badge — pink, matching Stitch card badge
                          Container(
                            padding: const EdgeInsets.symmetric(
                                horizontal: 10, vertical: 5),
                            decoration: BoxDecoration(
                              color: AppColors.primary.withOpacity(0.10),
                              borderRadius: BorderRadius.circular(99),
                              border: Border.all(
                                  color: AppColors.primary.withOpacity(0.2)),
                            ),
                            child: Text(
                              'Has Pads',
                              style: GoogleFonts.nunito(
                                fontSize: 11,
                                fontWeight: FontWeight.w900,
                                color: AppColors.primary,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 24),

                    // Star rating row — amber filled / outline
                    Center(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: List.generate(5, (i) {
                          final filled = i < _starRating;
                          return GestureDetector(
                            onTap: () =>
                                setState(() => _starRating = i + 1),
                            child: Padding(
                              padding: const EdgeInsets.symmetric(
                                  horizontal: 6),
                              child: Icon(
                                filled ? Icons.star : Icons.star_border,
                                color: filled
                                    ? const Color(0xFFFFC800) // Duolingo yellow
                                    : const Color(0xFFCBD5E1),
                                size: 44,
                              ),
                            ),
                          );
                        }),
                      ),
                    ),

                    const SizedBox(height: 8),

                    // Rating label
                    Center(
                      child: Text(
                        _starRating == 0
                            ? 'Tap to rate'
                            : _starRating == 5
                                ? 'Amazing!'
                                : _starRating >= 4
                                    ? 'Great!'
                                    : _starRating >= 3
                                        ? 'Okay'
                                        : 'Not great',
                        style: GoogleFonts.nunito(
                          fontSize: 15,
                          fontWeight: FontWeight.w700,
                          color: _starRating == 0
                              ? const Color(0xFF94A3B8)
                              : const Color(0xFFFFC800),
                        ),
                      ),
                    ),

                    const SizedBox(height: 24),

                    // Tag chips section label
                    Text(
                      'What stood out?',
                      style: GoogleFonts.nunito(
                        fontSize: 15,
                        fontWeight: FontWeight.w800,
                        color: const Color(0xFF64748B),
                        letterSpacing: 0.2,
                      ),
                    ),

                    const SizedBox(height: 10),

                    // Tag chips — matching Stitch filter pill style (pill/rounded-full)
                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children: _tags.map((tag) {
                        final sel = _selected.contains(tag);
                        return GestureDetector(
                          onTap: () => setState(() => sel
                              ? _selected.remove(tag)
                              : _selected.add(tag)),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 120),
                            padding: const EdgeInsets.symmetric(
                                horizontal: 16, vertical: 10),
                            decoration: BoxDecoration(
                              color: sel ? AppColors.primary : Colors.white,
                              borderRadius: BorderRadius.circular(99),
                              border: Border.all(
                                color: sel
                                    ? AppColors.primary
                                    : const Color(0xFFE5E7EB),
                                width: sel ? 0 : 1.5,
                              ),
                              boxShadow: sel
                                  ? [
                                      BoxShadow(
                                        color: AppColors.primaryDark,
                                        offset: const Offset(0, 3),
                                        blurRadius: 0,
                                      ),
                                    ]
                                  : const [
                                      BoxShadow(
                                        color: Color(0x08000000),
                                        offset: Offset(0, 2),
                                        blurRadius: 4,
                                      ),
                                    ],
                            ),
                            child: Text(
                              tag,
                              style: GoogleFonts.nunito(
                                fontSize: 14,
                                fontWeight: FontWeight.w800,
                                color: sel
                                    ? Colors.white
                                    : const Color(0xFF475569),
                              ),
                            ),
                          ),
                        );
                      }).toList(),
                    ),

                    const SizedBox(height: 24),

                    // Review text field — notion-card style, multiline
                    TextFormField(
                      controller: _reviewCtrl,
                      maxLines: 4,
                      style: GoogleFonts.nunito(
                        fontSize: 15,
                        fontWeight: FontWeight.w600,
                        color: const Color(0xFF1E293B),
                      ),
                      decoration: InputDecoration(
                        hintText:
                            'Share more details (optional)…',
                        hintStyle: GoogleFonts.nunito(
                          fontSize: 15,
                          fontWeight: FontWeight.w600,
                          color: const Color(0xFF94A3B8),
                        ),
                        filled: true,
                        fillColor: Colors.white,
                        contentPadding: const EdgeInsets.all(16),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(16),
                          borderSide: const BorderSide(
                              color: Color(0xFFE5E7EB), width: 1.5),
                        ),
                        enabledBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(16),
                          borderSide: const BorderSide(
                              color: Color(0xFFE5E7EB), width: 1.5),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(16),
                          borderSide: const BorderSide(
                              color: AppColors.primary, width: 2.0),
                        ),
                      ),
                    ),

                    const SizedBox(height: 20),

                    // +50 Points banner — yellow dashed, matching Rewards screen
                    Container(
                      padding: const EdgeInsets.symmetric(
                          vertical: 14, horizontal: 16),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFEFCE8), // yellow-50
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(
                          color: const Color(0xFFFFC800),
                          width: 2,
                          strokeAlign: BorderSide.strokeAlignInside,
                          // dash via custom painter omitted for simplicity
                        ),
                      ),
                      child: Row(
                        children: [
                          const Text('⭐',
                              style: TextStyle(fontSize: 22)),
                          const SizedBox(width: 10),
                          Text.rich(TextSpan(
                            style: GoogleFonts.nunito(
                              fontSize: 14,
                              fontWeight: FontWeight.w700,
                              color: const Color(0xFF713F12), // amber-900
                            ),
                            children: [
                              const TextSpan(text: 'Earn '),
                              TextSpan(
                                text: '+50 Points',
                                style: GoogleFonts.nunito(
                                  fontSize: 15,
                                  fontWeight: FontWeight.w900,
                                  color: const Color(0xFFFFC800),
                                ),
                              ),
                              const TextSpan(text: ' for this review!'),
                            ],
                          )),
                        ],
                      ),
                    ),

                    const SizedBox(height: 28),

                    // SUBMIT REVIEW — full-width pink Duolingo button
                    GestureDetector(
                      onTapDown: (_) => setState(() => _pressed = true),
                      onTapUp: (_) {
                        setState(() => _pressed = false);
                        _submit();
                      },
                      onTapCancel: () => setState(() => _pressed = false),
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 80),
                        transform: Matrix4.translationValues(
                            0, _pressed ? 4 : 0, 0),
                        height: 58,
                        decoration: BoxDecoration(
                          color: _submitted
                              ? AppColors.accentGreen
                              : AppColors.primary,
                          borderRadius: BorderRadius.circular(16),
                          boxShadow: _pressed
                              ? []
                              : [
                                  BoxShadow(
                                    color: _submitted
                                        ? const Color(0xFF3A8C00)
                                        : AppColors.primaryDark,
                                    offset: const Offset(0, 4),
                                    blurRadius: 0,
                                  ),
                                ],
                        ),
                        child: Center(
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Icon(
                                _submitted ? Icons.check : Icons.send_outlined,
                                color: Colors.white,
                                size: 20,
                              ),
                              const SizedBox(width: 10),
                              Text(
                                _submitted
                                    ? 'REVIEW SUBMITTED!'
                                    : 'SUBMIT REVIEW',
                                style: GoogleFonts.nunito(
                                  fontSize: 18,
                                  fontWeight: FontWeight.w900,
                                  color: Colors.white,
                                  letterSpacing: 1.0,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),

                    const SizedBox(height: 48),
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

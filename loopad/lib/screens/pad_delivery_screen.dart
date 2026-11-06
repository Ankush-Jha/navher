import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';
import '../theme/app_colors.dart';
import '../widgets/duo_button.dart';
import '../widgets/progress_bar.dart';
import '../widgets/section_header.dart';
import '../widgets/notion_card.dart';

class PadDeliveryScreen extends StatefulWidget {
  const PadDeliveryScreen({super.key});

  @override
  State<PadDeliveryScreen> createState() => _PadDeliveryScreenState();
}

class _PadDeliveryScreenState extends State<PadDeliveryScreen> {
  int _selectedPartner = 0;

  static const _partnerUrls = <int, String>{
    0: 'https://blinkit.com/s/?q=sanitary%20pads',
    1: 'https://www.zeptonow.com/search?query=sanitary%20pads',
    2: 'https://www.swiggy.com/instamart/search?query=sanitary%20pads',
  };

  Future<void> _launchPartner() async {
    final url = _partnerUrls[_selectedPartner] ?? _partnerUrls[0]!;
    final uri = Uri.parse(url);
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication) && mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Could not open delivery partner')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.backgroundLight,
      body: SafeArea(
        child: Column(
          children: [
            // Progress bar area
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 8, 20, 16),
              child: Row(
                children: [
                  GestureDetector(
                    onTap: () => Navigator.maybePop(context),
                    child: Container(
                      width: 40,
                      height: 40,
                      decoration: const BoxDecoration(shape: BoxShape.circle),
                      child: const Icon(Icons.close, color: AppColors.textLight, size: 24),
                    ),
                  ),
                  const SizedBox(width: 12),
                  const Expanded(
                    child: ProgressBar(progress: 0.66, mascot: '🦊'),
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
                    // Title
                    Padding(
                      padding: const EdgeInsets.fromLTRB(24, 8, 24, 16),
                      child: RichText(
                        text: TextSpan(
                          children: [
                            TextSpan(
                              text: 'Emergency Pads Needed?\n',
                              style: GoogleFonts.nunito(
                                fontSize: 28,
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
                    ),

                    // Cycle insight banner
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
                            const Text('💧', style: TextStyle(fontSize: 24)),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    'Your cycle suggests high need.',
                                    style: GoogleFonts.nunito(
                                      fontSize: 14,
                                      fontWeight: FontWeight.w700,
                                      color: AppColors.textDark,
                                    ),
                                  ),
                                  const SizedBox(height: 2),
                                  Text(
                                    'Orders arrive in discreet packaging.',
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

                    // Section header
                    const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 24),
                      child: SectionHeader(
                        title: 'Delivery Partners',
                        icon: Icons.storefront,
                      ),
                    ),
                    const SizedBox(height: 16),

                    // Delivery partner cards
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Column(
                        children: [
                          _DeliveryPartnerCard(
                            name: 'Blinkit',
                            emoji: '🛍️',
                            gradientColors: [const Color(0xFFFCD34D), const Color(0xFFF59E0B)],
                            time: '15 mins',
                            price: '₹85',
                            isSelected: _selectedPartner == 0,
                            isFastest: true,
                            onTap: () => setState(() => _selectedPartner = 0),
                          ),
                          const SizedBox(height: 16),
                          _DeliveryPartnerCard(
                            name: 'Zepto',
                            emoji: '⚡',
                            gradientColors: [const Color(0xFFC084FC), const Color(0xFF9333EA)],
                            time: '18 mins',
                            price: '₹89',
                            isSelected: _selectedPartner == 1,
                            onTap: () => setState(() => _selectedPartner = 1),
                          ),
                          const SizedBox(height: 16),
                          _DeliveryPartnerCard(
                            name: 'Instamart',
                            emoji: '🛒',
                            gradientColors: [const Color(0xFFFB923C), const Color(0xFFEA580C)],
                            time: '20 mins',
                            price: '₹95',
                            isSelected: _selectedPartner == 2,
                            onTap: () => setState(() => _selectedPartner = 2),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 24),

                    // Points banner
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 24),
                      child: Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(
                            color: AppColors.accentYellow,
                            width: 2,
                            strokeAlign: BorderSide.strokeAlignInside,
                          ),
                          color: AppColors.accentYellow.withOpacity(0.05),
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            const Icon(Icons.stars, color: AppColors.accentYellow, size: 24),
                            const SizedBox(width: 8),
                            RichText(
                              text: TextSpan(
                                children: [
                                  TextSpan(
                                    text: 'Earn ',
                                    style: GoogleFonts.nunito(
                                      fontSize: 14,
                                      fontWeight: FontWeight.w700,
                                      color: AppColors.textDark,
                                    ),
                                  ),
                                  TextSpan(
                                    text: '+50 Points',
                                    style: GoogleFonts.nunito(
                                      fontSize: 16,
                                      fontWeight: FontWeight.w800,
                                      color: AppColors.accentYellow,
                                    ),
                                  ),
                                  TextSpan(
                                    text: ' for this order!',
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
                label: 'ORDER SANITARY PADS',
                icon: Icons.rocket_launch,
                onTap: _launchPartner,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _DeliveryPartnerCard extends StatelessWidget {
  final String name;
  final String emoji;
  final List<Color> gradientColors;
  final String time;
  final String price;
  final bool isSelected;
  final bool isFastest;
  final VoidCallback onTap;

  const _DeliveryPartnerCard({
    required this.name,
    required this.emoji,
    required this.gradientColors,
    required this.time,
    required this.price,
    required this.isSelected,
    this.isFastest = false,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          AnimatedContainer(
            duration: const Duration(milliseconds: 200),
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(
                color: isSelected ? AppColors.accentGreen : AppColors.borderLight,
                width: isSelected ? 2 : 1,
              ),
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
                      colors: gradientColors,
                    ),
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(
                      color: gradientColors[0].withOpacity(0.5),
                    ),
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
                        name,
                        style: GoogleFonts.nunito(
                          fontSize: 18,
                          fontWeight: FontWeight.w800,
                          color: AppColors.textDark,
                        ),
                      ),
                      const SizedBox(height: 2),
                      Row(
                        children: [
                          Icon(
                            Icons.timer,
                            size: 16,
                            color: isSelected ? AppColors.accentGreen : AppColors.textMedium,
                          ),
                          const SizedBox(width: 4),
                          Text(
                            time,
                            style: GoogleFonts.nunito(
                              fontSize: 15,
                              fontWeight: FontWeight.w700,
                              color: isSelected ? AppColors.accentGreen : AppColors.textMedium,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Text(
                      price,
                      style: GoogleFonts.nunito(
                        fontSize: 20,
                        fontWeight: FontWeight.w800,
                        color: AppColors.textDark,
                      ),
                    ),
                    const SizedBox(height: 4),
                    AnimatedContainer(
                      duration: const Duration(milliseconds: 200),
                      width: 24,
                      height: 24,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: isSelected ? AppColors.accentGreen : Colors.transparent,
                        border: Border.all(
                          color: isSelected ? AppColors.accentGreen : AppColors.borderSlate,
                          width: 2,
                        ),
                      ),
                      child: isSelected
                          ? const Icon(Icons.check, color: Colors.white, size: 16)
                          : null,
                    ),
                  ],
                ),
              ],
            ),
          ),
          if (isFastest)
            Positioned(
              top: -12,
              right: 16,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                decoration: BoxDecoration(
                  color: AppColors.accentGreen,
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: Colors.white, width: 2),
                  boxShadow: const [
                    BoxShadow(
                      color: Color(0x1A000000),
                      offset: Offset(0, 2),
                      blurRadius: 4,
                    ),
                  ],
                ),
                child: Text(
                  'FASTEST',
                  style: GoogleFonts.nunito(
                    fontSize: 11,
                    fontWeight: FontWeight.w800,
                    color: Colors.white,
                    letterSpacing: 1,
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}

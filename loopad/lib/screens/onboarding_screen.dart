import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../theme/app_colors.dart';
import '../widgets/duo_button.dart';
import '../widgets/progress_bar.dart';

class OnboardingScreen extends StatelessWidget {
  const OnboardingScreen({super.key});

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
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: Colors.transparent,
                      ),
                      child: const Icon(Icons.arrow_back, color: AppColors.textLight, size: 24),
                    ),
                  ),
                  const SizedBox(width: 12),
                  const Expanded(
                    child: ProgressBar(progress: 0.33, mascot: '🦊'),
                  ),
                ],
              ),
            ),

            // Content area
            Expanded(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 24),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    const SizedBox(height: 32),
                    // Illustration
                    Container(
                      width: 280,
                      height: 210,
                      decoration: BoxDecoration(
                        color: AppColors.primary.withOpacity(0.05),
                        borderRadius: BorderRadius.circular(32),
                        border: Border.all(
                          color: AppColors.primary.withOpacity(0.1),
                          width: 2,
                        ),
                      ),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(30),
                        child: Image.network(
                          'https://lh3.googleusercontent.com/aida-public/AB6AXuAUOiY11j7NPcXC8IHdNuvzTnJ1VGxvQdiCTaA0s0NoS7x0IFXqb48RnbzqR7NUp8WfSJFvDbrKbFzKosV31fiExB8UAc2OsBaEiDcAXHp-PhPpwSAb1GwqVwLCAwfUTMGTc6EPr64rAjEZV75n08Oj-T0-l2K0g2XTfGgVB4iWqyZjYy0bmIwl00kaulM3uYUK8-TLyUTUvMxudbPHbgSvhwYFB4NYCGy-IYMVborQXA9WS3hqrR8TW0RKXTiPgDthjG373Qy_Vx7N',
                          fit: BoxFit.cover,
                          errorBuilder: (_, __, ___) => Center(
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                const Text('🗺️', style: TextStyle(fontSize: 64)),
                                const SizedBox(height: 8),
                                Text(
                                  'Navigate safely',
                                  style: TextStyle(
                                    color: AppColors.textLight,
                                    fontWeight: FontWeight.w700,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),

                    const SizedBox(height: 40),

                    // Title
                    RichText(
                      textAlign: TextAlign.center,
                      text: TextSpan(
                        children: [
                          TextSpan(
                            text: 'Find ',
                            style: GoogleFonts.playfairDisplay(
                              fontSize: 38,
                              fontWeight: FontWeight.w900,
                              color: AppColors.textDark,
                              height: 1.15,
                              letterSpacing: -0.5,
                            ),
                          ),
                          TextSpan(
                            text: 'Clean',
                            style: GoogleFonts.playfairDisplay(
                              fontSize: 38,
                              fontWeight: FontWeight.w900,
                              color: AppColors.primary,
                              fontStyle: FontStyle.italic,
                              height: 1.15,
                              letterSpacing: -0.5,
                            ),
                          ),
                          TextSpan(
                            text: '\nWashrooms',
                            style: GoogleFonts.playfairDisplay(
                              fontSize: 38,
                              fontWeight: FontWeight.w900,
                              color: AppColors.textDark,
                              height: 1.15,
                              letterSpacing: -0.5,
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 16),

                    // Description
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 8),
                      child: Text(
                        'Navigate your city with confidence. Discover verified, hygienic facilities exclusively for women anywhere in India.',
                        textAlign: TextAlign.center,
                        style: GoogleFonts.nunito(
                          fontSize: 17,
                          fontWeight: FontWeight.w700,
                          color: AppColors.textMedium,
                          height: 1.5,
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
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.bottomCenter,
                  end: Alignment.topCenter,
                  colors: [
                    Colors.white,
                    Colors.white,
                    Colors.white.withOpacity(0),
                  ],
                ),
              ),
              child: DuoButton(
                label: 'CONTINUE',
                icon: Icons.arrow_forward,
                onTap: () {
                  Navigator.pushNamed(context, '/home');
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

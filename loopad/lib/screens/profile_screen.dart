import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../theme/app_colors.dart';

/// ProfileScreen
/// Matches Stitch pink Duolingo system exactly:
/// - White (#FFFFFF) scaffold background
/// - Fox 🦊 avatar circle (pink ring) + name + subtitle
/// - Stats row: Fox Points | Reviews | Saved (matching Rewards screen coin style)
/// - Menu items as notion-card rows (icon circle + label + arrow)
/// - Settings / Log out at bottom
class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Column(
          children: [
            // Top bar — back + "Profile" title + settings icon
            Padding(
              padding:
                  const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              child: Row(
                children: [
                  IconButton(
                    icon: const Icon(Icons.arrow_back_ios_new,
                        color: Color(0xFF1E293B), size: 20),
                    onPressed: () => Navigator.pop(context),
                  ),
                  Expanded(
                    child: Text(
                      'Profile',
                      textAlign: TextAlign.center,
                      style: GoogleFonts.nunito(
                        fontSize: 20,
                        fontWeight: FontWeight.w900,
                        color: const Color(0xFF1E293B),
                        letterSpacing: -0.3,
                      ),
                    ),
                  ),
                  // Fox mascot — top right, matching Stitch top-right avatar
                  Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      color: AppColors.primary.withOpacity(0.1),
                      shape: BoxShape.circle,
                      border: Border.all(
                          color: AppColors.primary.withOpacity(0.3), width: 2),
                    ),
                    child: const Center(
                        child: Text('🦊',
                            style: TextStyle(fontSize: 20))),
                  ),
                  const SizedBox(width: 8),
                ],
              ),
            ),

            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Column(
                  children: [
                    const SizedBox(height: 16),

                    // Avatar + Name + Bio
                    Container(
                      width: 88,
                      height: 88,
                      decoration: BoxDecoration(
                        color: AppColors.primary.withOpacity(0.1),
                        shape: BoxShape.circle,
                        border: Border.all(
                            color: AppColors.primary, width: 3),
                        boxShadow: [
                          BoxShadow(
                            color: AppColors.primaryDark,
                            offset: const Offset(0, 4),
                            blurRadius: 0,
                          ),
                        ],
                      ),
                      child: const Center(
                        child: Text('🦊', style: TextStyle(fontSize: 44)),
                      ),
                    ),

                    const SizedBox(height: 14),

                    Text(
                      'Ankush Jha',
                      style: GoogleFonts.nunito(
                        fontSize: 22,
                        fontWeight: FontWeight.w900,
                        color: const Color(0xFF1E293B),
                        letterSpacing: -0.4,
                      ),
                    ),

                    const SizedBox(height: 4),

                    Text(
                      'LooPad Member since 2024',
                      style: GoogleFonts.nunito(
                        fontSize: 13,
                        fontWeight: FontWeight.w600,
                        color: const Color(0xFF64748B), // slate-500
                      ),
                    ),

                    const SizedBox(height: 24),

                    // Stats row — matches Rewards screen coin style
                    Container(
                      padding: const EdgeInsets.symmetric(
                          vertical: 18, horizontal: 8),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(20),
                        border: Border.all(
                          color: const Color(0xFFE5E7EB), width: 1.5),
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
                          _StatItem(
                            value: '1,250',
                            label: 'Fox Points',
                            valueColor: const Color(0xFFFFC800), // Duolingo yellow
                            emoji: '⭐',
                          ),
                          _VertDivider(),
                          _StatItem(
                            value: '14',
                            label: 'Reviews',
                            valueColor: AppColors.accentBlue,
                            emoji: '💬',
                          ),
                          _VertDivider(),
                          _StatItem(
                            value: '7',
                            label: 'Saved',
                            valueColor: AppColors.accentGreen,
                            emoji: '🔖',
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 24),

                    // Menu items — notion-card style rows
                    _MenuSection(
                      title: 'ACCOUNT',
                      items: [
                        _MenuItem(
                          icon: Icons.history,
                          iconBgColor: AppColors.accentBlue,
                          label: 'Order History',
                          onTap: () {},
                        ),
                        _MenuItem(
                          icon: Icons.bookmark_outline,
                          iconBgColor: AppColors.accentGreen,
                          label: 'Saved Places',
                          onTap: () {},
                        ),
                        _MenuItem(
                          icon: Icons.people_outline,
                          iconBgColor: const Color(0xFFFFC800),
                          label: 'Emergency Contacts',
                          onTap: () {},
                        ),
                      ],
                    ),

                    const SizedBox(height: 16),

                    _MenuSection(
                      title: 'PREFERENCES',
                      items: [
                        _MenuItem(
                          icon: Icons.notifications_outlined,
                          iconBgColor: AppColors.primary,
                          label: 'Notifications',
                          onTap: () {},
                        ),
                        _MenuItem(
                          icon: Icons.lock_outline,
                          iconBgColor: const Color(0xFF94A3B8),
                          label: 'Privacy & Safety',
                          onTap: () {},
                        ),
                      ],
                    ),

                    const SizedBox(height: 16),

                    // Log out — red tinted
                    GestureDetector(
                      onTap: () =>
                          Navigator.pushReplacementNamed(context, '/onboarding'),
                      child: Container(
                        padding: const EdgeInsets.symmetric(
                            vertical: 16, horizontal: 20),
                        decoration: BoxDecoration(
                          color: const Color(0xFFFFF1F2), // red-50
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(
                              color: const Color(0xFFFFCDD2), width: 1.5),
                        ),
                        child: Row(
                          children: [
                            Container(
                              width: 40,
                              height: 40,
                              decoration: BoxDecoration(
                                color: Colors.redAccent.withOpacity(0.12),
                                shape: BoxShape.circle,
                              ),
                              child: const Icon(Icons.logout,
                                  color: Colors.redAccent, size: 20),
                            ),
                            const SizedBox(width: 16),
                            Text(
                              'Log Out',
                              style: GoogleFonts.nunito(
                                fontSize: 16,
                                fontWeight: FontWeight.w800,
                                color: Colors.redAccent,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),

                    const SizedBox(height: 40),
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

class _StatItem extends StatelessWidget {
  final String value;
  final String label;
  final Color valueColor;
  final String emoji;
  const _StatItem(
      {required this.value,
      required this.label,
      required this.valueColor,
      required this.emoji});

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Column(
        children: [
          Text(emoji, style: const TextStyle(fontSize: 20)),
          const SizedBox(height: 4),
          Text(
            value,
            style: GoogleFonts.nunito(
              fontSize: 18,
              fontWeight: FontWeight.w900,
              color: valueColor,
              letterSpacing: -0.3,
            ),
          ),
          const SizedBox(height: 2),
          Text(
            label,
            style: GoogleFonts.nunito(
              fontSize: 11,
              fontWeight: FontWeight.w700,
              color: const Color(0xFF94A3B8),
              letterSpacing: 0.3,
            ),
          ),
        ],
      ),
    );
  }
}

class _VertDivider extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 1,
      height: 48,
      color: const Color(0xFFE5E7EB),
    );
  }
}

class _MenuSection extends StatelessWidget {
  final String title;
  final List<_MenuItem> items;
  const _MenuSection({required this.title, required this.items});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Section label — "ACCOUNT", "REDEEM", etc. matching Stitch uppercase grey
        Padding(
          padding: const EdgeInsets.only(left: 4, bottom: 10),
          child: Row(
            children: [
              const Icon(Icons.grid_view_outlined,
                  size: 16, color: Color(0xFF94A3B8)),
              const SizedBox(width: 6),
              Text(
                title,
                style: GoogleFonts.nunito(
                  fontSize: 12,
                  fontWeight: FontWeight.w800,
                  color: const Color(0xFF94A3B8),
                  letterSpacing: 1.2,
                ),
              ),
            ],
          ),
        ),
        Container(
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(
                color: const Color(0xFFE5E7EB), width: 1.5),
            boxShadow: const [
              BoxShadow(
                color: Color(0x06000000),
                offset: Offset(0, 2),
                blurRadius: 6,
              ),
            ],
          ),
          child: Column(
            children: [
              for (int i = 0; i < items.length; i++) ...[
                items[i],
                if (i < items.length - 1)
                  const Divider(
                      height: 1,
                      thickness: 1,
                      color: Color(0xFFE5E7EB),
                      indent: 20,
                      endIndent: 20),
              ],
            ],
          ),
        ),
      ],
    );
  }
}

class _MenuItem extends StatelessWidget {
  final IconData icon;
  final Color iconBgColor;
  final String label;
  final VoidCallback onTap;
  const _MenuItem(
      {required this.icon,
      required this.iconBgColor,
      required this.label,
      required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
        child: Row(
          children: [
            Container(
              width: 40,
              height: 40,
              decoration: BoxDecoration(
                color: iconBgColor.withOpacity(0.12),
                shape: BoxShape.circle,
              ),
              child: Icon(icon, color: iconBgColor, size: 20),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Text(
                label,
                style: GoogleFonts.nunito(
                  fontSize: 16,
                  fontWeight: FontWeight.w700,
                  color: const Color(0xFF1E293B),
                ),
              ),
            ),
            const Icon(Icons.arrow_forward_ios,
                size: 15, color: Color(0xFFCBD5E1)),
          ],
        ),
      ),
    );
  }
}

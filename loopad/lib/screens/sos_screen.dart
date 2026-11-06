import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:geolocator/geolocator.dart';
import '../theme/app_colors.dart';
import '../providers/sos_provider.dart';
import '../providers/auth_provider.dart';

class SOSScreen extends ConsumerStatefulWidget {
  const SOSScreen({super.key});

  @override
  ConsumerState<SOSScreen> createState() => _SOSScreenState();
}

class _SOSScreenState extends ConsumerState<SOSScreen>
    with TickerProviderStateMixin {
  late AnimationController _pulseCtrl;
  late Animation<double> _pulseScale;
  late Animation<double> _pulseOpacity;
  bool _activated = false;
  bool _pressed = false;

  @override
  void initState() {
    super.initState();
    _pulseCtrl = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1100),
    )..repeat();
    _pulseScale = Tween<double>(begin: 1.0, end: 1.4).animate(
        CurvedAnimation(parent: _pulseCtrl, curve: Curves.easeOut));
    _pulseOpacity = Tween<double>(begin: 0.3, end: 0.0).animate(
        CurvedAnimation(parent: _pulseCtrl, curve: Curves.easeOut));
  }

  @override
  void dispose() {
    _pulseCtrl.dispose();
    super.dispose();
  }

  Future<void> _triggerSOS() async {
    HapticFeedback.heavyImpact();
    setState(() => _activated = !_activated);

    if (_activated) {
      final user = ref.read(authStateProvider).value;
      if (user != null) {
        try {
          Position? pos;
          try {
            pos = await Geolocator.getCurrentPosition();
          } catch (_) {}
          await ref.read(sosServiceProvider).triggerSOS(
                userId: user.uid,
                lat: pos?.latitude ?? 28.6139,
                lng: pos?.longitude ?? 77.2090,
              );
        } catch (_) {}
      }
    }

    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          _activated
              ? '🚨 SOS Alert sent to your emergency contacts!'
              : 'SOS cancelled.',
          style: GoogleFonts.nunito(fontWeight: FontWeight.w800),
        ),
        backgroundColor: AppColors.primaryDark,
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      ),
    );
  }

  void _showAddContactSheet() {
    final nameCtrl = TextEditingController();
    final phoneCtrl = TextEditingController();
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (ctx) => Padding(
        padding: EdgeInsets.only(
            left: 24,
            right: 24,
            top: 24,
            bottom: MediaQuery.of(ctx).viewInsets.bottom + 24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Add Emergency Contact',
                style: GoogleFonts.nunito(
                    fontSize: 20, fontWeight: FontWeight.w800)),
            const SizedBox(height: 16),
            _Field(label: 'Name', controller: nameCtrl),
            const SizedBox(height: 12),
            _Field(label: 'Phone Number', controller: phoneCtrl, isPhone: true),
            const SizedBox(height: 20),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primary,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16)),
                  padding: const EdgeInsets.symmetric(vertical: 16),
                ),
                onPressed: () async {
                  final user = ref.read(authStateProvider).value;
                  if (user != null &&
                      nameCtrl.text.isNotEmpty &&
                      phoneCtrl.text.isNotEmpty) {
                    await ref.read(sosServiceProvider).addContact(
                          userId: user.uid,
                          name: nameCtrl.text.trim(),
                          phone: phoneCtrl.text.trim(),
                        );
                  }
                  if (ctx.mounted) Navigator.pop(ctx);
                },
                child: Text('Add Contact',
                    style: GoogleFonts.nunito(
                        fontWeight: FontWeight.w800,
                        fontSize: 16,
                        color: Colors.white)),
              ),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final user = ref.watch(authStateProvider).value;
    final contactsAsync = user != null
        ? ref.watch(sosContactsProvider(user.uid))
        : const AsyncValue<List<dynamic>>.data([]);

    return Scaffold(
      backgroundColor: AppColors.primary,
      body: AnnotatedRegion<SystemUiOverlayStyle>(
        value: SystemUiOverlayStyle.light,
        child: SafeArea(
          child: Column(
            children: [
              // Top nav
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                child: Row(
                  children: [
                    IconButton(
                      icon: const Icon(Icons.arrow_back_ios_new,
                          color: Colors.white, size: 20),
                      onPressed: () => Navigator.pop(context),
                    ),
                    const Spacer(),
                    Text(
                      'SOS Emergency',
                      style: GoogleFonts.nunito(
                        fontSize: 20,
                        fontWeight: FontWeight.w800,
                        color: Colors.white,
                        letterSpacing: -0.3,
                      ),
                    ),
                    const Spacer(),
                    IconButton(
                      icon: const Icon(Icons.person_add, color: Colors.white),
                      onPressed: _showAddContactSheet,
                    ),
                  ],
                ),
              ),

              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 40),
                child: Text(
                  _activated
                      ? 'Alert sent! Help is on the way. 🚑'
                      : 'Tap the button below to alert your\nemergency contacts instantly.',
                  textAlign: TextAlign.center,
                  style: GoogleFonts.nunito(
                    fontSize: 15,
                    fontWeight: FontWeight.w600,
                    color: Colors.white.withOpacity(0.78),
                    height: 1.45,
                  ),
                ),
              ),

              // Contacts strip
              contactsAsync.when(
                data: (contacts) {
                  if (contacts.isEmpty) {
                    return Padding(
                      padding: const EdgeInsets.symmetric(
                          vertical: 12, horizontal: 24),
                      child: GestureDetector(
                        onTap: _showAddContactSheet,
                        child: Container(
                          padding: const EdgeInsets.all(12),
                          decoration: BoxDecoration(
                            color: Colors.white.withOpacity(0.15),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              const Icon(Icons.person_add_alt,
                                  color: Colors.white, size: 18),
                              const SizedBox(width: 8),
                              Text('Add an emergency contact',
                                  style: GoogleFonts.nunito(
                                      color: Colors.white,
                                      fontWeight: FontWeight.w700)),
                            ],
                          ),
                        ),
                      ),
                    );
                  }
                  return SizedBox(
                    height: 72,
                    child: ListView.separated(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 20, vertical: 8),
                      scrollDirection: Axis.horizontal,
                      itemCount: contacts.length,
                      separatorBuilder: (_, __) => const SizedBox(width: 10),
                      itemBuilder: (_, i) {
                        final c = contacts[i];
                        return GestureDetector(
                          onLongPress: () async {
                            await ref
                                .read(sosServiceProvider)
                                .deleteContact(c.id);
                          },
                          child: Container(
                            padding: const EdgeInsets.symmetric(
                                horizontal: 16, vertical: 8),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Text(c.name,
                                    style: GoogleFonts.nunito(
                                        fontWeight: FontWeight.w800,
                                        fontSize: 13,
                                        color: AppColors.textDark)),
                                Text(c.phone,
                                    style: GoogleFonts.nunito(
                                        fontSize: 11,
                                        color: AppColors.textLight)),
                              ],
                            ),
                          ),
                        );
                      },
                    ),
                  );
                },
                loading: () => const SizedBox(
                    height: 56,
                    child:
                        Center(child: CircularProgressIndicator(color: Colors.white))),
                error: (_, __) => const SizedBox.shrink(),
              ),

              // Pulsing SOS orb
              Expanded(
                child: Center(
                  child: GestureDetector(
                    onTapDown: (_) {
                      HapticFeedback.mediumImpact();
                      setState(() => _pressed = true);
                    },
                    onTapUp: (_) {
                      setState(() => _pressed = false);
                      _triggerSOS();
                    },
                    onTapCancel: () => setState(() => _pressed = false),
                    child: AnimatedBuilder(
                      animation: _pulseCtrl,
                      builder: (context, _) => Stack(
                        alignment: Alignment.center,
                        children: [
                          Transform.scale(
                            scale: _pulseScale.value,
                            child: Container(
                              width: 190,
                              height: 190,
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: Colors.white
                                    .withOpacity(_pulseOpacity.value),
                              ),
                            ),
                          ),
                          Container(
                            width: 170,
                            height: 170,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: Colors.white.withOpacity(0.12),
                              border: Border.all(
                                  color: Colors.white.withOpacity(0.25),
                                  width: 2.5),
                            ),
                          ),
                          AnimatedContainer(
                            duration: const Duration(milliseconds: 80),
                            transform: Matrix4.translationValues(
                                0, _pressed ? 4 : 0, 0),
                            width: _pressed ? 140 : 148,
                            height: _pressed ? 140 : 148,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: Colors.white,
                              boxShadow: _pressed
                                  ? []
                                  : [
                                      BoxShadow(
                                        color: AppColors.primaryDark,
                                        offset: const Offset(0, 6),
                                        blurRadius: 0,
                                      ),
                                    ],
                            ),
                            child: Center(
                              child: _activated
                                  ? const Icon(Icons.sos,
                                      color: AppColors.primary, size: 60)
                                  : const Icon(Icons.crisis_alert,
                                      color: AppColors.primary, size: 60),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),

              // Bottom action buttons
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 0, 20, 36),
                child: Column(
                  children: [
                    _ActionRow(
                      icon: Icons.call,
                      label: 'Call 112 (Emergency)',
                      onTap: () {
                        HapticFeedback.lightImpact();
                        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                          content: Text('📞 Calling 112…',
                              style: GoogleFonts.nunito(
                                  fontWeight: FontWeight.w800)),
                          backgroundColor: AppColors.primaryDark,
                          behavior: SnackBarBehavior.floating,
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(16)),
                        ));
                      },
                    ),
                    const SizedBox(height: 10),
                    _ActionRow(
                      icon: Icons.my_location,
                      label: 'Share Live Location',
                      onTap: () {
                        HapticFeedback.lightImpact();
                        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                          content: Text('📍 Sharing live location…',
                              style: GoogleFonts.nunito(
                                  fontWeight: FontWeight.w800)),
                          backgroundColor: AppColors.primaryDark,
                          behavior: SnackBarBehavior.floating,
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(16)),
                        ));
                      },
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _Field extends StatelessWidget {
  final String label;
  final TextEditingController controller;
  final bool isPhone;
  const _Field(
      {required this.label,
      required this.controller,
      this.isPhone = false});

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      keyboardType: isPhone ? TextInputType.phone : TextInputType.name,
      decoration: InputDecoration(
        labelText: label,
        labelStyle:
            GoogleFonts.nunito(color: AppColors.textLight, fontSize: 14),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: BorderSide(color: AppColors.primary, width: 2),
        ),
      ),
    );
  }
}

class _ActionRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;
  const _ActionRow(
      {required this.icon, required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding:
            const EdgeInsets.symmetric(horizontal: 20, vertical: 18),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          boxShadow: [
            BoxShadow(
              color: AppColors.primaryDark,
              offset: const Offset(0, 4),
              blurRadius: 0,
            ),
          ],
        ),
        child: Row(
          children: [
            Container(
              width: 40,
              height: 40,
              decoration: BoxDecoration(
                color: AppColors.primary.withOpacity(0.1),
                shape: BoxShape.circle,
              ),
              child: Icon(icon, color: AppColors.primary, size: 20),
            ),
            const SizedBox(width: 16),
            Text(
              label,
              style: GoogleFonts.nunito(
                fontSize: 16,
                fontWeight: FontWeight.w800,
                color: const Color(0xFF1E293B),
              ),
            ),
            const Spacer(),
            const Icon(Icons.arrow_forward_ios,
                size: 16, color: Color(0xFF94A3B8)),
          ],
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import '../theme/app_colors.dart';

/// A green progress bar with a highlight streak, like the Duolingo XP bar.
class ProgressBar extends StatelessWidget {
  final double progress; // 0.0 to 1.0
  final Color color;
  final String? mascot;

  const ProgressBar({
    super.key,
    required this.progress,
    this.color = AppColors.accentGreen,
    this.mascot = '🦊',
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Container(
            height: 14,
            decoration: BoxDecoration(
              color: const Color(0xFFF1F5F9), // slate-100
              borderRadius: BorderRadius.circular(9999),
            ),
            child: FractionallySizedBox(
              alignment: Alignment.centerLeft,
              widthFactor: progress.clamp(0.0, 1.0),
              child: Container(
                decoration: BoxDecoration(
                  color: color,
                  borderRadius: BorderRadius.circular(9999),
                ),
                child: Stack(
                  children: [
                    Positioned(
                      top: 3,
                      left: 8,
                      right: 8,
                      child: Container(
                        height: 4,
                        decoration: BoxDecoration(
                          color: Colors.white.withOpacity(0.3),
                          borderRadius: BorderRadius.circular(9999),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
        if (mascot != null) ...[
          const SizedBox(width: 12),
          Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(
              color: AppColors.primary.withOpacity(0.1),
              shape: BoxShape.circle,
            ),
            child: Center(
              child: Text(mascot!, style: const TextStyle(fontSize: 20)),
            ),
          ),
        ],
      ],
    );
  }
}

import 'package:flutter/material.dart';
import '../theme/app_colors.dart';

/// An uppercase tracking-widest section header with an optional leading icon.
class SectionHeader extends StatelessWidget {
  final String title;
  final IconData? icon;

  const SectionHeader({
    super.key,
    required this.title,
    this.icon,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        if (icon != null) ...[
          Icon(icon, size: 18, color: AppColors.textLight),
          const SizedBox(width: 8),
        ],
        Text(
          title.toUpperCase(),
          style: const TextStyle(
            fontSize: 15,
            fontWeight: FontWeight.w700,
            color: AppColors.textLight,
            letterSpacing: 3.0,
          ),
        ),
      ],
    );
  }
}

import 'package:flutter/material.dart';
import '../theme/app_colors.dart';

/// A card widget styled like a Notion block with border and hover-like aesthetics.
class NotionCard extends StatelessWidget {
  final Widget child;
  final Color borderColor;
  final Color? backgroundColor;
  final EdgeInsets padding;
  final double borderWidth;
  final double borderRadius;
  final VoidCallback? onTap;

  const NotionCard({
    super.key,
    required this.child,
    this.borderColor = AppColors.borderLight,
    this.backgroundColor,
    this.padding = const EdgeInsets.all(16),
    this.borderWidth = 1,
    this.borderRadius = 16,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: padding,
        decoration: BoxDecoration(
          color: backgroundColor ?? Colors.white,
          borderRadius: BorderRadius.circular(borderRadius),
          border: Border.all(
            color: borderColor,
            width: borderWidth,
          ),
          boxShadow: const [
            BoxShadow(
              color: Color(0x0D000000),
              offset: Offset(0, 2),
              blurRadius: 8,
            ),
          ],
        ),
        child: child,
      ),
    );
  }
}

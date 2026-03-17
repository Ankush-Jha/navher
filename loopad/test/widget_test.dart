import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:loopad/main.dart';

void main() {
  testWidgets('App starts', (WidgetTester tester) async {
    await tester.pumpWidget(const LooPadApp());
    expect(find.text('LooPad'), findsNothing); // onboarding screen first
  });
}

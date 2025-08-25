import 'package:flutter/material.dart';
import '../widgets/common_ui.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: buildAppBar(context, 'Nexspace'),
      drawer: buildDrawer(context),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(height: 32),
            Center(
              child: Image.asset(
                'assets/images/nexspace_logo.png',
                width: 200, // サイズは後で調整可能
              ),
            ),
            const SizedBox(height: 24),
            const Text(
              '未来を、宇宙を、もっと近くに。',
              style: TextStyle(
                fontSize: 28,
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 40),
            const Text(
              'このページは現在、準備中です。',
              style: TextStyle(fontSize: 16, color: Colors.grey),
            ),
            const SizedBox(height: 100),
          ],
        ),
      ),
    );
  }
}
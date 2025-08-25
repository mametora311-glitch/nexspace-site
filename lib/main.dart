import 'package:flutter/material.dart';
import 'pages/home_page.dart';

void main() {
  runApp(const NexspaceApp());
}

class NexspaceApp extends StatelessWidget {
  const NexspaceApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Nexspace Official',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor: Colors.white,
        fontFamily: 'Arial',
      ),
      home: const HomePage(),
    );
  }
}
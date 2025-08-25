import 'package:flutter/material.dart';

AppBar buildAppBar(BuildContext context, String title) {
  return AppBar(
    title: Text(title),
    centerTitle: true,
    backgroundColor: Colors.white,
    foregroundColor: Colors.black,
    elevation: 0.5,
  );
}

Drawer buildDrawer(BuildContext context) {
  return Drawer(
    child: ListView(
      padding: EdgeInsets.zero,
      children: const [
        DrawerHeader(
          decoration: BoxDecoration(color: Colors.black12),
          child: Text('Nexspace Menu'),
        ),
        ListTile(title: Text('トップページ')),
        ListTile(title: Text('会社概要（準備中）')),
        ListTile(title: Text('お問い合わせ（準備中）')),
      ],
    ),
  );
}
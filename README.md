# Mobile Dev Cohort React Native 👋

## Overview

This repository is an Expo React Native project for the Mobile Dev Cohort. It includes authentication screen assignments, reusable UI components, and a simple screen layout using Expo Router.

## Project structure

```text
Mobile-Dev-Cohort-Chaicode/

├─ assets/
│  ├─ Ashish-Sharma.png
│
└─ src/
   └─ app/
      ├─ _layout.tsx
      ├─ Basic_components.tsx
      ├─ Colors.tsx   --- custom color
      ├─ index.tsx
      └─ assignments/
         ├─ SignInAssignment.tsx --- login screen
         ├─ SignUpAssignment.tsx --- account create screen
         ├─ ForgotPasswordAssignment.tsx   --- Password reset screen

```

## Important folders

- `src/app/` - main app entry point and shared UI files.
- `src/app/assignments/` - assignment screens and exercises.
- `assets/` - app assets such as images and icons.

## Key features

- uses Expo Router for navigation
- reusable color definitions in `src/app/Colors.tsx`
- authentication UI screens in `src/app/assignments/`
- responsive layout with `KeyboardAvoidingView` and `ScrollView`
- vector icons from `@expo/vector-icons`

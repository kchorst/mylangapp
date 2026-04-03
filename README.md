# MyLangApp V2 🌍

**Version**: 2.0.0 (UI/Architecture Refresh)

A modern React Native / Expo language learning application with a clean, optimized UI for learning everyday vocabulary across multiple languages. Built with V2 architecture featuring design system, component reusability, and enhanced performance.

## ✅ What’s New in v2.0.0

- **Native screen titles**: All screens use React Navigation’s native header titles (no duplicated in-screen titles).
- **Tighter, cleaner UI**: Spacing reductions + more consistent layout rhythm.
- **Language screen**: Non-scroll layout; language buttons are sized to fit on one screen.
- **Category buttons**: 2-line label (category name + italic examples) with line clamping.
- **Vocabulary list**: Stable 3-column layout with improved column ratios.
- **Design system + components**: Centralized theme + reusable components for consistent styling.

## 🚀 V2 Features

### Architecture & Design
- 🎨 **Modern Design System** - Centralized theme with colors, typography, and spacing
- 🧩 **Component Library** - Reusable UI components for consistency
- 📱 **Optimized UI** - 25% tighter spacing with semantic headers
- 🔒 **Type Safety** - Full TypeScript coverage with comprehensive interfaces
- ⚡ **Performance Optimized** - Service layer with data validation and caching

### Core Features
- 🌐 **8 selectable languages** — Armenian (Հայերեն), Georgian (ქართული), Russian (Русский), Japanese (日本語), Chinese (中文), French (Français), Spanish (Español), Kinyarwanda (Ikinyarwanda)
- 📂 **8 vocabulary categories** — Greetings, Fun, Expressions, Food & Drink, Shop, Travel, Commands & Requests, Forms of Address
- 🔤 **Pronunciation guides** — every word includes a phonetic hint
- 💾 **Smart Data Layer** - Optimized vocabulary service with validation
- 📱 **Cross-platform** — Built with Expo for iOS, Android, and Web

More languages and content expansions are planned and will be added in future updates.

## 📱 Screens

### Language Selection
- Non-scroll screen: language buttons are sized to fit on a single screen
- Color-coded language buttons for quick recognition

### Category Browser
- Scrollable category list
- Category buttons include a 2-line label: category name + smaller italic examples
- Semantic grouping and intuitive navigation

### Vocabulary Viewer
- Tabular layout with English, selected language, and pronunciation
- The 2nd column header shows the full language label (e.g. Русский) rather than the language code
- Efficient filtering and data management

## 🛠️ Tech Stack

### Core Technologies
- **React Native 0.79.2** - Latest stable version with New Architecture enabled
- **Expo SDK 53** - Development platform and tooling
- **TypeScript** - Type safety and enhanced developer experience
- **React Navigation 7.x** - Navigation and routing

### Architecture Features
- **Design System** - Centralized theming with spacing, colors, typography
- **Component Library** - Reusable Button, Container, Header, LoadingSpinner
- **Service Layer** - VocabularyService with data validation
- **Type Safety** - Comprehensive interfaces for navigation, data, and components

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button/
│   ├── Container/
│   ├── Header/
│   ├── LoadingSpinner/
│   └── index.ts
├── screens/            # Main app screens
│   ├── LanguageScreen.tsx
│   ├── CategoryScreen.tsx
│   └── VocabularyScreen.tsx
├── services/           # Business logic layer
│   └── vocabularyService.ts
├── themes/             # Design system
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   └── index.ts
├── types/              # TypeScript definitions
│   ├── language.ts
│   ├── vocabulary.ts
│   └── navigation.ts
└── data/               # Static data files
    ├── languages.json
    ├── categories.json
    └── vocabulary-full.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- Expo CLI
- Android Studio or Xcode (for device testing)

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd mylangapp

# Install dependencies
npm install

# Start development server
npm start
```

### Running the App
```bash
# Start Expo development server
npm start

# Run on Android device/emulator
npm run android

# Run on iOS simulator
npm run ios

# Run in web browser
npm run web
```

## 🧱 Building with EAS (expo.dev)

This project is configured for EAS builds via `eas.json` and `app.json`.

```bash
# Login (if needed)
eas login

# Development build (internal)
eas build -p android --profile development

# Preview build (internal)
eas build -p android --profile preview

# Production build
eas build -p android --profile production
```

Notes:

- If your PowerShell environment blocks `npm`/`npx` scripts, you can use `npm.cmd`/`npx.cmd` instead.

## 🎨 Design System

### Spacing (25% Reduced from V1)
```typescript
// Container spacing
horizontal: 20 → 15px
vertical: 60 → 45px

// Button spacing  
vertical: 12 → 9px
margin: 6 → 4.5px

// Category spacing
vertical: 20 → 15px
margin: 10 → 7.5px
padding: 8 → 6px
```

### Typography
- **Headers**: 24px → 20px (semantic reduction)
- **Body**: 16px (maintained for readability)
- **Buttons**: 18px (optimized for touch targets)

### Colors
- **Backgrounds**: Black (#000), Dark Blue (#001f4d)
- **Text**: White (#fff), Black (#000), Gray variants
- **Buttons**: 17-color palette for visual variety

## 📊 Language Status

| Language | Status | Data Quality |
|---|---|---|
| Russian | ✅ Complete | Full vocabulary |
| Armenian | ✅ Complete | Full vocabulary |
| Georgian | ✅ Complete | Full vocabulary |
| Japanese | ✅ Complete | Full vocabulary |
| Chinese | ✅ Complete | Full vocabulary |
| French | ✅ Complete | Full vocabulary |
| Spanish | ✅ Complete | Full vocabulary |
| Kinyarwanda | ✅ Complete | Full vocabulary |

## 🔄 V2 Migration Notes

### UI Improvements
- ✅ 25% reduction in padding/margins across all screens
- ✅ Screen titles moved to native stack headers (no duplicated in-screen titles)
- ✅ Centralized color system eliminating hardcoded values
- ✅ Component reusability reducing code duplication

### Architecture Enhancements
- ✅ Design system implementation for consistency
- ✅ Service layer for data management and validation
- ✅ Comprehensive TypeScript coverage
- ✅ Performance optimizations with efficient filtering

## 🗺️ Roadmap

### V2.1 (Near Term)
- [ ] State management implementation (Zustand)
- [ ] Advanced accessibility features
- [ ] Performance optimizations (virtualization)
- [ ] Error boundaries and better error handling

### Content Updates
- [ ] More languages and phrases coming soon

### V2.2 (Mid Term)
- [ ] Audio pronunciation playback
- [ ] Advanced search and filtering
- [ ] Offline mode support
- [ ] User preferences persistence

### V3.0 (Future)
- [ ] Social features and sharing
- [ ] Gamification and progress tracking
- [ ] Custom vocabulary lists
- [ ] Voice recognition for practice

## 🧪 Development

### Code Quality
- **TypeScript**: Strict mode enabled
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code style
- **Git Hooks**: Pre-commit validation

### Testing Strategy
- Unit tests for services and utilities
- Component testing for UI components
- Integration testing for user flows
- Performance monitoring

## 📄 License

MIT © [kchorst](https://github.com/kchorst)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions, issues, or contributions:
- Create an issue on GitHub
- Review the documentation
- Check existing issues for solutions

## 🏷️ Release / GitHub Update Checklist

```bash
# 1) Verify changes
git status

# 2) Commit
git add -A
git commit -m "Release v2.0.0"

# 3) Tag
git tag v2.0.0

# 4) Push branch + tags
git push
git push --tags
```

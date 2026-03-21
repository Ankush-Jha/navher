# 🧭 NavHer — Navigate Safely, Navigate Freely

**NavHer** is a mobile-first Flutter application designed to empower women with **safe navigation, hygiene access, and wellness tools** — all in one place. Built during the **WisCon Hackathon 2026**.

---

## 🌟 Problem Statement

Women in urban India face daily challenges — finding clean washrooms, accessing menstrual hygiene products in emergencies, tracking their period cycle, and identifying safe public spaces. NavHer brings all of these together into a single, beautifully designed app.

---

## 📱 Features

| Feature | Description |
|---|---|
| 🗺️ **Clean Washroom Finder** | Discover verified, hygienic washroom facilities for women across your city |
| 🚚 **Emergency Pad Delivery** | Order sanitary pads for urgent delivery to your location |
| 📅 **Period Tracker** | Log symptoms, track cycles, and get predictions |
| 🛡️ **Safe Spaces** | Find and navigate to verified safe public spaces nearby |
| 🏆 **Rewards** | Earn points for contributing reviews and helping the community |
| ⭐ **Rate & Review** | Rate washrooms and spaces to help other women |
| 🆘 **SOS Emergency** | Quick access to emergency contacts and services |

---

## � Monetization Strategy

NavHer follows a **trust-first monetization approach**, ensuring that revenue generation aligns with user safety and real-world utility.

### 🛒 1. Emergency Pad Delivery (Affiliate Commissions)

NavHer integrates with instant delivery platforms such as **Blinkit, Zepto, and Instamart** to provide quick access to sanitary products.

**How it works:**
- Users can order pads directly from the app during emergencies
- Smart recommendations and quick-delivery options improve usability

**Revenue Model:**
- Commission earned per order (₹5–₹20 or platform-based %)

### ⭐ 2. Sponsored Safe Spaces (B2B Revenue)

Businesses can promote themselves as verified women-safe locations on the platform.

**How it works:**
- Highlighted pins on the map (⭐ Sponsored / Verified Safe)
- Increased visibility in search and navigation

**Revenue Model:**
- Subscription-based listing (₹999 – ₹4999/month per location)

### 🎯 3. Location-Based Offers (Ethical Ads)

NavHer provides contextual and non-intrusive promotions based on the user's location.

**Examples:**
- Discounts on sanitary products
- Offers from nearby women-friendly cafes or pharmacies
- Safe accommodation deals

**Revenue Model:**
- Paid promotions from local businesses

> ⚠️ Only relevant and safety-aligned offers are displayed to maintain user trust.

### 🚨 4. Advanced SOS Network (Future Monetization)

The SOS feature connects users with nearby verified helpers in emergency situations.

**Future Enhancements (Premium):**
- Priority alert routing
- Faster responder matching
- Emergency recording and tracking

**Monetization Scope:**
- Premium SOS features under subscription
- Partnerships with security and safety service providers

### ⚠️ Core Principle

NavHer ensures that **monetization never compromises safety**:

- ❌ No intrusive or irrelevant ads
- ❌ No misuse of personal data
- ✅ Focus on utility-driven revenue

---

## 🔮 Future Plans

| Feature | Description | Status |
|---------|-------------|--------|
| 🧭 **Safe Route Navigation** | Suggests the safest route instead of just the shortest by analyzing crowd density, street lighting, user reviews, and reported incidents — ensuring safer travel, especially at night. | 🧪 Planned |
| 🛣️ **Smart Route Washroom Planner** | Plans journeys by mapping verified washrooms along the route, sending timely reminders, and alerting users about long gaps without facilities for a stress-free experience. | 🧪 Planned |
| 📡 **Offline Support Mode (SOS + Pad Access)** | Ensures critical features work without internet by switching to SMS/call mode for SOS and enabling pad assistance requests with location sharing. | 🧪 Planned |
| 🚨 **Emergency SOS Escalation** | In case of danger, escalates alerts beyond nearby helpers to ensure rapid response, with continuous location sharing and priority emergency handling. | 🧪 Planned |
| 🧠 **Location Safety Score** | Assigns a safety rating to locations based on crowd density, lighting, user reviews, and incident data — helping users quickly identify safer options. | 💡 Ideation |

---

## 🖼️ Screenshots

> 📸 Screenshots coming soon — the app is currently under active development.

---

## 🏗️ Tech Stack

- **Framework:** Flutter (Dart SDK ^3.11.1)
- **UI:** Material Design + Google Fonts + Custom Design System
- **Packages:** `google_fonts`, `url_launcher`, `cupertino_icons`
- **Design:** Custom app theme with dedicated color palette and reusable widgets

---

## 📂 Project Structure

```
wc-project/
├── loopad/                          # Main Flutter application
│   ├── lib/
│   │   ├── main.dart                # App entry point & route definitions
│   │   ├── screens/
│   │   │   ├── onboarding_screen.dart
│   │   │   ├── home_screen.dart
│   │   │   ├── pad_delivery_screen.dart
│   │   │   ├── washroom_details_screen.dart
│   │   │   ├── period_tracker_screen.dart
│   │   │   ├── rewards_screen.dart
│   │   │   └── safe_spaces_screen.dart
│   │   ├── theme/                   # App colors & theme configuration
│   │   └── widgets/                 # Reusable UI components
│   ├── designs/                     # 13 screen design mockups (PNG)
│   ├── android/                     # Android platform config
│   ├── ios/                         # iOS platform config
│   └── web/                         # Web platform config
├── emergency_pad_delivery_*/        # HTML prototypes for pad delivery flow
├── loopad_home_safe_spaces_nearby/  # HTML prototype for safe spaces
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Flutter SDK](https://flutter.dev/docs/get-started/install) (3.11.1+)
- Android Studio / Xcode for emulator
- A connected device or emulator

### Installation

```bash
# Clone the repository
git clone https://github.com/Ankush-Jha/navher.git
cd navher

# Install dependencies
flutter pub get

# Run the app
flutter run
```

---

## 🛣️ App Routes

| Route | Screen |
|---|---|
| `/onboarding` | Welcome & feature introduction |
| `/home` | Main dashboard |
| `/pad-delivery` | Emergency pad ordering |
| `/washroom-details` | Washroom info & reviews |
| `/period-tracker` | Cycle tracking & symptom logging |
| `/rewards` | Community points & achievements |
| `/safe-spaces` | Nearby safe locations map |

---

## 👥 Team

Built with ❤️ at **WisCon Hackathon 2026**

---

## 📄 License

This project is for hackathon/educational purposes.

# AegisPro v2.0 — Enterprise Cloud Security Study Platform

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
![Platform](https://img.shields.io/badge/Platform-Web-blue)
![Firebase](https://img.shields.io/badge/Database-Firestore%20Offline--First-FFA611)
![UI Architecture](https://img.shields.io/badge/Theme-Warm%20Champagne%20%26%20Zero--Blur-F7E7CE)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, production-ready interactive cloud security learning platform. Features a comprehensive 4-phase engineering roadmap, 100+ vetted resources, interactive CIDR subnet calculator, live CTF tracker, bidirectional cloud synchronization, and daily streak telemetry.

---

## 🌟 Architecture & Features

- **Bidirectional Union Cloud Sync**: Seamlessly synchronizes progress between desktop, tablet, and mobile devices via Google Cloud Firestore with real-time `onSnapshot` listeners and local conflict resolution.
- **Offline-First Resilience**: Full IndexedDB offline persistence (`db.enablePersistence`) allows users to study with zero network connectivity; progress queues locally and syncs automatically upon reconnecting.
- **Champagne & Slate Design System**: Human-crafted visual palette featuring warm Champagne (`#F7E7CE`) accents, natural paper cards, and soft charcoal dark mode.
- **Zero-Blur Standard**: 100% free of CPU/GPU-heavy `backdrop-filter: blur(...)` and SVG `feGaussianBlur` filters for instantaneous rendering and buttery 60fps frame rates.
- **Client-Side URL Routing**: Preserves deep views (e.g. `/dashboard.html#subnet` or `/dashboard.html#phase2`) across page refreshes and direct link sharing.
- **Battery-Friendly Throttling**: All background 3D canvas particles and perspective tilt loops automatically pause when the tab is backgrounded or when `prefers-reduced-motion` is active.

---

## 📂 Project Structure

```
AegisPro/
├── dashboard.html          # Main interactive learning workspace & bento grid
├── index.html              # Secure user authentication portal
├── register.html           # Account registration portal
├── forgot-password.html    # Self-service password recovery
├── style.css               # StudyFlow master stylesheet & Champagne design tokens
├── app.js                  # Core application engine, routing, & calculation tools
├── firebase-auth.js        # Real-time sync engine & Firebase Auth integration
├── firestore.rules         # Hardened database security rules
├── firestore.indexes.json  # Cloud Firestore composite indexes
├── vercel.json             # Vercel routing, clean URLs, and security headers
└── .gitignore              # Standard version control exclusion rules
```

---

## 🚀 One-Click Deployment to Vercel

1. Push this repository to **GitHub**.
2. Go to [Vercel Dashboard](https://vercel.com) and click **"Add New..." > "Project"**.
3. Import your `AegisPro` repository.
4. Framework Preset: Select **"Other"** (Plain HTML/JS static site).
5. Click **"Deploy"**.

### ⚠️ IMPORTANT: Firebase Authorized Domains Configuration
For Firebase Authentication (Email/Password & Google Sign-In) to operate on your live Vercel domain:
1. Open your [Firebase Console](https://console.firebase.google.com/).
2. Navigate to **Build > Authentication > Settings > Authorized domains**.
3. Click **"Add domain"** and enter your Vercel URL (e.g., `your-project-name.vercel.app`).

---

## 💻 Local Development

Run the lightweight local development server:

```powershell
# Using Python
python -m http.server 8080

# Or using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080` in your web browser.

---

## 🔒 Security & Headers

The repository includes a hardened `vercel.json` configured with:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Strict Content Security Policy (CSP) allowing Google Auth and Firebase APIs.

---

## 📄 License
MIT License. Free for educational and personal learning use.

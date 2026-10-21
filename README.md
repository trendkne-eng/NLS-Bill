# NLS Bill Android wrapper

This repository keeps the original static billing and ledger app and wraps it in Capacitor for Android packaging.

## What the app does
- The working site remains in `index.html` and is copied to `public/index.html` for packaging.
- The billing, customer, item, and ledger logic is preserved.
- User data is stored in the browser's `localStorage` on the Android device. It is not synced to a server, and there is no server-side backup.

## Android package configuration
- App ID: `com.nlsbill.app`
- App name: `NLS Bill`
- Web asset directory: `public`
- Capacitor config: `capacitor.config.ts`

## Local development
1. Install Node.js LTS.
2. Run:
   ```bash
   npm install
   npm run build:web
   npx cap add android
   npx cap sync android
   ```
3. Open Android Studio on the generated `android/` project to run and debug the app on a phone.

## Build a debug APK locally
```bash
npm install
npm run build:web
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

The APK will be output at:
`android/app/build/outputs/apk/debug/app-debug.apk`

## GitHub Actions APK build
A workflow is included at `.github/workflows/android-apk.yml`.

It runs on:
- manual dispatch (`workflow_dispatch`)
- pushes to `main`

It will:
- install dependencies
- build the web app
- generate the Android project via Capacitor
- run `./gradlew assembleDebug`
- upload the APK as the artifact `NLS-Bill-debug-APK`

## Install on your Android phone
1. Download the APK from the workflow artifact.
2. Copy it to your phone.
3. Open the APK on the phone.
4. Allow installation from the browser or file manager when prompted.

## Important notes
- No passwords, API keys, or private customer data are stored in this repository.
- The app remains a local browser app; there is no server-backed sync or backup.
- Existing billing and ledger features are intentionally preserved without creating a separate backend application.

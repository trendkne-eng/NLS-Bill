# NLS Khatabook Android conversion

This repository keeps the original single-page ledger app and wraps it in Capacitor for Android use.

## Current web app
- The working app is in `index.html`.
- It preserves the original ledger calculations: Total Credit, Total Debit, Net Balance, and running ledger balance.
- Entries are stored in `localStorage` with the key `nls-khatabook-entries-v1`, so data survives app reloads and restarts on the same device.

## Android packaging
The project is set up for Capacitor + Android with the app name `NLS Khatabook` and package ID `com.trendkneeng.nlskhatabook`.

## Local setup
1. Install Node.js LTS.
2. Run:
   ```bash
   npm install
   npm run build:web
   npx cap sync android
   ```
3. Open Android Studio and select `android/` to continue with the project.

## Create a signed release APK
1. Create a keystore file on your machine.
2. Add `android/key.properties` with values for:
   - `storePassword`
   - `keyPassword`
   - `keyAlias`
   - `storeFile`
3. Then run:
   ```bash
   cd android
   gradle assembleRelease
   ```
4. The APK will be output at `android/app/build/outputs/apk/release/app-release.apk`.

## GitHub Actions build
A workflow is included at `.github/workflows/android-release.yml`.

It expects the following GitHub repository secrets:
- `ANDROID_KEYSTORE_BASE64`
- `RELEASE_KEY_ALIAS`
- `RELEASE_KEY_PASSWORD`
- `RELEASE_STORE_PASSWORD`

The workflow decodes the keystore, generates `android/key.properties`, and builds the release APK automatically.

## Install the APK on your phone
1. Copy the generated APK to your phone.
2. Open the APK file on the phone and allow installation.
3. If Android warns about unknown sources, enable installation from that source.

## Important notes
- No API keys or secrets are stored in the repository.
- The app uses WebView and does not require opening Chrome manually.
- The app data is kept in the device's local storage, which survives restarts on the same device.

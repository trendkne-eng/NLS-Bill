import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.trendkneeng.nlskhatabook',
  appName: 'NLS Khatabook',
  webDir: 'public',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: true,
    captureInput: true
  }
};

export default config;

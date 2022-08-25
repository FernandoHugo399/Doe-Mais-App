/* eslint-disable @typescript-eslint/naming-convention */
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'doe-mais-App',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      androidScaleType: 'CENTER_CROP',
      launchAutoHide: false
    }
  }
};

export default config;

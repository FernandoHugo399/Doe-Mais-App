/* eslint-disable @typescript-eslint/naming-convention */
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'doe-mais-App',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
      SplashScreen: {
        launchAutoHide: false,
        androidScaleType: 'CENTER_CROP',
        showSpinner: true,
        splashFullScreen: false,
        splashImmersive: false
      }
    }
};

export default config;

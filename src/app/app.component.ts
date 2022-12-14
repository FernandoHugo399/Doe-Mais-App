import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private routesUrl = [];
  constructor(
    private platform: Platform,
    private router: Router,
    private location: Location,
    private screenOrientation: ScreenOrientation
  )
  {
    StatusBar.setOverlaysWebView({ overlay: true });

    this.platform.ready().then(()=>{
      screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
      SplashScreen.hide();
      this.routerEvent();
      this.backButtonEventConfig();
    });
  }

  private routerEvent(){
    this.router.events.pipe( filter( ( event: NavigationEnd ) => ( event instanceof NavigationEnd )))
    .subscribe((event: NavigationEnd)=>{
      if(this.routesUrl.length === 0) {
        this.routesUrl.push(event.id, event.id);
      } else {
        this.routesUrl.push(event.id);
      }
    });
  }

  private backButtonEventConfig() {
    this.platform.backButton.subscribeWithPriority(999999, ()=>{
      const url = this.router.routerState.snapshot.url;
      this.routesUrl.splice(-2);

      if(this.routesUrl.length === 0) {
        App.exitApp();
      } else {
        this.location.back();
      }

    });
  }
}

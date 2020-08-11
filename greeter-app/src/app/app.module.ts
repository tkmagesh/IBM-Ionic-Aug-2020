import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  /* 'declarations' - All the UI entities (Pipe, Component, Directive) */
  declarations: [AppComponent],
  entryComponents: [],
  /* 'imports' - dependent modules */
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  /* 'providers' - All the services  */
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  /* top most component(s) in the application */
  bootstrap: [AppComponent]
})
export class AppModule {}

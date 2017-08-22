import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { DetailsComponent } from '../pages/details/details.component';
import { AddComponent } from '../pages/add/add.component';

//services

import { WishListService}  from './services/wish-list.service';


//pipes

import { PlaceHolderPipe } from './pipes/placeholder.pipe';
import { PendientsPipe } from './pipes/pendients.pipe';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    PlaceHolderPipe,
    PendientsPipe,
    HomePage,
    PendientesComponent,
    TerminadosComponent,
    DetailsComponent,
    AddComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PendientesComponent,
    TerminadosComponent,
    DetailsComponent,
    AddComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ProfilePage} from "../pages/profile/profile";
import {FavoritesPage} from "../pages/favorites/favorites";
import {ConsoleComponent} from "../components/console/console";
import {GamesPage} from "../pages/games/games";
import {ConsolesPage} from "../pages/consoles/consoles";
import {GuidesPage} from "../pages/guides/guides";
import {LoginPage} from "../pages/login/login";
import { ConsolesProvider } from '../providers/consoles/consoles';
import {HttpClientModule} from "@angular/common/http";
import { UsersProvider } from '../providers/users/users';
import { GamesProvider } from '../providers/games/games';
import {GamesComponent} from "../components/games/games";
import {StepsPage} from "../pages/steps/steps";
import {StepsComponent} from "../components/steps/steps";
import { StepsProvider } from '../providers/steps/steps';
import { GuidesProvider } from '../providers/guides/guides';
import {CategorysPage} from "../pages/categorys/categorys";
import { CategorysProvider } from '../providers/categorys/categorys';
import {ToolbarCategorysComponent} from "../components/toolbar-categorys/toolbar-categorys";
import { IonicStorageModule } from '@ionic/storage';
import {CreateUpdateUsersPage} from "../pages/create-update-users/create-update-users";
import {GuidesComponent} from "../components/guides/guides";

@NgModule({
  declarations: [
    MyApp,

    //Pages
    ProfilePage,
    ConsolesPage,
    FavoritesPage,
    GamesPage,
    GuidesPage,
    StepsPage,
    LoginPage,
    CategorysPage,
    CreateUpdateUsersPage,

    //Components
    ConsoleComponent,
    GamesComponent,
    StepsComponent,
    ToolbarCategorysComponent,
    GuidesComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    //Pages
    ProfilePage,
    ConsolesPage,
    GamesPage,
    FavoritesPage,
    GuidesPage,
    StepsPage,
    LoginPage,
    CategorysPage,
    CreateUpdateUsersPage,

    //Components
    ConsoleComponent,
    GamesComponent,
    StepsComponent,
    GuidesComponent,
    ToolbarCategorysComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsolesProvider,
    UsersProvider,
    GamesProvider,
    StepsProvider,
    GuidesProvider,
    CategorysProvider,
  ]
})
export class AppModule {}

import { Component } from '@angular/core';
import {ProfilePage} from "../profile/profile";
import {GuidePage} from "../guide/guide";
import {FavoritesPage} from "../favorites/favorites";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = GuidePage;
  tab3Root = FavoritesPage;

  constructor() {

  }
}

import { Component } from '@angular/core';
import {ProfilePage} from "../profile/profile";
import {FavoritesPage} from "../favorites/favorites";
import {ConsolesPage} from "../consoles/consoles";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = ConsolesPage;
  tab3Root = FavoritesPage;

  constructor() {

  }
}

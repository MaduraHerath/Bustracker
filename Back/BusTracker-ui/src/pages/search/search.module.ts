import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SearchPage } from './search';
import { ListviewPage } from "../listview/listview";
@NgModule({
  declarations: [
    SearchPage,
    ListviewPage
    
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    TranslateModule.forChild(),
    
  ],
  exports: [
    SearchPage,
    ListviewPage
    
  ]
})
export class SearchPageModule { }

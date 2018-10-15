import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsPage } from './results';
import {EnglishpagePage} from '../englishpage/englishpage'


@NgModule({
  declarations: [
    ResultsPage,EnglishpagePage
  ],
  imports: [
    IonicPageModule.forChild(ResultsPage),
  ],
})
export class ResultsPageModule {}

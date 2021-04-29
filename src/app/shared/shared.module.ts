import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    JumbotronComponent,
    FooterComponent,
    CardComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JumbotronComponent,
    FooterComponent,
    CardComponent,
    LoadingComponent
  ]
})
export class SharedModule { }

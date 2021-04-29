import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    JumbotronComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JumbotronComponent,
    FooterComponent
  ]
})
export class SharedModule { }

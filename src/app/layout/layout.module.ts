import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    //FlexLayoutModule,
    RouterModule.forChild([])
  ],
  exports: [MainLayoutComponent],
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent
    
  ]
})
export class LayoutModule { }

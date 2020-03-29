import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortFolioRoutingModule } from './portfolio-routing.module';




@NgModule({
  imports: [
    CommonModule,
    PortFolioRoutingModule

  ],
  declarations: [PortfolioComponent]
})
export class ProtFolioModule { }

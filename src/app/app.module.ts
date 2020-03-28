import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutMeModule } from './about-me/about-me.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AboutMeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

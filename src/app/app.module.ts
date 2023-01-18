import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { HeroSection } from './Components/HeroSection/Hero.Component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSection,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

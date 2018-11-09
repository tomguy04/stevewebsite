import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClient } from 'selenium-webdriver/http';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FilmPageComponent } from './film-page/film-page.component';
import { TvPageComponent } from './tv-page/tv-page.component';
import { CommercialsComponent } from './commercials/commercials.component';
import { BacklotsComponent } from './backlots/backlots.component';
import { WorkPageComponent } from './work-page/work-page.component';
import { BioPageComponent } from './bio-page/bio-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProjectsPageComponent,
    WorkPageComponent,
    ContactPageComponent,
    FilmPageComponent,
    TvPageComponent,
    CommercialsComponent,
    BacklotsComponent,
    BioPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

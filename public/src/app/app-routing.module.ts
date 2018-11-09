import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { WorkPageComponent } from './work-page/work-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FilmPageComponent } from './film-page/film-page.component';
import { TvPageComponent } from './tv-page/tv-page.component';
import { CommercialsComponent } from './commercials/commercials.component';
import { BacklotsComponent } from './backlots/backlots.component';
import { BioPageComponent } from './bio-page/bio-page.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: MainPageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'work', component: WorkPageComponent},
  {path: 'bio', component: BioPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'projects/film', component: FilmPageComponent},
  {path: 'projects/tv', component: TvPageComponent},
  {path: 'projects/commercials', component: CommercialsComponent},
  {path: 'projects/backlots', component: BacklotsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

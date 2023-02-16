import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'partners', component: PartnersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

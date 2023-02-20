import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  
  { 
    path: 'partners', 
    component: PartnersComponent,
    children: [
      {
        path: 'contact', // child route path
        component: ContactComponent, // child route component that the router renders
      },
      {
        path: 'tab2',
        component: AboutComponent, // another child route component that the router renders
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

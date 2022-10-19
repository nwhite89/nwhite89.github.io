import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'about',
        pathMatch: 'full',
        component: AboutMeComponent,
    },
    {
        path: 'contact',
        pathMatch: 'full',
        component: ContactComponent,
    },
    {
        path: 'portfolio',
        pathMatch: 'full',
        component: PortfolioComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

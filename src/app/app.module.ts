import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LightgalleryModule } from 'lightgallery/angular/12';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        AboutMeComponent,
        PortfolioComponent,
        ContactComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LightgalleryModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }

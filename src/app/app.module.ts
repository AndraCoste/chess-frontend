import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Headers} from '@angular/http';

import {AppComponent} from './app.component';
import {ARTICLE_SERVICE} from './services/article.service'

import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import {ArticleServiceAPI} from "./services/article.service.api";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {LandingpageModule} from "./modules/landingpage/landingpage.module";
import { MenuComponent } from './components/menu/menu.component';
import {RegisterModule} from "./modules/register/register.module";

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ModalModule,
        LandingpageModule,
        RegisterModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        { provide: ARTICLE_SERVICE, useClass: ArticleServiceAPI }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

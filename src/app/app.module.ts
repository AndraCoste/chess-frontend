import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, Headers} from '@angular/http';

import {AppComponent} from './app.component';
import {ARTICLE_SERVICE} from './services/article.service'

import {ModalModule, DropdownModule} from 'ng2-bootstrap/ng2-bootstrap';
import {ArticleServiceAPI} from "./services/article.service.api";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {LandingpageModule} from "./modules/landingpage/landingpage.module";
import {MenuComponent} from './components/menu/menu.component';
import {RegisterModule} from "./modules/register/register.module";

//noinspection TypeScriptCheckImport
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    LandingpageModule,
    RegisterModule,
    BrowserModule,
    HttpModule,
    ModalModule,
    DropdownModule,
    RouterModule.forRoot(ROUTES),

    FormsModule,
    ReactiveFormsModule,
    Ng2PageScrollModule
  ],
  providers: [
    {provide: ARTICLE_SERVICE, useClass: ArticleServiceAPI}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

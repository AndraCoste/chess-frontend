import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Headers} from '@angular/http';

import {AppComponent} from './app.component';
import {RulesArticle} from './components/rules/rules.component'
import {ARTICLE_SERVICE} from './services/article.service'
import {RegistrationArticle} from "./components/registration/registration.component";
import {Partners} from "./components/partners/partners.component";
import {Banner} from "./components/banner/banner.component";
import {PrevEditions} from "./components/prev-editions/prev-editions.component";
import {AboutLigaAC} from "./components/about-liga-ac/about-liga-ac.component";
import {Contact} from "./components/contact/contact.component";
import {ArticleServiceMock} from "./services/article.service.mock";
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import {ArticleServiceAPI} from "./services/article.service.api";

@NgModule({
    declarations: [
        AppComponent,
        RulesArticle,
        RegistrationArticle,
        Partners,
        Banner,
        PrevEditions,
        AboutLigaAC,
        Contact
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ModalModule
    ],
    providers: [
        { provide: ARTICLE_SERVICE, useClass: ArticleServiceAPI }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
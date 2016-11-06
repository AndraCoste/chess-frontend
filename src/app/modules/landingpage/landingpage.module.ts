import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Headers} from '@angular/http';


import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import {RouterModule} from "@angular/router";
import {LandingpageComponent} from "./landingpage.component";
import {Contact} from "./components/contact/contact.component";
import {AboutLigaAC} from "./components/about-liga-ac/about-liga-ac.component";
import {PrevEditions} from "./components/prev-editions/prev-editions.component";
import {Banner} from "./components/banner/banner.component";
import {Partners} from "./components/partners/partners.component";
import {RegistrationArticle} from "./components/registration/registration.component";
import {RulesArticle} from "./components/rules/rules.component";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [
        LandingpageComponent,
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
        ModalModule,
        RouterModule,
        CommonModule,
    ],
    providers: [
    ],
    bootstrap: [LandingpageComponent]
})
export class LandingpageModule {
}

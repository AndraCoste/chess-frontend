import { Component } from '@angular/core';

//noinspection TypeScriptCheckImport
import template from './app.component.html';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AboutLigaAC} from "./components/about-liga-ac/about-liga-ac.component";
import {RegistrationArticle} from "./components/registration/registration.component";
import {RulesArticle} from "./components/rules/rules.component";
import {Banner} from "./components/banner/banner.component";
import {PrevEditions} from "./components/prev-editions/prev-editions.component";
import {Contact} from "./components/contact/contact.component";
import {Partners} from "./components/partners/partners.component";

@Component({
  selector: 'app',
  template,
  directives: [
      AboutLigaAC, RegistrationArticle, RulesArticle,
      Banner, PrevEditions, Contact, Partners
  ]
})
export class AppComponent {
  constructor() {
  }
}

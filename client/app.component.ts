import { Component } from '@angular/core';

//noinspection TypeScriptCheckImport
import template from './app.component.html';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AboutLigaAC} from "./components/about-liga-ac/about-liga-ac.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {RulesComponent} from "./components/rules/rules.component";

@Component({
  selector: 'app',
  template,
  directives: [AboutLigaAC, RegistrationComponent, RulesComponent]
})
export class AppComponent {
  constructor() {
  }
}

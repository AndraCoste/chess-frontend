import { Component } from '@angular/core';

//noinspection TypeScriptCheckImport
import template from './app.component.html';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AboutLigaAC} from "./components/about-liga-ac/about-liga-ac.component";

@Component({
  selector: 'app',
  template,
  directives: [AboutLigaAC]
})
export class AppComponent {
  constructor() {
  }
}

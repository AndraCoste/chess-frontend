import { Component } from '@angular/core';

import { DemoComponent } from './imports/demo/demo.component';

//noinspection TypeScriptCheckImport
import template from './app.component.html';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app',
  template,
  directives: [DemoComponent]
})
export class AppComponent {
  constructor() {
  }
}

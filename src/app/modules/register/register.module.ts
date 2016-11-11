import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RegistrationServiceAPI} from "../../services/registration.service";
import {TdrDatePickerComponent} from "../../components/tdr-date-picker/tdr-date-picker.component";

import {DropdownModule, TooltipModule} from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    TooltipModule
  ],
  declarations: [RegisterComponent, TdrDatePickerComponent],
  providers: [RegistrationServiceAPI]
})
export class RegisterModule { }

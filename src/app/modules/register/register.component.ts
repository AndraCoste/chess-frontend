import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegistrationServiceAPI} from "../../services/registration.service";

const EmailRegex = "^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  private loading: boolean = false;

  constructor(private fb: FormBuilder, private registrationService: RegistrationServiceAPI) {
    this.form = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email' : ['', [Validators.required, Validators.pattern(EmailRegex)]],
      'phone': ['', Validators.required],
      'birthDate': ['', Validators.required],
      'university': ['', Validators.required],
      'legitimated' : false,
    })
  }

  ngOnInit() {
  }

  submitForm(form:FormGroup) {
    console.log(form.value);
    this.registrationService.register(form.value).subscribe(data=>{
      var response = JSON.parse(data["_body"]);
      console.log("data", response);
    });
  }

}

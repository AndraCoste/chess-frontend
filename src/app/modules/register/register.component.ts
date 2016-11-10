import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { RegistrationServiceAPI } from "../../services/registration.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit{

  form: FormGroup;
  loading = false;
  private successMessage: boolean = false;
  private errorMessage: boolean = false;


  constructor(private fb: FormBuilder, private registrationService: RegistrationServiceAPI) {
  }


  ngOnInit() {
    this.form = this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required]],
      'phone': ['', [Validators.required, Validators.minLength(10)]],
      'birthDate': ['', Validators.required],
      'university': ['', Validators.required],
      'legitimated': false,
    });
    // (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);

  }



  submitForm(form: FormGroup) {
    // console.log(form.value);

    this.successMessage = this.errorMessage = false;
    if (form.invalid) {
      console.log("invalid form, updating");
      for (var i in this.form.controls) {
        this.form.controls[i].markAsTouched();
      }
      return;
    }
    // console.log(form.value);
    this.loading = true;

    setTimeout(() => {
      var values = form.value;
      if (!values.legitimated) {
        values.legitimated = false;
      }
      this.registrationService.register(values).subscribe(
        data=> {
          var response = JSON.parse(data["_body"]);
          console.log("data", response);
          this.loading = false;
          this.successMessage = true;
          this.form.reset();
        },
        err=> {
          console.log("err", err);
          this.loading = false;
          this.errorMessage = true;
        }
      );
    }, 1000);

    // setTimeout(() => {
    //   this.loading = false;
    //   this.errorMessage = true;
    // }, 2000);
  }

  invalidField(fieldName: string): boolean {
    var res = !this.form.controls[fieldName].valid && this.form.controls[fieldName].touched;
    // console.log("res for " + fieldName + " is " + res);
    return res;
  }

  invalidForm() {
    for (var i in this.form.controls) {
      if (this.invalidField(i)) {
        return true;
      }
    }
    return false;
  }

  log() {
    console.log("form.vaid=", this.form.valid);
    console.log("form.touched=", this.form.touched);
  }


  birthDateChanged(eventArgs: any) {
    var dt = eventArgs;
    var dts = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
    console.log(dts);
    this.form.patchValue({birthDate: dts});
  }
}

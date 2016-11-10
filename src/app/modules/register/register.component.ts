import {Component, OnInit} from '@angular/core';
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
  private successMessage: boolean = false;
  private errorMessage: boolean = false;


  constructor(private fb: FormBuilder, private registrationService: RegistrationServiceAPI) {
    this.form = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.pattern(EmailRegex)]],
      'phone': ['', Validators.required],
      'birthDate': ['', Validators.required],
      'university': ['', Validators.required],
      'legitimated': false,
    });
    // (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);

  }

  ngOnInit() {
    // this.loading = true;
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

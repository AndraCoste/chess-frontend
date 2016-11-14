import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {ArticleServiceAPI} from "../../../../services/article.service.api";

@Component({
  selector: 'contact',
  templateUrl: './contact.template.html',
  styleUrls: ['./contact.style.less']
})
export class Contact implements OnInit {

  status: string = 'none';

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private articleService: ArticleServiceAPI) {
  }

  submitForm(form: FormGroup) {
    if(this.invalidForm()){
      this.status = "invalid";
      return;
    }

    this.status = 'loading';
    setTimeout(() => {

      this.articleService.postContact(form.value).subscribe(
        data => {
          this.status = 'success';
          form.reset();
        },
        err => {
          this.status = 'error';
          throw Error("contact form error")
        }
      );

    }, 3000);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'subject': ['', Validators.required],
      'message': ['', Validators.required]
    });
  }
  invalidForm() {
    for (var i in this.form.controls) {
      if (this.invalidField(i)) {
        return true;
      }
    }
    return false;
  }
  invalidField(fieldName: string): boolean {
    var res = !this.form.controls[fieldName].valid && this.form.controls[fieldName].touched;
    // console.log("res for " + fieldName + " is " + res);
    return res;
  }
}

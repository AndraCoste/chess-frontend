import {Component, Inject, OnInit} from "@angular/core";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {ArticleService, ARTICLE_SERVICE} from "../../../../services/article.service";

@Component({
  selector: 'contact',
  templateUrl: './contact.template.html',
  styleUrls: ['./contact.style.less']
})
export class Contact implements OnInit {

  status: string = 'none';

  form: FormGroup;

  constructor(@Inject(ARTICLE_SERVICE) private articleService: ArticleService,
              private formBuilder: FormBuilder) {
  }

  submitForm(form: FormGroup) {
    this.status = 'none';
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
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'subject': ['', Validators.required],
      'message': ['', Validators.required]
    });
  }
}

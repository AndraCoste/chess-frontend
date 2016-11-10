
import {Component, Inject} from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import {ArticleService, ARTICLE_SERVICE} from "../../../../services/article.service";

@Component({
    selector: 'contact',
    templateUrl: './contact.template.html',
    styleUrls: ['./contact.style.less']
})
export class Contact {

    send = false;

    form: FormGroup;

    constructor(
        @Inject(ARTICLE_SERVICE) private articleService: ArticleService,
        private formBuilder: FormBuilder
    ) {
    }

    submitForm(form:FormGroup) {
        this.articleService.postContact(form.value).subscribe(
            data => {
                this.send = true;
                form.reset();
            },
            err => {
                this.send = false
                throw Error("contact form error") }
        )
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            'name': ['', Validators.required],
            'email': ['', Validators.required],
            'subject': ['', Validators.required],
            'message': ['', Validators.required]
        })
    }
}


import {Component, Inject} from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import {ArticleService, ARTICLE_SERVICE} from "../../../../services/article.service";
import ArticleDataObject from "../../../../model/article-data-object";

const EmailRegex = "^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

@Component({
    selector: 'contact',
    templateUrl: './contact.template.html',
    styleUrls: ['./contact.style.less']
})
export class Contact {

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };

    // private model = {
    //     name: null,
    //     email: null,
    //     subject: null,
    //     message: null
    // };

    private send = false;

    form: FormGroup;

    constructor(
        @Inject(ARTICLE_SERVICE) private articleService: ArticleService,
        private formBuilder: FormBuilder
    ) {
        articleService.getArticle('contact').subscribe(
            data => {this.data = data; console.log(data)},
            err => {throw new Error('articleService Error: ')}
        )
    }

    onSubmit() {
        
    }
    submitForm(form:FormGroup){
        this.articleService.postContact(form.value).subscribe(
            data => this.send = true,
            err => {
                this.send = false
                throw Error("contact form error") }
        )
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            'name': ['', Validators.required],
            'email': ['', Validators.required, Validators.pattern(EmailRegex)],
            'subject': ['', Validators.required],
            'message': ['', Validators.required]
        })
    }


}

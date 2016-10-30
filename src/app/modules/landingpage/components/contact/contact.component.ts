
import {Component, Inject} from "@angular/core";
import {ArticleService, ARTICLE_SERVICE} from "../../../../services/article.service";
import ArticleDataObject from "../../../../model/article-data-object";

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

    private model = {
        name: null,
        email: null,
        subject: null,
        message: null
    };

    private send = false;

    constructor(@Inject(ARTICLE_SERVICE) private articleService: ArticleService) {



        articleService.getArticle('contact').subscribe(
            data => {this.data = data},
            err => {throw new Error('articleService Error: ')}
        )
    }

    onSubmit() {
        this.articleService.postContact(this.model).subscribe(
            data => this.send = true,
            err => {
                this.send = false
                throw Error("contact form error") }
        )
    }


}

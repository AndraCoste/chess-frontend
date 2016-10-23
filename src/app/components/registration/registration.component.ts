import {Component, Inject} from "@angular/core";
import ArticleDataObject from "../../model/article-data-object";
import {ArticleService, ARTICLE_SERVICE} from "../../services/article.service";

@Component({
    selector: 'registration',
    templateUrl: './registration.template.html',
    styleUrls: ['./registration.style.less']
})
export class RegistrationArticle {

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };


    constructor(@Inject(ARTICLE_SERVICE) private articleService: ArticleService) {
        articleService.getArticle('registration').subscribe(
            data => {this.data = data},
            err => {throw new Error('articleService Error: ')}
        )
    }
}

import {Component} from "@angular/core";
import ArticleDataObject from "../../../../model/article-data-object";
import {ArticleServiceAPI} from "../../../../services/article.service.api";
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


    constructor( private articleService: ArticleServiceAPI) {
        articleService.getArticle('registration').subscribe(
            data => {this.data = data},
            err => {throw new Error('articleService Error: ')}
        )
    }
}

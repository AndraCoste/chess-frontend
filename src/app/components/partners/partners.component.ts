
import {Component, Inject} from "@angular/core";
import {ArticleService, ARTICLE_SERVICE} from "../../services/article.service";
import ArticleDataObject from "../../model/article-data-object";


@Component({
    selector: 'partners',
    templateUrl: './partners.template.html',
    styleUrls: ['./partners.style.less']
})
export class Partners{

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };


    constructor(@Inject(ARTICLE_SERVICE) private articleService: ArticleService) {
        articleService.getArticle('partners').subscribe(
            data => {this.data = data},
            err => {throw new Error('articleService Error: ')}
        )
    }
}
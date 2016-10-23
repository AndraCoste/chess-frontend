
import {Component, Inject} from "@angular/core";
import {ArticleService, ARTICLE_SERVICE} from "../../services/article.service";
import ArticleDataObject from "../../model/article-data-object";

@Component({
    selector: 'banner',
    templateUrl: './banner.template.html',
    styleUrls: ['./banner.style.less']
})
export class Banner{

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };


    constructor(@Inject(ARTICLE_SERVICE) private articleService: ArticleService) {
        articleService.getArticle('banner').subscribe(
            data => {this.data = data},
            err => {throw new Error('articleService Error: ')}
        )
    }
}

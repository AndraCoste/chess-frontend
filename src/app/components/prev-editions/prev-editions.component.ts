import {Component, Inject} from "@angular/core";
import {ArticleService, ARTICLE_SERVICE} from "../../services/article.service";
import ArticleDataObject from "../../model/article-data-object";

@Component({
    selector: 'prev-editions',
    templateUrl: './prev-editions.template.html',
    styleUrls: ['./prev-editions.style.less']

})
export class PrevEditions{

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };

    constructor(@Inject(ARTICLE_SERVICE) private articleService: ArticleService) {
        articleService.getArticle('prev-editions').subscribe(
            data => {this.data = data},
            err => {throw new Error('articleService Error: ')}
        )
    }
}

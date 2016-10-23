
import {Component, Inject} from "@angular/core";
import ArticleDataObject from "../../model/article-data-object";
import {ArticleService, ARTICLE_SERVICE} from "../../services/article.service";


@Component({
    selector: 'rules',
    templateUrl: './rules.template.html',
    styleUrls: ['./rules.style.less']
})
export class RulesArticle{

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };


    constructor(@Inject(ARTICLE_SERVICE) private articleService: ArticleService) {
        articleService.getArticle('rules').subscribe(
            data => {this.data = data},
            err => {throw new Error('articleService Error: ')}
        )
    }
}

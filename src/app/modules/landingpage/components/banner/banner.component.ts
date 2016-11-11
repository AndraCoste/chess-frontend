
import {Component} from "@angular/core";
import ArticleDataObject from "../../../../model/article-data-object";
import {ArticleServiceAPI} from "../../../../services/article.service.api";

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


    constructor(private articleService: ArticleServiceAPI) {
        this.articleService.getArticle('banner').subscribe(
            data => {this.data = data},
            err => {throw new Error('articleService Error: ')}
        )
    }
}

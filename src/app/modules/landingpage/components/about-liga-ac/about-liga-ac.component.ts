import {Component} from "@angular/core";
import ArticleDataObject from "../../../../model/article-data-object";
import {ArticleServiceAPI} from "../../../../services/article.service.api";

@Component({
    selector: 'about-liga-ac',
    templateUrl: './about-liga-ac.template.html',
    styleUrls: ['./about-liga-ac.style.less']
})
export class AboutLigaAC{

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };

    constructor(private articleService: ArticleServiceAPI) {
        articleService.getArticle('about-liga-ac').subscribe(
            data => {this.data = data},
            err => {throw new Error('articleService Error: ')}
        )
    }

}

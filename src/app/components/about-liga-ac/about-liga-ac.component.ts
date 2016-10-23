import {Component, Inject} from "@angular/core";
import {ArticleService, ARTICLE_SERVICE} from "../../services/article.service";
import ArticleDataObject from "../../model/article-data-object";

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

    constructor(@Inject(ARTICLE_SERVICE) private articleService: ArticleService) {
        articleService.getArticle('about-liga-ac').subscribe(
            data => {this.data = data},
            err => {throw new Error('articleService Error: ')}
        )
    }

}

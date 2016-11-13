import {Component} from "@angular/core";
import ArticleDataObject from "../../../../model/article-data-object";
import {ArticleServiceAPI} from "../../../../services/article.service.api";
import {ArticleComponent} from "../article-component";
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'about-liga-ac',
  templateUrl: './about-liga-ac.template.html',
  styleUrls: ['./about-liga-ac.style.less']
})
export class AboutLigaAC extends ArticleComponent {

  private data: ArticleDataObject = {
    title: null,
    author: null,
    body: null,
    image: null,
    selector: null
  };

  constructor(private articleService: ArticleServiceAPI) {
    super();
    articleService.getArticle('about-liga-ac').subscribe(
      data => {
        this.data = data;
        this.observer.next({});
      },
      err => {
        throw new Error('articleService Error: ')
      }
    );
  }


}

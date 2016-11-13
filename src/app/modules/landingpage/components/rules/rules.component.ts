import {Component, ViewChild, OnInit} from "@angular/core";
import ArticleDataObject from "../../../../model/article-data-object";
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {ArticleServiceAPI} from "../../../../services/article.service.api";
import {ArticleComponent} from "../article-component";
import {Observable, Observer} from "rxjs";


@Component({
  selector: 'rules',
  templateUrl: './rules.template.html',
  styleUrls: ['./rules.style.less']
})
export class RulesArticle extends ArticleComponent {

  @ViewChild('childModal') public childModal: ModalDirective;

  private data: ArticleDataObject = {
    title: null,
    author: null,
    body: null,
    image: null,
    selector: null
  };


  constructor(private articleService: ArticleServiceAPI) {
    super();
    articleService.getArticle('rules').subscribe(
      data => {
        this.data = data;
        this.observer.next({});
        // console.log(data)
      },
      err => {
        throw new Error('articleService Error: ')
      }
    );
  }


  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }

}

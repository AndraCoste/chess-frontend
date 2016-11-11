import {Component, ViewChild} from "@angular/core";
import ArticleDataObject from "../../../../model/article-data-object";
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {ArticleServiceAPI} from "../../../../services/article.service.api";


@Component({
  selector: 'rules',
  templateUrl: './rules.template.html',
  styleUrls: ['./rules.style.less']
})
export class RulesArticle {
  @ViewChild('childModal') public childModal: ModalDirective;

  private data: ArticleDataObject = {
    title: null,
    author: null,
    body: null,
    image: null,
    selector: null
  };


  constructor(private articleService: ArticleServiceAPI) {
    articleService.getArticle('rules').subscribe(
      data => {
        this.data = data;
        // console.log(data)
      },
      err => {
        throw new Error('articleService Error: ')
      }
    )
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }

}

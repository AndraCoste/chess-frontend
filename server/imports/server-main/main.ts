
import "../publications/article-publication";
import {ArticleStartup} from "../startup/article-startup";


export class Main {

  private article;

  constructor() {
  }

  start():void {

    this.article = new ArticleStartup();
    this.article.init();
  }

}

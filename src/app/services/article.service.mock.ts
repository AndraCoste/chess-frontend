import article from './article.mock';
import ArticleDataObject from '../model/article-data-object'
import {Observable} from 'rxjs'
import {Injectable, Inject, Optional} from '@angular/core';
import {ArticleService} from "./article.service";

@Injectable()

export class ArticleServiceMock implements ArticleService {
  postContact(body) {
  }

  getArticle(selector) {

    let response: ArticleDataObject[];

    response = article.filter((data) => {
      return data.selector === selector
    });

    return Observable.from(response);

  }

}


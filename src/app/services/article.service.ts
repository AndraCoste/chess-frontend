


import {OpaqueToken} from '@angular/core';

import ArticleDataObject from '../model/article-data-object'
import {Observable} from "rxjs";

export interface ArticleService{
    getArticle(selector);
}

export let ARTICLE_SERVICE = new OpaqueToken('app.article.service');
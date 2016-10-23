import ArticleDataObject from '../model/article-data-object'
import {Injectable, Inject, Optional} from '@angular/core';
import {ArticleService} from "./article.service";
import {Http, Headers, RequestOptions} from "@angular/http";

@Injectable()

export class ArticleServiceAPI implements ArticleService {

    private articleUrl = 'http://api.chess.tdrs.me/';
    private headers;
    private options;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({headers: this.headers});

    }


    getAll() {
        return this.http.get(this.articleUrl + 'api/Articles/All', this.options);
    }

    getArticle(selector) {
        return this.http.get(this.articleUrl + 'api/Articles/GetArticleBySelector?selector='+ selector, this.options).map(data =>{ return JSON.parse(data['_body'])})
    }


}



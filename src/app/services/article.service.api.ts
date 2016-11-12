import ArticleDataObject from '../model/article-data-object'
import {Injectable, Inject, Optional} from '@angular/core';
import {ArticleService} from "./article.service";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()

export class ArticleServiceAPI implements ArticleService {

    private backendUri = 'http://api.chess.ligaac.ro/';
    // private articleUrl = 'http://api.chess.tdr/';
    private headers;
    private options;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.options = new RequestOptions({headers: this.headers});

    }


    getAll() {
        return this.http.get(this.backendUri + 'api/Articles/All', this.options);
    }

    private articleCache: any = {};
    getArticle(selector) {

        if(this.articleCache[selector]) {
          // console.log("got from cache: " + selector);
          return Observable.create((observer) => {
            setTimeout(() => {
              observer.next(this.articleCache[selector]);
            }, 200);
          });
        }

        return this.http.get(this.backendUri + 'api/Articles/GetArticleBySelector?selector='+ selector, this.options).map(data =>{
          var body = JSON.parse(data['_body']);
          this.articleCache[selector] = body;
          return body;
        });
    }


    postContact(body) {
        return this.http.post(this.backendUri + 'api/Contacts/Add', body, this.options);
    }

}



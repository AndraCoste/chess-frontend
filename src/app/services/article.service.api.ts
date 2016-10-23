import ArticleDataObject from '../model/article-data-object'
import {Observable} from 'rxjs'
import { Injectable, Inject, Optional } from '@angular/core';
import {ArticleService} from "./article.service";
import article from "./article.mock";
import {Http} from "@angular/http";

@Injectable()

export class ArticleServiceAPI implements ArticleService{

    private articleUrl='';

    constructor(private http: Http){

    }

    getAll(){
       return this.http.get(this.articleUrl);
    }

    getArticle(selector)  {
        // let response : ArticleDataObject[];
        let response;


        this.getAll().subscribe(data => {
            response = data;
        })


        response = article.filter((data) => {
            return data.selector === selector
        });

        return  Observable.from(response);

    }

}


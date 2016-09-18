import { Injectable } from '@angular/core';
import {ArticleDataObject} from "../../both/models/article-data-object";
import {ArticleCollection} from "../../both/collections/arrticle-collection";


@Injectable()
export class ArticleService {
    private data : ArticleDataObject;

    constructor() {

        Meteor.subscribe('article', 'ma-ta', () => {
            this.data = ArticleCollection.findOne();
        });

        // this.data = DemoCollection.find({});
    }

    public getData() : ArticleDataObject{
        Meteor.subscribe('article', 'ma-ta', () => {
            this.data = ArticleCollection.findOne();
        });

        return this.data;
    }
}

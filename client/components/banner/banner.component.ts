/**
 * Created by NM on 10/2/2016.
 */


import {Component, NgZone} from "@angular/core";
import {MeteorComponent} from "angular2-meteor";
//noinspection TypeScriptCheckImport
import template from "./banner.template.html";
import {ArticleDataObject} from "../../../both/models/article-data-object";
import {ArticleCollection} from "../../../both/collections/arrticle-collection";


@Component({
    selector: 'banner',
    template,
    providers: []
})
export class Banner extends MeteorComponent {

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };


    constructor() {
        super();


        Meteor.subscribe('article', 'banner', () => {
            var article = ArticleCollection.findOne({selector: "banner"});
            this.data = article ? article : this.data;
        });

    }
}

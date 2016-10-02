/**
 * Created by NM on 10/2/2016.
 */

//noinspection TypeScriptCheckImport
import template from "./prev-editions.template.html";
import {Component} from "@angular/core";
import {MeteorComponent} from "angular2-meteor";
import {ArticleDataObject} from "../../../both/models/article-data-object";
import {ArticleCollection} from "../../../both/collections/arrticle-collection";

@Component({
    selector: 'prev-editions',
    template,
    providers: []
})
export class PrevEditions extends MeteorComponent {

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };


    constructor() {
        super();


        Meteor.subscribe('article', 'prev-editions', () => {
            var article = ArticleCollection.findOne({selector: "prev-editions"});
            this.data = article ? article : this.data;
        });

    }
}

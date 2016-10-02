/**
 * Created by NM on 10/2/2016.
 */


//noinspection TypeScriptCheckImport
import template from "./partners.template.html";
import {Component} from "@angular/core";
import {MeteorComponent} from "angular2-meteor";
import {ArticleDataObject} from "../../../both/models/article-data-object";
import {ArticleCollection} from "../../../both/collections/arrticle-collection";

@Component({
    selector: 'partners',
    template,
    providers: []
})
export class Partners extends MeteorComponent {
    greeting: string;

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };


    constructor() {
        super();


        Meteor.subscribe('article', 'partners', () => {
            var article = ArticleCollection.findOne({selector: "partners"});
            this.data = article ? article : this.data;
        });

    }
}

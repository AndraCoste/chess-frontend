/**
 * Created by NM on 10/2/2016.
 */

//noinspection TypeScriptCheckImport
import template from "./contact.template.html";
import {Component} from "@angular/core";
import {MeteorComponent} from "angular2-meteor";
import {ArticleDataObject} from "../../../both/models/article-data-object";
import {ArticleCollection} from "../../../both/collections/arrticle-collection";

@Component({
    selector: 'contact',
    template,
    providers: []
})
export class Contact extends MeteorComponent {

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };

    constructor() {
        super();
        Meteor.subscribe('article', 'contact', () => {
            var article = ArticleCollection.findOne({selector: "contact"});
            this.data = article ? article : this.data;
        });

    }
}

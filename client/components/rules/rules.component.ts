/**
 * Created by NM on 10/2/2016.
 */

import {ArticleDataObject} from "../../../both/models/article-data-object";
import {MeteorComponent} from "angular2-meteor";
import {ArticleCollection} from "../../../both/collections/arrticle-collection";
import {Component} from "@angular/core";
//noinspection TypeScriptCheckImport
import template from "./rules.template.html";

@Component({
    selector: 'rules',
    template,
    providers: []
})
export class RulesComponent extends MeteorComponent {

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };


    constructor() {
        super();
        Meteor.subscribe('article', 'rules', () => {
            var article = ArticleCollection.findOne({selector: "rules"});
            this.data = article ? article : this.data;
        });
    }
}

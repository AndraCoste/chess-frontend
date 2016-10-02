import {Component} from "@angular/core";
import {MeteorComponent} from "angular2-meteor";
import {ArticleDataObject} from "../../../both/models/article-data-object";
import {ArticleCollection} from "../../../both/collections/arrticle-collection";
/**
 * Created by NM on 9/19/2016.
 */

//noinspection TypeScriptCheckImport
import template from "./registration.template.html";

@Component({
    selector: 'registration',
    template,
    providers: []
})
export class RegistrationComponent extends MeteorComponent {

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };


    constructor() {
        super();


        Meteor.subscribe('article', 'registration', () => {
            var article = ArticleCollection.findOne({selector: "registration"});
            this.data = article ? article : this.data;
        });

    }
}
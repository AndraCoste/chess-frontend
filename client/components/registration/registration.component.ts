import {ArticleService} from "../../services/article-service";
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
    providers: [ArticleService]
})
export class RegistrationComponent extends MeteorComponent {

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };


    constructor(private articleService: ArticleService) {
        super();


        Meteor.subscribe('article', 'registration', () => {
            this.data = ArticleCollection.findOne({selector:"registration"});
        });

    }
}

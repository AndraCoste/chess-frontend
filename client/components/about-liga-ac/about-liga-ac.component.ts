import {Component, NgZone} from "@angular/core";
import {MeteorComponent} from "angular2-meteor";
//noinspection TypeScriptCheckImport
import template from "./about-liga-ac.template.html";
import {ArticleService} from "../../services/article-service";
import {ArticleDataObject} from "../../../both/models/article-data-object";
import {ArticleCollection} from "../../../both/collections/arrticle-collection";


//noinspection TypeScriptCheckImport

@Component({
    selector: 'about-liga-ac',
    template,
    providers: [ArticleService]
})
export class AboutLigaAC extends MeteorComponent {
    greeting: string;

    private data: ArticleDataObject = {
        title: null,
        author: null,
        body: null,
        image: null,
        selector: null
    };


    constructor(private articleService: ArticleService) {
        super();


        Meteor.subscribe('article', 'about-liga-ac', () => {
            this.data = ArticleCollection.findOne();
        });

    }
}

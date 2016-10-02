import {Component, NgZone} from "@angular/core";
import {MeteorComponent} from "angular2-meteor";
//noinspection TypeScriptCheckImport
import template from "./about-liga-ac.template.html";
import {ArticleDataObject} from "../../../both/models/article-data-object";
import {ArticleCollection} from "../../../both/collections/arrticle-collection";


@Component({
    selector: 'about-liga-ac',
    template,
    providers: []
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


    constructor() {
        super();


        Meteor.subscribe('article', 'about-liga-ac', () => {
            this.data = ArticleCollection.findOne({selector:"about-liga-ac"});
        });

    }
}

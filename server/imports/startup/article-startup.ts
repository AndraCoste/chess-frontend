import {ArticleCollection} from "../../../both/collections/arrticle-collection";
import {ArticleDataObject} from "../../../both/models/article-data-object";


export class ArticleStartup {
    constructor() {

    }

    public init(): void {
        if (ArticleCollection.find({}).count() === 0) {
            ArticleCollection.insert(<ArticleDataObject>{
                title: "Despre Liga AC",
                author: null,
                body: "Liga Studenților din Facultatea de Automatică și Calculatoare (Liga AC) este o organizație studențească ce reprezintă interesele studenților din Facultatea de Automatică și Calculatoare, și îi susține în viața socială și culturală...",
                image: null,
                selector: "about-liga-ac"
            });


            ArticleCollection.insert(<ArticleDataObject>{
                title: "Despre Liga AC",
                author: null,
                body: "Liga Studenților din Facultatea de Automatică și Calculatoare (Liga AC) este o organizație studențească ce reprezintă interesele studenților din Facultatea de Automatică și Calculatoare, și îi susține în viața socială și culturală...",
                image: null,
                selector: "ma-ta"
            });
        }
    }
}
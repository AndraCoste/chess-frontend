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
                body: "asdfdsf Studenților din Facultatea de Automatică și Calculatoare (Liga AC) este o organizație studențească ce reprezintă interesele studenților din Facultatea de Automatică și Calculatoare, și îi susține în viața socială și culturală...",
                image: null,
                selector: "ma-ta"
            });


            ArticleCollection.insert(<ArticleDataObject>{
                title: "Înscriere",
                author: null,
                body: " 123 Liga Studenților din Facultatea de Automatică și Calculatoare (Liga AC) este o organizație studențească ce reprezintă interesele studenților din Facultatea de Automatică și Calculatoare, și îi susține în viața socială și culturală...",
                image: null,
                selector: "registration"
            });

            ArticleCollection.insert(<ArticleDataObject>{
                title: "Regulament",
                author: null,
                body: " Regulament ....  este o organizație studențească ce reprezintă interesele studenților din Facultatea de Automatică și Calculatoare, și îi susține în viața socială și culturală...",
                image: null,
                selector: "rules"
            });

            ArticleCollection.insert(<ArticleDataObject>{
                title: "Banner?",
                author: null,
                body: " Banner-ul ....  este o organizație studențească ce reprezintă interesele studenților din Facultatea de Automatică și Calculatoare, și îi susține în viața socială și culturală...",
                image: null,
                selector: "banner"
            });
            ArticleCollection.insert(<ArticleDataObject>{
                title: "Ediții Hanterioare",
                author: null,
                body: " Hedițiile anterioare ....  este o organizație studențească ce reprezintă interesele studenților din Facultatea de Automatică și Calculatoare, și îi susține în viața socială și culturală...",
                image: null,
                selector: "prev-editions"
            });
            ArticleCollection.insert(<ArticleDataObject>{
                title: "Parteneri",
                author: null,
                body: "Partenerii ....  este o organizație studențească ce reprezintă interesele studenților din Facultatea de Automatică și Calculatoare, și îi susține în viața socială și culturală...",
                image: null,
                selector: "partners"
            });
            ArticleCollection.insert(<ArticleDataObject>{
                title: "Contact",
                author: null,
                body: "Contactul ....  este o organizație studențească ce reprezintă interesele studenților din Facultatea de Automatică și Calculatoare, și îi susține în viața socială și culturală...",
                image: null,
                selector: "contact"
            });
        }
    }
}

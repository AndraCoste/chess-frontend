
import { ArticleCollection } from '../../../both/collections/arrticle-collection';

import {Meteor} from 'meteor/meteor';


Meteor.publish('article-collection', () => ArticleCollection.find());

function buildQuery(articleName?: string): Object {
        return {$and: [{selector: articleName}]};
}



Meteor.publish('article', function(articleName: string) {
    return ArticleCollection.find(buildQuery.call(this, articleName));
});

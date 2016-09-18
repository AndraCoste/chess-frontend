
import { DemoCollection } from '../../../both/collections/demo-collection';
import { DemoDataObject } from '../../../both/models/demo-data-object';

import {Meteor} from 'meteor/meteor';


Meteor.publish('demo', () => DemoCollection.find());

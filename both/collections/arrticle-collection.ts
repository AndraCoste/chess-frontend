import {ArticleDataObject} from "../models/article-data-object";
import {Mongo} from "meteor/mongo";

export const ArticleCollection = new Mongo.Collection<ArticleDataObject>('article-collection');
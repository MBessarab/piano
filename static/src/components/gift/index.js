import {ArticlesView, CollectionArticles} from "common_article";
import _ from 'underscore';

export default class extends ArticlesView {
    constructor(option={}){
        _.defaults(option, {
            collection: new GiftCollection(),
        });
        super(option);
    }
}

class GiftCollection extends CollectionArticles {
    url(){
        return '/api/gift';
    }
}
import {ArticlesView, CollectionArticles} from "common_article";
import _ from 'underscore';

export default class extends ArticlesView {
    constructor(option={}){
        _.defaults(option, {
            collection: new NewsCollection(),
        });
        super(option);
    }
}

class NewsCollection extends CollectionArticles {
    url(){
        return '/api/news';
    }
}
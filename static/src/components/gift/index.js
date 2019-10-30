import {ArticlesView, CollectionArticles} from "common_article/index";

export default class extends ArticlesView {
    constructor(option={}){
        _.defaults(option, {
            collection: GiftCollection,
        });
        super(option);
    }
}

class GiftCollection extends CollectionArticles {
    url(){
        return `${location.origin}/api/gift`;
    }
}
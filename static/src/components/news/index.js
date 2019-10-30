import {ArticlesView, CollectionArticles} from "common_article/index";

export default class extends ArticlesView {
    constructor(option={}){
        _.defaults(option, {
            collection: NewsCollection,
        });
        super(option);
    }
}

class NewsCollection extends CollectionArticles {
    url(){
        return `${location.origin}/api/news`;
    }
}
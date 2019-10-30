import {ArticlesView, CollectionArticles} from "common_article/index";

export default class extends ArticlesView {
    constructor(option={}){
        _.defaults(option, {
            collection: CourseCollection,
        });
        super(option);
    }
}

class CourseCollection extends CollectionArticles {
    url(){
        return `${location.origin}/api/course`;
    }
}
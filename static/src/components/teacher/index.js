import {ArticlesView, CollectionArticles} from "common_article/index";

export default class extends ArticlesView {
    constructor(option={}){
        _.defaults(option, {
            collection: TeacherCollection,
        });
        super(option);
    }
}

class TeacherCollection extends CollectionArticles {
    url(){
        return `${location.origin}/api/teacher`;
    }
}
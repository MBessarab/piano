import {ArticlesView, CollectionArticles} from "common_article";
import _ from 'underscore';

export default class extends ArticlesView {
    constructor(option={}){
        _.defaults(option, {
            collection: new TeacherCollection(),
        });
        super(option);
    }
}

class TeacherCollection extends CollectionArticles {
    url(){
        return `${location.origin}/api/teacher`;
    }
}
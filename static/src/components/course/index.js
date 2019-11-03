import {ArticlesView, CollectionArticles} from "common_article";
import _ from 'underscore';

export default class extends ArticlesView {
    constructor(option={}){
        _.defaults(option, {
            collection: new CourseCollection(),
        });
        super(option);
    }
}

class CourseCollection extends CollectionArticles {
    url(){
        return '/api/course';
    }
}
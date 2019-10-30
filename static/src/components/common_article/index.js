import Mn from 'backbone.marionette';
import Bb from 'backbone';
import _ from 'underscore';
import ArticleTemplate from './template/article.hbs';

export class ArticlesView extends Mn.CollectionView {
    constructor(option={}){
        _.defaults(option, {
            childView: ArticleItem,
            className: 'content-collection',
        });
        super(option);
    }

    loadInfo(){
        this.collection.fetch();
    }
}

export class CollectionArticles extends Bb.Collection {
    url(){
        throw Exception("method must be override!");
    }
}

// Определиться с размером фото
// Добавить эффект превью. Размытый description
class ArticleItem extends Mn.View {
    constructor(option={}){
        _.defaults(option, {
            template: ArticleTemplate,
            className: 'content-collection',
            ui: {
              details: '.details',
            }
        });
        super(option);
    }

    templateContext(){
        return this.model.attributes;
    }

}
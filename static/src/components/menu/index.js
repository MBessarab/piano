import Mn from 'backbone.marionette';
import Bb from 'backbone';
import _ from 'underscore';
import MenuTemplate from './template/menu.hbs';


export default class extends Mn.CollectionView {
    constructor(option={}){
        _.defaults(option, {
            template: false,
            childView: ItemMenuView,
            collection: new CollectionMenuItems(),
            className: 'menu-container-view',
            regions: {
                menu: '.menu-container',
            },
            ui: {
                make_claim: '.make-claim-btn'
            }
        });
        super(option);
        this.collection.fetch();
    }

    switchView(){

    }
}

class CollectionMenuItems extends Bb.Collection{
    url(){
        return `${location.origin}/api/company/partition?active=True`;
    }
}

class ItemMenuView extends Mn.View{
    constructor(options={}){
        _.defaults(options, {
            template: MenuTemplate,
        });
        super(options);
    }
}
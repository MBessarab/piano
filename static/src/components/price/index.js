import Mn from 'backbone.marionette';
import _ from 'underscore';
import CollectionTemplate from './template/price_collection.hbs';
import ItemTemplate from './template/price_item.hbs';

export default class extends Mn.CollectionView {
    constructor(option={}){
        _.defaults(option, {
            template: CollectionTemplate,
            collection: new PriceCollection(),
            childView: PriceView,
            className: 'price-container-view',
            regions: {
                // menu: '.menu-container',
            }
        });
        super(option);
    }
}

class PriceView extends Mn.View{
    constructor(option={}) {
        _.defaults(_, {
            template: ItemTemplate,
        });
        super(option);
    }

    templateContext(){
        return {
            model: this.model,
            time: this.getTimeFromMinutes(this.model.get('time')),
        }
    }

    getTimeFromMinutes(minutes){
        let timeString = "";
        if (minutes % 60  === 0) {

        }
        return `${minutes / 60} ч.`
    }
}

class PriceCollection {
    url(){
        return `${location.origin}/api/price`
    }
}


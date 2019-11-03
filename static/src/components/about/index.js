import Mn from 'backbone.marionette';
import Bb from 'backbone';
import _ from 'underscore';
import AboutTemplate from './template/about.hbs';

export default class extends Mn.View {
    constructor(option={}){
        _.defaults(option, {
            template: AboutTemplate,
            model: new AboutModel(),
            className: 'about-container-view',
        });
        super(option);
    }

    loadData(){
        return this.model.fetch();
    }

    templateContext(){
        let dataModel = [];
        for (let i in this.model.attributes){
            let obj = {};
            obj[this.model.attributes[i].key] = this.model.attributes[i].value;

            obj['order'] = this.model.attributes[i].order;
            dataModel.push(obj);
        }
        dataModel.sort((a, b) => b.order - a.order);
        return {
            data: dataModel,
        };
    }
}

class AboutModel extends Bb.Model {
    url(){
        return '/api/company/contact';
    }
}
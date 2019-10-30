import Mn from 'backbone.marionette';
import _ from 'underscore';
import HeaderTemplate from './template/header.hbs';


export default class extends Mn.View {
    constructor(option={}){
        _.defaults(option, {
            template: HeaderTemplate,
            className: 'header-container-view',
            regions: {
                menu: '.menu-container',
            },
            ui: {
                make_claim: '.make-claim-btn'
            }
        });
        super(option);
        this.partitions = option['partitions'];
        this.phone = option['phone'];
    }

    templateContext(){
        return {
            partitions: this.partitions,
            phone: {
                number: this.phone.number,
                title: this.phone.title
            },
        }
    }

    switchView(partition){
    // дизайн кнопок
    }
}
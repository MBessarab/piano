import Mn from 'backbone.marionette';
import _ from 'underscore';
import FooterTemplate from './template/footer.hbs';


export default class extends Mn.View {
    constructor(option={}){
        _.defaults(option, {
            template: FooterTemplate,
            className: 'footer-container-view',
        });
        super(option);
        this.phone = option.phone;
    }

    templateContext(){
        return {
            current_date: new Date().getFullYear(),
            phone: this.phone,
        }
    }
}
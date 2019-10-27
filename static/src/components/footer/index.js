import Mn from 'backbone.marionette';
import _ from 'underscore';
import FooterTemplate from './template/footer.hbs';


export default class extends Mn.View {
    constructor(option={}){
        _.defaults(option, {
            template: FooterTemplate,
            className: 'footer-container',
            regions: {
                menu: '.menu-container',
            }
        });
        super(option)
    }

    initMenu(){
        // this.showChildView('menu', new HeaderView())
    }

    onRender(){
        this.initMenu();
    }
}
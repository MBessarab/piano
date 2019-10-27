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
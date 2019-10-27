import Mn from 'backbone.marionette';
import _ from 'underscore';
import MainViewTemplate from './template/main.hbs';
import HeaderView from 'header';

export default class extends Mn.View {
    constructor(option={}){
        _.defaults(option, {
            template: MainViewTemplate,
            className: 'views-container',
            regions: {
                header: '.header-container',
                content: '.content-container',
                footer: '.footer-container',
            }
        });
        super(option)
    }

    initHeader(){
        this.headerView = new HeaderView();
        this.showChildView('header', this.headerView);
    }

    initContent(){
        // this.contentView = new ContentView();
        // this.showChildView('content', this.contentView)
    }

    initFooter(){
        // this.footerView = new FooterView();
        // this.showChildView('footer', this.footerView)
    }

    onRender(){
        this.initHeader();
        this.initContent();
        this.initFooter();
    }

    switchMenu(view){

    }

    switcherView(view){
        this.switchMenu(view);
        this.showChildView('content', view);
    }
}
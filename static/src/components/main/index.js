import Mn from 'backbone.marionette';
import Bb from 'backbone';
import _ from 'underscore';
import MainViewTemplate from './template/main.hbs';
import HeaderView from 'header';
import ContentView from 'content';
import FooterView from 'footer';
import MenuView from 'menu';
import './template/main.styl';

export default class extends Mn.View {
    constructor(option = {}) {
        _.defaults(option, {
            template: MainViewTemplate,
            className: 'views-container',
            regions: {
                header: '.header-container',
                menu: '.menu-container',
                content: '.content-container',
                footer: '.footer-container',
            }
        });
        super(option);
        this._thisRendered = false;
    }

    initHeader() {
        this.showChildView('header', new HeaderView());
    }

    initContent() {
        this.showChildView('content', new ContentView());
    }

    initMenu(){
        this.showChildView('menu', new MenuView());
    }

    initFooter() {
        this.showChildView('footer', new FooterView());
    }

    customRender() {
        if(!this._thisRendered){
            this.initMenu();
            this.initContent();
            this.initHeader();
            this.initFooter();
            this._thisRendered = !this._thisRendered;
        }
    }

    switchToMainPage() {
        $.ajax(`${location.origin}/api/company/main_page`, {
                method: 'GET',
        }).then((data) => Bb.history.navigate(`#${data.partition}`, {trigger: true}))
    }

    switchViewContent(partition) {
        this.getChildView('content')
            .switchView(partition);

    }

    switchViewMenu(partition) {
        this.getChildView('menu')
            .switchView(partition);
    }

    switcherView(partition) {
        this.customRender();
        this.switchViewContent(partition);
        this.switchViewMenu(partition)
    }
}

class ModelPhone extends Bb.Model{
    url(){
        return '/api/company/contact?key__in=phone_number,phone_title';
    }
}
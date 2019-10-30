import Mn from 'backbone.marionette';
import _ from 'underscore';
import AboutTemplate from './template/about.hbs';

export default class extends Mn.View {
    constructor(option={}){
        _.defaults(option, {
            template: AboutTemplate,
            className: 'about-container-view',
            regions: {
                // menu: '.menu-container',
            }
        });
        super(option);
        this.data = undefined;
    }

    templateContext(){
        return {
            data: this.data,
        };
    }

    loadInfo(){
        return $.ajax(`${location.origin}/api/company/contact`, {
            method: 'GET',
        }).then((data) => this.data = data)
    }
}
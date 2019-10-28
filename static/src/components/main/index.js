import Mn from 'backbone.marionette';
import _ from 'underscore';
import MainViewTemplate from './template/main.hbs';
import HeaderView from 'header';
import $ from "jquery";
// import ContentView from 'content';
// import FooterView from 'footer';

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
        super(option);
        this.phone = "";
    }

    initHeader(partitions, self){
        self.showChildView('header', new HeaderView({
            partitions: partitions,
            phone: self.phone,
        }));
    }

    initContent(allowPartitions){
        this.showChildView('content', new ContentView({
            allowPartitions: allowPartitions,
        }));
    }

    // initFooter(){
    //     this.showChildView('footer', new FooterView());
    // }

    initAllowPartitions(initHeader, initContent){
         return $.ajax(`${location.origin}/api/company/partition?active=True`, {
            method: 'GET',
            success: parts => {
                let sorted_parts = _.sortBy(parts, (part) => part.order)
                initHeader(sorted_parts, this);
                // initContent(sorted_parts, this);
            }
        })
    }

    loadPhoneNumber(){
        return $.ajax(`${location.origin}/api/company/contact?key=phone_number`, {
            method: "GET",
        })
    }

    onRender(){
        this.loadPhoneNumber()
            .then((data) => {
                this.phone = data[0].value;
                return this.initAllowPartitions(
                        this.initHeader,
                        this.initContent
                    )
                }
            )
        .then(() => {
            return $.ajax(`${location.origin}/api/company/main_page`, {
                method: 'GET',
            });
        }).then((data) => this.switcherView(data.partition))

        // this.initFooter();
    }

    switchViewContent(partition){
        this.getChildView('content')
            .switchView(partition);
    }

    switchViewHeader(partition){
        this.getChildView('header')
            .switchView(partition);
    }

    switcherView(partition){
        this.switchViewContent(partition);
        this.switchViewHeader(partition)
    }
}
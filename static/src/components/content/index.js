import Mn from 'backbone.marionette';
import _ from 'underscore';
import ContentTemplate from './template/content.hbs';
import PriceView from 'price';
import AboutView from 'about';
import CourseView from 'course';
import GiftView from 'gift';
import NewsViews from 'news';
import TeacherView from 'teacher';

export default class extends Mn.View {
    constructor(option={}){
        _.defaults(option, {
            template: ContentTemplate,
            className: 'content-container-view',
            regions: {
                content: '.content',
            }
        });
        super(option);
        this.partitionGetter = {
            about: this.getAboutView,
            price: this.getPriceView,
            course: this.getCourseView,
            gift: this.getGiftView,
            news: this.getNewsView,
            teacher: this.getTeacherView,
        };
    }

    getAboutView(){
        return new AboutView();
    }

    getPriceView(){
        return new PriceView();
    }

    getCourseView(){
        return new CourseView();
    }

    getGiftView(){
        return new GiftView();
    }

    getNewsView(){
        return new NewsViews();
    }

    getTeacherView(){
        return new TeacherView();
    }

    getContentView(partition){
        if(!this.partitionGetter[partition]){
            console.error("Нет данной категории на фронте")
        }
        return this.partitionGetter[partition].bind(this)();
    }

    switchView(partition){
        let view = this.getContentView(partition);
        view.loadData().then(() => this.showChildView('content', view));
    }
}
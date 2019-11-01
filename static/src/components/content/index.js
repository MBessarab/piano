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
            price: this.getPriceView(this),
            course: this.getCourseView,
            gift: this.getGiftView,
            news: this.getNewsView,
            teacher: this.getTeacherView,
        };
        this.partitionViews = {}
    }

    getAboutView(){
        if(!this.partitionViews['about']){
            this.partitionViews['about'] = new AboutView();
        }
        return this.partitionViews['about'];
    }

    getPriceView(self){
        if(!self.partitionViews['price']){
            self.partitionViews['price'] = new PriceView();
        }
        return self.partitionViews['price']
    }

    getCourseView(){
        if(!this.partitionViews['course']){
            this.partitionViews['course'] = new CourseView();
        }
        return this.partitionViews['course']
    }

    getGiftView(){
        if(!this.partitionViews['gift']){
            this.partitionViews['gift'] = new GiftView();
        }
        return this.partitionViews['gift'];
    }

    async getNewsView(){
        if(!this.partitionViews['news']){
            this.partitionViews['news'] = new NewsViews();
        }
        return this.partitionViews['news'];
    }

    getTeacherView(){
        if(!this.partitionViews['teacher']){
            this.partitionViews['teacher'] = new TeacherView();
        }
        return this.partitionViews['teacher'];
    }

    getContentView(partition){
        if(!this.partitionGetter[partition]){
            console.error("Нет данной категории на фронте")
        }
        return this.partitionGetter[partition].bind(this)();
    }

    switchView(partition){
        let view = this.getContentView(partition);
        this.showChildView('content', view);
    }
}
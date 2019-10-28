import Mn from 'backbone.marionette';
import _ from 'underscore';
import ContentTemplate from './template/content.hbs';
import AboutView from 'about'
// import PriceView from 'price'
// import CourseView from 'course'
// import GiftView from 'gift'
// import NewsView from 'news'
// import TeacherView from 'teacher'

export default class extends Mn.View {
    constructor(option={}){
        _.defaults(option, {
            template: ContentTemplate,
            className: 'content-container-view',
            regions: {
                // menu: '.menu-container',
            }
        });
        super(option);
        this.partitionGetter = {
            about: this.getAboutView,
            // price: this.getPriceView,
            // course: this.getCourseView,
            // gift: this.getGiftView,
            // news: this.getNewsView,
            // teacher: this.getTeacherView,
        };
        this.partitionViews = {}
    }

    getAboutView(){
        if(!this.partitionViews['about']){
            this.partitionViews['about'] = new AboutView();
        }
        return this.partitionViews['about']
    }

    // getPriceView(){
    //     if(!this.partitionViews['price']){
    //         this.partitionViews['price'] = new PriceView();
    //     }
    //     return this.partitionViews['price']
    // }
    //
    // getCourseView(){
    //     if(!this.partitionViews['course']){
    //         this.partitionViews['course'] = new CourseView();
    //     }
    //     return this.partitionViews['course']
    // }
    //
    // getGiftView(){
    //     if(!this.partitionViews['gift']){
    //         this.partitionViews['gift'] = new GiftView();
    //     }
    //     return this.partitionViews['gift']
    // }
    //
    // getNewsView(){
    //     if(!this.partitionViews['news']){
    //         this.partitionViews['news'] = new NewsView();
    //     }
    //     return this.partitionViews['news']
    // }
    //
    // getTeacherView(){
    //     if(!this.partitionViews['teacher']){
    //         this.partitionViews['teacher'] = new TeacherView();
    //     }
    //     return this.partitionViews['teacher']
    // }

    getContentView(partition){
        this.partitionGetter[partition] || console.error("Нет данной категории на фронте")
    }

    switchView(partition){
        this.showChildView('content', this.getContentView(partition));
    }
}
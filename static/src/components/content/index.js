import Mn from 'backbone.marionette';
import _ from 'underscore';
import ContentTemplate from './template/content.hbs';
// import PriceView from 'price';
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
            // price: this.getPriceView(this),
            course: this.getCourseView,
            gift: this.getGiftView,
            news: this.getNewsView,
            teacher: this.getTeacherView,
        };
        this.partitionViews = {}
    }

    async getAboutView(){
        if(!this.partitionViews['about']){
            this.partitionViews['about'] = new AboutView();
            await this.partitionViews['about'].loadInfo();
        }
        return this.partitionViews['about']
    }

    // getPriceView(self){
    //     if(!self.partitionViews['price']){
    //         self.partitionViews['price'] = new PriceView();
    //         self.partitionViews['price'].loadInfo();
    //     }
    //     return self.partitionViews['price']
    // }

    getCourseView(){
        if(!this.partitionViews['course']){
            this.partitionViews['course'] = new CourseView();
            this.partitionViews['course'].loadInfo();
        }
        return this.partitionViews['course']
    }

    getGiftView(){
        if(!this.partitionViews['gift']){
            this.partitionViews['gift'] = new GiftView();
            this.partitionViews['gift'].loadInfo();
        }
        return this.partitionViews['gift']
    }

    async getNewsView(){
        if(!this.partitionViews['news']){
            this.partitionViews['news'] = new NewsViews();
            await this.partitionViews['news'].loadInfo();
        }
        return this.partitionViews['news'];
    }

    getTeacherView(){
        if(!this.partitionViews['teacher']){
            this.partitionViews['teacher'] = new TeacherView();
            this.partitionViews['teacher'].loadInfo();
        }
        return this.partitionViews['teacher']
    }

    async getContentView(partition){
        await this.partitionGetter[partition].bind(this)() || console.error("Нет данной категории на фронте")
    }

    switchView(partition){
        this.getContentView(partition).then((view) =>{
            this.showChildView('content', view);
        }, (e) => console.log(e))
    }
}
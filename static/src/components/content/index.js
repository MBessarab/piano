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
            about: this.getAboutView(this),
            // price: this.getPriceView(this),
            course: this.getCourseView(this),
            gift: this.getGiftView(this),
            news: this.getNewsView(this),
            teacher: this.getTeacherView(this),
        };
        this.partitionViews = {}
    }

    async getAboutView(self){
        if(!self.partitionViews['about']){
            self.partitionViews['about'] = new AboutView();
            await self.partitionViews['about'].loadInfo();
        }
        return self.partitionViews['about']
    }

    // getPriceView(self){
    //     if(!self.partitionViews['price']){
    //         self.partitionViews['price'] = new PriceView();
    //         self.partitionViews['price'].loadInfo();
    //     }
    //     return self.partitionViews['price']
    // }

    getCourseView(self){
        if(!self.partitionViews['course']){
            self.partitionViews['course'] = new CourseView();
            self.partitionViews['course'].loadInfo();
        }
        return self.partitionViews['course']
    }

    getGiftView(self){
        if(!self.partitionViews['gift']){
            self.partitionViews['gift'] = new GiftView();
            self.partitionViews['gift'].loadInfo();
        }
        return self.partitionViews['gift']
    }

    getNewsView(self){
        if(!self.partitionViews['news']){
            self.partitionViews['news'] = new NewsViews();
            self.partitionViews['news'].loadInfo();
        }
        return self.partitionViews['news'];
    }

    getTeacherView(self){
        if(!self.partitionViews['teacher']){
            self.partitionViews['teacher'] = new TeacherView();
            self.partitionViews['teacher'].loadInfo();
        }
        return self.partitionViews['teacher']
    }

    async getContentView(partition){
        await this.partitionGetter[partition] || console.error("Нет данной категории на фронте")
    }

    switchView(partition){
        this.getContentView(partition).then((view) =>{
            this.showChildView('content', view);
        }, (e) => console.log(e))
    }
}
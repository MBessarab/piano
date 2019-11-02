import Bb from 'backbone';
import Mn from 'backbone.marionette';
import $ from 'jquery';
import 'bootstrap';
import View from 'main';
import './styles.styl';
import _ from 'underscore';


class App extends Mn.Application {
    onStart() {
        this.showView(window.appView);
        new Router();
        Bb.history.start();
    }
}

window.appView = new View();
window.app = new App({ region: '#main-container' });

$(() => {
    window.app.start();
});

class Router extends Backbone.Router {
	constructor(option={}){
        _.defaults(option, {
            routes: {
                '': 'main',
                'about' : 'about',
                'course' : 'course',
                'price' : 'price',
                'teacher' : 'teacher',
                'news' : 'news',
                'gift' : 'gift',
            }
        });
        super(option);
    }

    showView(partition){
        appView.switcherView(partition);
    }

    main(){
	    window.appView.switchToMainPage();
    }

	about(){
	    this.showView('about')
    }

	course(){
	    this.showView('course')
    }

	gift(){
	    this.showView('gift')
    }

	teacher(){
	    this.showView('teacher')
    }

	price(){
	    this.showView('price')
    }

	news(){
	    this.showView('news')
    }
}

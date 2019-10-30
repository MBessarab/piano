import Bb from 'backbone';
import Mn from 'backbone.marionette';
import $ from 'jquery';
import 'bootstrap';
import View from 'main';
import './styles.styl';
import _ from 'underscore';


class App extends Mn.Application {
    onStart() {
        window.appView = new View();
        this.showView(window.appView);
        new Router();
        Bb.history.start();
    }
}

window.app = new App({ region: '#main-container' });

$(() => {
    window.app.start();
});

class Router extends Backbone.Router {
	constructor(option={}){
        _.defaults(option, {
            routes: {
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

	about(){
	    appView.switcherView('about')
    }

	course(){
	    appView.switcherView('course')
    }

	gift(){
	    appView.switcherView('gift')
    }

	teacher(){
	    appView.switcherView('teacher')
    }

	price(){
	    appView.switcherView('price')
    }

	news(){
	    appView.switcherView('news')
    }
}

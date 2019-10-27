import Bb from 'backbone';
import Mn from 'backbone.marionette';
import $ from 'jquery';
import 'bootstrap';
import View from 'main';
import './styles.styl';
import _ from 'underscore';
import AboutView from "about";


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
                '' : 'index',
                'about' : 'about',
            }
        });
        super(option);
        this.partitionHandler = {
            about: this.aboutHandler,
            // price: this.priceHandler,
            // course: this.courseHandler,
            // gift: this.giftHandler,
            // news: this.newsHandler,
            // teacher: this.teachHandler,
        }
    }

    aboutHandler(){
	    appView.switcherView(new AboutView());
    }

	index() {
		$.ajax(`${location.origin}/api/company/main_page`, {
            method: 'GET',
            success: (data) => this._main_page_success(data)
        })
	}

	_main_page_success(data){
        this.partitionHandler[data.partition]()
    }
}

/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {MyService} from 'js/services/MyService';

// Annotation section
@Component({
	selector: 'my-app',
	viewInjector: [MyService]
})
@View({
	templateUrl: 'templates/my-app.tpl.html',
	directives: [NgFor]
})

class MyComponent {
	mySvc:MyService;
	data:number = 1;
		
	constructor(mySvc:MyService) {
		this.mySvc = mySvc;
	}
	
	onInit() {
		this.mySvc.getData();
	}
}	

bootstrap(MyComponent, [MyService]);
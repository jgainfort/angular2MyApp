/// <reference path="../../../typings/tsd.d.ts" />
// Import
import {NgZone} from 'angular2/angular2';
import {SocketService} from 'js/services/SocketService';

export class MyService {
	zone:NgZone;
	myList:Array<string> = [];
	socketSvc:SocketService;
	 
	constructor() {
		this.zone = new NgZone({enableLongStackTrace: false});
		this.socketSvc = new SocketService();
		this.initListeners();
	}
	 
	getData() {
		this.socketSvc.emit('event');
	}
	
	initListeners() {
        this.socketSvc.socket.on('success', (data) => {
            this.zone.run(() => {
                this.myList = data;
                console.log('Updated List: ', this.myList);
            });
        });
    }

 }



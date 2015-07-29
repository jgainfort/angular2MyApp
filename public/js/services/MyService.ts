// Import
import {SocketService} from 'js/services/SocketService';

export class MyService {
	myList:Array<string> = [];
	socketSvc:SocketService;
	 
	constructor() {
		this.socketSvc = new SocketService();
		this.initListeners();
	}
	 
	getData() {
		this.socketSvc.emit('event');
	}
	
	initListeners() {
		this.socketSvc.socket.on('success', (data) => {
			this.myList = data;
			console.log('Updated List: ', this.myList);
		});
	}
 }



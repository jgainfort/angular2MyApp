// Import
let socket = io('/');

export class SocketService {
	socket;
	
	constructor() {
		this.socket = socket;
	}
	
	emit(type:string) {
		this.socket.emit(type);
	}
}

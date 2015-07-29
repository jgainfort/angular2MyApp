// Import
let socket = io('http://localhost:3000');

export class SocketService {
	socket;
	
	constructor() {
		this.socket = socket;
	}
	
	emit(type:string) {
		this.socket.emit(type);
	}
}

import { filter, map, Subject } from 'rxjs';

export class Events {
	private events: Subject<[string, any?]>;

	constructor() {
		this.events = new Subject();
	}

	on(eventName: string) {
		return this.events.asObservable().pipe(
			filter(([_eventName]) => _eventName === eventName),
			map(([_, data]) => data)
		);
	}

	emit(eventName: string, data?: any) {
		this.events.next([eventName, data]);
	}
}

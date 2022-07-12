import { map, BehaviorSubject, fromEvent } from "rxjs";

class PositionService {
    #position = new BehaviorSubject();

    isOnTop = this.#position
        .pipe(map(pos => pos < 20))
        .asObservable();

    get position() { return this.#position.value; }

    constructor() {
        this.#subscribeToPositionChange();
    }

    #subscribeToPositionChange() {
        fromEvent(window, 'scroll')
            .pipe(map(_ => window.scrollY))
            .subscribe(pos => this.#position.next(pos));
    }
}

export default new PositionService();
import { map, BehaviorSubject, fromEvent } from "rxjs";

class PositionService {
    #position = new BehaviorSubject();

    get position() { return this.#position.value; }

    set position(value) { this.#scrollTo(value); }

    get position$() { return this.#position.asObservable(); }

    get positionPercnet() { return this.#getScrollPositionInPercent(this.#position.value); }

    set positionPercnet(value) { this.#scrollToPercent(value); }

    get positionPercnet$() {
        return this.#position.pipe(map(pos => this.#getScrollPositionInPercent(pos)));
    }

    constructor() {
        this.#subscribeToPositionChange();
    }

    #subscribeToPositionChange() {
        fromEvent(window, 'scroll')
            .pipe(map(_ => document.body.scrollTop || document.documentElement.scrollTop))
            .subscribe(pos => this.#position.next(pos));
    }

    #scrollTo(position) {

    }

    #scrollToPercent(percent) {

    }

    #getScrollPositionInPercent(position) {
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        return (position / height) * 100;
    }
}

export default new PositionService();
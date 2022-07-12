import React from "react";
import { Subject } from "rxjs";

class PositionService {
    position = new Subject();

    leftHeader = this.position.asObservable();

    constructor() {
        setTimeout(() => { this.position.next(true) }, 2000)
    }
}

export default new PositionService();
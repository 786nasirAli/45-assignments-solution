"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create_car(manufacturer, model, ...options) {
    const car = Object.assign({ manufacturer,
        model }, Object.assign({}, ...options));
    return car;
}
;
let modify = create_car("Tayota", "Civic", { Color: "Black" }, { features: ["Backup Camera", "Sunroof"] });
console.log(modify);

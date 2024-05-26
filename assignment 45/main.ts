import { log } from "console";

function create_car(manufacturer: string, model: string, ...options: { [key : string] : any} []) {
    const car={
        manufacturer,
        model,
        ...Object.assign({},...options)
    };
    return car;
};

let modify=create_car("Tayota","Civic",{Color:"Black"},{features:["Backup Camera","Sunroof"]});

console.log(modify);
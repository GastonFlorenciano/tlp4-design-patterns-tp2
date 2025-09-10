import { ISubscriber } from "../interfaces/ISubscriber.js";

export class Student implements ISubscriber {

    constructor(private name: string) { }

    update(data: string): void {
        console.log(`${this.name}, tenés un mensaje nuevo: ${data}`);
    }
}

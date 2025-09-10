import {  IPublisher } from "../interfaces/IPublisher.js";
import { ISubscriber } from "../interfaces/ISubscriber.js";

export class Professor implements IPublisher {
    private observers: ISubscriber[] = [];

    subscribe(observer: ISubscriber): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: ISubscriber): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    
    publish(data: string): void {
        this.observers.forEach(observer => observer.update(data));
    }
}

import { ISubscriber } from "./ISubscriber.js";

export interface IPublisher {
    subscribe(observer: ISubscriber): void;
    unsubscribe(observer: ISubscriber): void;
    publish(data: string): void;
}
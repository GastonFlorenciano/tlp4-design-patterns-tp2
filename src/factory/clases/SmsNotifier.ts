import { INotifier } from "../interfaces/INotifier.js";

export class SmsNotifier implements INotifier {
    send(to: string, message: string): void {
        console.log(`Enviando SMS a ${to}: ${message}`);
    }
}
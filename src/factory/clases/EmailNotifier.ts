import { INotifier } from "../interfaces/INotifier.js";

export class EmailNotifier implements INotifier {
    send(to: string, message: string): void {
        console.log(`Enviando email a ${to}: ${message}`);
    }
}
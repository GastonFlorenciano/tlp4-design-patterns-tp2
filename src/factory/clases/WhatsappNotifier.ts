import { INotifier } from "../interfaces/INotifier.js";

export class WhatsappNotifier implements INotifier {
    send(to: string, message: string): void {
        console.log(`Enviando WhatsApp a ${to}: ${message}`);
    }
}

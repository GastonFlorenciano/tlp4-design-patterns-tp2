import { EmailNotifier } from "../clases/EmailNotifier.js";
import { SmsNotifier } from "../clases/SmsNotifier.js";
import { WhatsappNotifier } from "../clases/WhatsappNotifier.js";
import type { channel } from "../interfaces/channel.js";
import { INotifier } from "../interfaces/INotifier.js";

export class NotifierFactory {
    static create(channel: channel): INotifier {
        switch (channel) {
            case "email":
                return new EmailNotifier();
            case "sms":
                return new SmsNotifier();
            case "whatsapp":
                return new WhatsappNotifier();
            default:
                throw new Error("Tipo de notificador no soportado");
        }
    }
}

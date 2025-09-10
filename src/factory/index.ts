import { NotifierFactory } from "./clases/NotifierFactory.js";

export function runFactory() {

    const email = NotifierFactory.create("email");
    email.send("María","Hola desde el notificador de email!");

    const sms = NotifierFactory.create("sms");
    sms.send("Juan","Hola desde el notificador de SMS!");

    const whatsapp = NotifierFactory.create("whatsapp");
    whatsapp.send("Pedro","Hola desde el notificador de WhatsApp!");

}
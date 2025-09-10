import { Professor } from "./clases/Professor.js";
import { Student } from "./clases/Student.js";

export function runObserver() {

    const professor = new Professor();

    const student1 = new Student("Juan");
    const student2 = new Student("María");

    professor.subscribe(student1);
    professor.subscribe(student2);

    professor.publish("Clase de diseño de patrones a las 10 AM");

    professor.unsubscribe(student1);

    professor.publish("La clase se ha reprogramado para las 11 AM");

}
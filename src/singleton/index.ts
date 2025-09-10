import { ConexionDB } from "./clases/ConexionDB.js";

export function runSingleton(): void {
    const db = ConexionDB.getInstancia();
    db.conectar();
    db.estaConectado();
    db.desconectar();
    db.estaConectado();
}
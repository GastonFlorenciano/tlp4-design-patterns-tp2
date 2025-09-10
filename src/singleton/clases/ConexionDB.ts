import { IConexionDB } from "../interfaces/IConexionDB.js";

export class ConexionDB implements IConexionDB {

    private static instancia: ConexionDB;
    private conectado: boolean = false;

    private constructor(
        private host: string = "localhost",
        private puerto: number = 3306,
        private usuario: string = "root"
    ) { }

    public static getInstancia(): ConexionDB {
        if (!ConexionDB.instancia) {
            ConexionDB.instancia = new ConexionDB();
        }
        return ConexionDB.instancia;
    }

    public conectar(): void {
        this.conectado = true;
        console.log("Conexión establecida");
    }

    public desconectar(): void {
        this.conectado = false;
        console.log("Conexión cerrada");
    }

    public estaConectado(): void {
        console.log(`Está conectado?: ${this.conectado ? "Sí" : "No"}`);
    }
}
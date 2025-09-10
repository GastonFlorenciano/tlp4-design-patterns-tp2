export interface IConexionDB {
    conectar(host: string, puerto: number, usuario: string): void;
    desconectar(): void;
    estaConectado(): void;
}
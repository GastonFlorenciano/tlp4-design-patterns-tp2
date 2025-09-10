import type { IHttpClient } from "../interfaces/IHttpClient.js";

export class SimpleHttpClient {
    constructor(private httpClient: IHttpClient) {}

    get<T>(url: string): Promise<T> {
        return this.httpClient.get<T>(url);
    }
}
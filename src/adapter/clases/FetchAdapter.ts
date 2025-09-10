import { IHttpClient } from "../interfaces/IHttpClient.js";

export class FetchAdapter implements IHttpClient {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        const data = await response.json();
        return data as T;
    }

}

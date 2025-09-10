import { SimpleHttpClient } from "./clases/SimpleHttpClient.js";
import { AxiosAdapter } from "./clases/AxiosAdapter.js";
import { FetchAdapter } from "./clases/FetchAdapter.js";

export function runAdapter() {

    const URL = "https://jsonplaceholder.typicode.com/posts/1";

    const axiosClient = new SimpleHttpClient(new AxiosAdapter());
    const fetchClient = new SimpleHttpClient(new FetchAdapter());

    axiosClient.get(URL).then(data => {
        console.log("Consulta de AXIOS:", data);
    });

    fetchClient.get(URL).then(data => {
        console.log("Consulta de FETCH:", data);
    });
}
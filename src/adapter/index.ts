import { SimpleHttpClient } from "./clases/SimpleHttpClient.js";
import { AxiosAdapter } from "./clases/AxiosAdapter.js";
import { FetchAdapter } from "./clases/FetchAdapter.js";

export async function runAdapter() {

    const URL = "https://jsonplaceholder.typicode.com/posts/1";

    const axiosClient = new SimpleHttpClient(new AxiosAdapter());
    const fetchClient = new SimpleHttpClient(new FetchAdapter());

    const axiosData = await axiosClient.get(URL);
    console.log("Consulta de AXIOS:", axiosData);

    const fetchData = await fetchClient.get(URL);
    console.log("Consulta de FETCH:", fetchData);
}
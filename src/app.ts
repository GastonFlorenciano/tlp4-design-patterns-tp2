import { runObserver } from "./observer/index.js";
import { runAdapter } from "./adapter/index.js";
import { runSingleton } from "./singleton/index.js";

async function main() {
    console.log(`\n//////////////////////// OBSERVER ///////////////////////\n`)
    runObserver();

    console.log(`\n//////////////////////// ADAPTER ///////////////////////\n`)
    await runAdapter();

    console.log(`\n//////////////////////// SINGLETON ///////////////////////\n`)
    runSingleton();
}

main();
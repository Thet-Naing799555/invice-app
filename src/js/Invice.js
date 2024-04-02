import initialRender from "./core/initialRender.js";
import listenner from "./core/listenner.js";
import obsever from "./core/obsever.js";

class Invice {
    init () {
        console.log("Start the app");
        initialRender()
        listenner()
        obsever()
    }
}


export default  Invice



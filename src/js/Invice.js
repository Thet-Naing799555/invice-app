import initialRender from "./core/initialRender.js";
import listenner from "./core/listenner.js";

class Invice {
    init () {
        console.log("Start the app");
        initialRender()
        listenner()
    }
}


export default  Invice



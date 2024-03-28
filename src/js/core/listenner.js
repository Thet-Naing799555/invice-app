import { createFormHandler, rowGroupHandler } from "./handler.js";
import { createForm, rowGroup } from "./selector.js";

const listenner = () => {
     createForm.addEventListener("submit",createFormHandler)
     rowGroup.addEventListener("click",rowGroupHandler)
}

export default listenner;
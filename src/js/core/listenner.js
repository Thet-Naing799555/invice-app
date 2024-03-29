import { createFormHandler, manangeInventoryBtnHandler, rowGroupHandler } from "./handler.js";
import { createForm, inventorySheetcloseBtn, manangeInventoryBtn, rowGroup } from "./selector.js";

const listenner = () => {
     createForm.addEventListener("submit",createFormHandler)
     rowGroup.addEventListener("click",rowGroupHandler)
     manangeInventoryBtn.addEventListener("click",manangeInventoryBtnHandler)
     inventorySheetcloseBtn.addEventListener('click',manangeInventoryBtnHandler)
   
}

export default listenner;
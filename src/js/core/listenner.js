import { addNewProductBtnHandler, createFormHandler, manangeInventoryBtnHandler, printBtnHandler, rowGroupHandler } from "./handler.js";
import { addNewProductBtn, createForm, inventorySheetcloseBtn, manangeInventoryBtn, rowGroup } from "./selector.js";

const listenner = () => {
     createForm.addEventListener("submit",createFormHandler)
     rowGroup.addEventListener("click",rowGroupHandler)
     manangeInventoryBtn.addEventListener("click",manangeInventoryBtnHandler)
     inventorySheetcloseBtn.addEventListener('click',manangeInventoryBtnHandler)
     newProductCreateForm.addEventListener("submit",addNewProductBtnHandler)
     printBtn.addEventListener("click",printBtnHandler)
}

export default listenner;
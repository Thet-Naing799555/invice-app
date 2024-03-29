
import { addRecordQuantity, createRecord, deleRecord, subRecordQuantity, updateRecordtotal } from "./record.js";
import {  createForm,     inventory,     rowGroup } from "./selector.js";
import { products } from "./variable.js";

export const createFormHandler = (e) => {
     e.preventDefault();
    //  console.log("u sumit");
//      console.log(productSelect.value);
// console.log(inputQuantity.valueAsNumber);

// get data from input form
const formData = new FormData(createForm)    //using table web api

const currentProductId = parseInt(formData.get("productSelect"));
const currentQuantity = parseInt(formData.get("inputQuantity"));

const currentProduct = products.find((x) => x.id === currentProductId )

//isExitstance row

const isExitstanceRow = rowGroup.querySelector(`[row-product-id='${currentProductId}']`)  //altribute selector with id
console.log(isExitstanceRow);

if(isExitstanceRow) {

    const currentQuantityElement = isExitstanceRow.querySelector(".row-quantity");
const currentCost =  isExitstanceRow.querySelector(".row-cost");
const currentPrice =isExitstanceRow.querySelector(".row-product-price")
 currentQuantityElement.innerText = parseInt(currentQuantityElement.innerText)+currentQuantity
console.log(currentPrice.innerText);
currentCost.innerText= currentPrice.innerText* currentQuantityElement.innerText


} else {
    //append to table
    rowGroup.append(createRecord(currentProduct,currentQuantity))
    
    

}


    //calculate total record
    updateRecordtotal()
    createForm.reset()


}



export const rowGroupHandler = (event) => {
    if(event.target.classList.contains("row-del-btn")){
        deleRecord(event)
    } else if (event.target.classList.contains("row-q-add")){
        addRecordQuantity(event)
    } else if (event.target.classList.contains("row-q-sub")){
        subRecordQuantity(event)
    }
   


    }


    export const manangeInventoryBtnHandler = () => {
        inventory.classList.toggle("-translate-x-full")
    }





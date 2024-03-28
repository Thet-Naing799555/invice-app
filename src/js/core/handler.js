
import { addRecordQuantity, createRecord, deleRecord, subRecordQuantity, updateRecordtotal } from "./record.js";
import {  createForm,     rowGroup } from "./selector.js";
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

//append to table
rowGroup.append(createRecord(currentProduct,currentQuantity))
createForm.reset()

//calculate total record
  updateRecordtotal()
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





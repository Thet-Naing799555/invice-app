import { recordTotal, rowGroup, rowTemplate } from "./selector.js"


// let recordIndex=1
export const createRecord =({id,name,price},quantity) => {
  const  record =  rowTemplate.content.cloneNode(true)

  const cost =price * quantity
//  

if(quantity !== 0) {
  // record.querySelector(".row-no").innerText=recordIndex++
  record.querySelector(".row").setAttribute("row-product-id",id)
  record.querySelector(".row-product-name").innerText=name
  record.querySelector(".row-product-price").innerText=price
  record.querySelector(".row-quantity").innerText=quantity
  record.querySelector(".row-cost").innerText =cost
  
} else alert("Please fill quantity")

 

  
//  console.log(rowGroup);
  return record

 
 
}

export const updateRecordtotal = () => {
  const allRollCost = document.querySelectorAll(".row-cost")
 
  // let total=0
//  allRollCost.forEach(({innerText}) =>  (
     
//      total += parseFloat(innerText))
//  )

 
 recordTotal.innerText=[...allRollCost].reduce((pv,{innerText}) => pv+parseFloat(innerText),0)
}


export const deleRecord = (event) => {
//  console.log(event.target);
 const row = event.target.closest(".row")
 if(confirm("Are you sure to Dele ?")) {
  row.remove()
  // updateRecordtotal()
 }

}

export const recordUpdate = (productId,q) => {
  const row = document.querySelector(`[row-product-id='${productId}']`)
  const currentQuantity = row.querySelector(".row-quantity");
 const currentCost =  row.querySelector(".row-cost");
 const currentPrice =row.querySelector(".row-product-price")
  if (q > 0 || currentQuantity.innerText > 1) {
    currentQuantity.innerText = parseInt(currentQuantity.innerText)+q
    currentCost.innerText= currentPrice.innerText* currentQuantity.innerText
    // updateRecordtotal()
  }

}

export const recordObsever = () => {        // observer function can watch rowGroup dom tree
                                               // if change something, run f(run) function
  const run = () => {
   updateRecordtotal()
}

const obseverOption =  {
 childList: true,
 subtree: true,
}

const obsever = new MutationObserver(run)
obsever.observe(rowGroup,obseverOption)

}

// export const addRecordQuantity = (event) => {
//   const row = event.target.closest(".row")
//  const currentQuantity = row.querySelector(".row-quantity");
// const currentCost =  row.querySelector(".row-cost");
// const currentPrice =row.querySelector(".row-product-price")
//  currentQuantity.innerText = parseInt(currentQuantity.innerText)+1
// console.log(currentPrice.innerText);
// currentCost.innerText= currentPrice.innerText* currentQuantity.innerText
// updateRecordtotal()
// }

// export const subRecordQuantity = (event) => {
//   const row = event.target.closest(".row")
//   const currentQuantity = row.querySelector(".row-quantity");
//  const currentCost =  row.querySelector(".row-cost");
//  const currentPrice =row.querySelector(".row-product-price")
//  if (currentQuantity.innerText > 1) {
//   currentQuantity.innerText = parseInt(currentQuantity.innerText)-1
//   console.log(currentPrice.innerText);
//   currentCost.innerText= currentPrice.innerText* currentQuantity.innerText
//   updateRecordtotal()
//  }else {
//   deleRecord(event)
//  }
// }
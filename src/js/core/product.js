import { productGroup, productTemplate } from "./selector.js";


export const createProduct = ({name,price}) => {
    // const option = document.createElement("option")
    // option.innerText=product.name;
    // option.value =product.id;
    // return option
    const card = productTemplate.content.cloneNode(true)
   card.querySelector(".product-name").innerText = name
   card.querySelector(".product-price").innerText = price
   console.log(card);
   return card
}



export const productRender =(product) => {
  product.forEach(({name,price,id}) => {
    productSelect.append(new Option(name,id));
    productGroup.prepend(createProduct({name,price}));
  })
  }

 
import { products } from "./variable.js";

export const createProduct = (product) => {
    const option = document.createElement("option")
    option.innerText=product.name;
    option.value =product.id;
    return option

}


export const productRender =(product) => {
  products.forEach(({name,id}) => {
    productSelect.append(new Option(name,id))
  })
}
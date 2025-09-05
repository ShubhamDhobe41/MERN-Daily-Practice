// object
let product = {
    company: 'mango',
    item_name:'cotton triped t-shirt',
    price:866
}
console.log(product); //object

console.log(product.company);
console.log(product.item_name);
console.log(product.price);
console.log();

console.log(product['company']);
console.log(product['item_name']);
console.log(product['price']);

console.log(typeof(product));
console.log(typeof product.company);

delete product.price
console.log(product);

product.modelYear = 2034
console.log(product);




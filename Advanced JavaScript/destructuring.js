let product = {
    company: 'mango',
    item_name:'cotton triped t-shirt',
    price:866,
    diplayPrice : function(){
        return `${this.price.toFixed(2)}`
    }
}

// let company = product.company

// destructuring
// let {company,price} = product
let {company:companyName,price} = product
console.log(companyName);
console.log(price);



let product1 = {
    company: 'mango',
    item_name:'cotton triped t-shirt',
    price ,// destructuring
    diplayPrice(){
        return `${this.price.toFixed(2)}`
    }
}



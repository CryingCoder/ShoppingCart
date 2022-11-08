class Product {
    name;
    cost;

    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

cart = [];
products = [new Product("Spam", 3.99), new Product("Bananas", 1.99), new Product("Cabbage", 0.99)];

function addToCart(index){

    let selected = products[index];

    cart.push(selected);
    console.log(cart);
}

function Checkout(){

    let total = 0;
    for (let i = 0; i <cart.length; i++){

        let p = cart[i];
        console.log(p);
        total+= p.cost;
        document.getElementById("SubTotal").innerHTML += `<p>Item: ${p.name} Cost: ${p.cost} </p>`;
    }
    
    console.log(total);

    //Most commonly used DOM method
    let outputTotal = Math.round(total *100)/100;
    document.getElementById("Total").innerHTML = `<h2>Total: $ ${outputTotal}</h2>`;

}
const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 },

    
];
function sum() {
    let summ = 0;
    for(let i =0;i<cart.length;i++){
        summ += cart[i].price * cart[i].quantity;
    }
    console.log(summ);
    
}
console.log(sum());

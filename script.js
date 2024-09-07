"use strict";
let myArry = [
    { id: 1, name: "Iphone", quantity: 22, price: 14200 }
];
viewtable();
function viewtable() {
    let data = myArry;
    let table = document.getElementById('cards');
    table.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let row = ` <tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].quantity}</td>
            <td>${data[i].price}</td>
          </tr>`;
        table.innerHTML += row;
    }
}
function addProduct() {
    const name = document.getElementById('product-name').value;
    const quantity = +document.getElementById('product-quantity').value;
    const price = +document.getElementById('product-price').value;
    if (!name || quantity <= 0 || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }
    let id = myArry.length + 1;
    const newProduct = { id, name, quantity, price };
    myArry.push(newProduct);
    viewtable();
}
document.getElementById('add-product-btn')?.addEventListener('click', addProduct);

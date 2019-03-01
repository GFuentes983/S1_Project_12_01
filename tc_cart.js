"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Gabriel Fuentes 
   Date: 2.27.19   
   
   Filename: tc_cart.js
	
*/

// Declare orderTotal set its value to 0 
var orderTotal = 0;

// Declare cartHTML to be a table with some table rows and data cells
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>"

// For loop that runs four times
for (let i = 0; i < 4; i++) {
    // Adding more table rows and data cells to cartHTML
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='item' /></td>"
    cartHTML += "<td>" + itemDescription[i] + "</td>" + "<td>$" + itemPrice[i] + "</td>" + "<td>" + itemQty[i] + "</td>";
    
    // Declaring itemCost to be the index value in the array of itemPrice multiplied by the index value in the array itemQty
    var itemCost = itemPrice[i] * itemQty[i];

    // Adds a data cell to cartHTML and the content of the data cell is the itemCost
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    orderTotal += itemCost;
}
// cartHTML has another table row added to it with a data cell with the content of orderTotal
cartHTML += "<tr><td colspan='4' >Subtotal</td> <td>$" + orderTotal + "</td></tr></table>"

// The HTML inside the element with the id cart is set to cartHTML
document.getElementById("cart").innerHTML = cartHTML;
let _name = prompt("Enter your name: ")
document.getElementById("name").textContent = _name

let order_id = prompt("Enter your Order ID: ")
document.getElementById("order").textContent = order_id

let _amount = prompt("Enter the amount: ")
document.getElementById("amount").textContent = _amount

let age = prompt("Enter your age: ")
if(age > 18){ 
    let phoneNum = prompt ("Enter your number: ")
    document.getElementById("number").textContent = phoneNum
} else{
    let phone_Num = prompt ("Enter your Guardian's phone number: ")
    document.getElementById("number").textContent = phone_Num
}

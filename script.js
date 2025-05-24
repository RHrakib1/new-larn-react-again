const increes = document.getElementById('increase')
const decrees = document.getElementById("decrease")
const quantity = document.getElementById("quantity")
const total = document.getElementById("total")


const price = 20;
let realQuantity = 1;

increes.addEventListener("click", function () {
    realQuantity++
    quantity.innerText = realQuantity
    total.innerText = realQuantity * price
})

decrees.addEventListener('click', function () {
    if (realQuantity > 1) {
        realQuantity--
        quantity.innerText = realQuantity
        total.innerText = realQuantity * price
    } else {
        alert("আর কমানো যাবে না! 🛑")
    }

})
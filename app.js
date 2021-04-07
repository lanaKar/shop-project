//add to cart
let productsCountEl = document.getElementById("products-count");

console.log(productsCountEl)

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

console.log(addToCartBtns)

for(let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function() {
        let prevProductsCount = +productsCountEl.textContent;
        productsCountEl.textContent = prevProductsCount + 1;
    })
}
//change like buttons

let likeBtns = document.querySelectorAll(".icon-2");
console.log(likeBtns)

likeBtns.forEach(btn => {
    btn.addEventListener("click",function() {
        // if(btn.classList.contains("liked")) {
        //     btn.classList.remove("liked")
        // } else {
        //     btn.classList.add("liked")
        // }
        btn.classList.toggle("liked")
    })
})


// more details

let moreDetlsBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

moreDetlsBtns.forEach(btn => {
    btn.addEventListener("click", openModal)
})

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide")
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show")
}

modal.addEventListener("click", function(e) {
    console.log(e.target)
    if(e.target === modal) {
        closeModal()
    }
})

btnClose.addEventListener("click", closeModal)

// style, event

// let send = document.querySelector(".send")

// send.addEventListener("click", function(e) {
//     e.preventDefault;
//     let target = e.target;
//     console.log(e)
//     console.log(e.target)
//     target.style.color = "green";
//     target.style.backgroundColor = "beige"
// })


//SCROLL
function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll)
    }
}
window.addEventListener("scroll", showModalByScroll)


// change product quantity

// let incrementBtns = document.querySelectorAll(".increment-button") [0];
// let decrementBtns = document.querySelectorAll(".decrement-button") [0];
// let productQuantityEl = document.querySelectorAll(".product-quantity input") [0];

// let currentCount = +productQuantityEl.value;
// toggleButtonState(currentCount)

// function toggleButtonState (count) {
//     decrementBtns.disabled = count <= 1;
//     incrementBtns.disabled = count >= 5;
// }


// incrementBtns.addEventListener("click", function() {
//     let currentCount = +productQuantityEl.value;
//     let nextCount = currentCount + 1;
//     productQuantityEl.value = nextCount;

//     toggleButtonState(nextCount)
// })

// decrementBtns.addEventListener("click", function() {
//     let currentCount = +productQuantityEl.value;
//     let nextCount = currentCount - 1;
//     productQuantityEl.value = nextCount;

//     toggleButtonState(nextCount)
// })

let incrementBtns = document.querySelectorAll(".increment-button");
let decrementBtns = document.querySelectorAll(".decrement-button");
let productQuantityEl = document.querySelectorAll(".product-quantity input") [0];

function Counter(incrementButton, decrementButton, inputField) {
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField
    }
    this.toggleButtonState = function() {
        const count = this.domRefs.inputField.value;
        this.domRefs.decrementButton.disabled = count <= 1;
        this.domRefs.incrementButton.disabled = count >= 5;
    }

    this.toggleButtonState()

    this.increment = function() {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;

        this.toggleButtonState()
    }

    this.decrement = function() {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;

        this.toggleButtonState()
    }
}

//     this.toggleButtonState();
//     this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this));
//     this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this));
    
// }

// const counters = [];
// productQuantityEl.forEach(function(countItem,i) {
//     counters[i] = new Counter(incrementBtns[i], decrementBtns[i], countItem)
// })

const counter1 = new Counter(incrementBtns, decrementBtns, productQuantityEl);
console.log(counter1)

// let user = {
//     name: "Ivan",
//     age:20,
//     skills: {
//         html:5
//     }
// }

// let copy = JSON.parse(JSON.stringify(user));
// copy.skills.html = 10;
// console.log(copy)
// console.log(user)

$('.slider-block').slick()
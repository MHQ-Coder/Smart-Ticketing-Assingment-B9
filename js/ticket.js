const allButton = document.getElementsByClassName("btn-click");

let count = 0;
let seatAvailable = 40;

for (const btn of allButton) {
    btn.addEventListener("click", function (event) {
        count += 1;
        seatAvailable -= 1;
        document.getElementById("seatCount-left").innerText = seatAvailable;


        if (count > 4) {

            btn.setAttribute('disabled', true);
            alert(`You will no longer select the button!`);
            return;
        }


        const seatName = event.target.parentNode.childNodes[1].innerText;

        const container = document.getElementById("apply-ul-container");

        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.innerText = seatName;
        const li2 = document.createElement("li");
        li2.innerText = "Economy";
        const li3 = document.createElement("li");
        li3.innerText = 550;

        ul.appendChild(li);
        ul.appendChild(li2);
        ul.appendChild(li3);
        container.appendChild(ul);



        totalPrice("total-price", 550);
        totalGrand("grand-total", 550);
        grandTotal();
        setInnerText("setCount", count);
        btn.classList.add("bg-green-400");



    })

}


// seat counting
function setInnerText(elementId, value) {
    document.getElementById(elementId).innerText = value;
}

//total-price
function totalPrice(elementId, value) {
    const totalPrice = document.getElementById(elementId).innerText;
    const intToTotalPrice = parseInt(totalPrice);
    const sumTotalPrice = intToTotalPrice + value;
    setInnerText("total-price", sumTotalPrice)
}



//total-grand-price
function totalGrand(elementId, value) {
    const grandTotal = document.getElementById(elementId).innerText;
    const intToGrandTotal = parseInt(grandTotal);
    const sumToGrandTotal = intToGrandTotal + value;
    setInnerText("grand-total", sumToGrandTotal)
}


//grand-total <-- functioning
function grandTotal() {

    document.getElementById("apply-btn").addEventListener("click", function () {

        const totalPrice = document.getElementById("total-price").innerText;
        let grandTotal = parseInt(totalPrice);

        const inputText = document.getElementById("input-hide").value.toLowerCase();
        const coupon15 = document.getElementById("new-15").innerText.toLowerCase();
        const coupon20 = document.getElementById("couple-20").innerText.toLowerCase();

        if (inputText === coupon15) {
            grandTotal -= grandTotal * 15 / 100;
        }
        else if (inputText === coupon20) {
            grandTotal -= grandTotal * 20 / 100;
        }

        setInnerText("grand-total", grandTotal.toFixed(0));
    })

}


//coupon valid and and input hidden
document.getElementById("input-hide").addEventListener("keyup", function (event) {
    const inputText = event.target.value.toLowerCase();
    const applyBtn = document.getElementById("apply-btn");
    const coupon15 = document.getElementById("new-15").innerText.toLowerCase();
    const coupon20 = document.getElementById("couple-20").innerText.toLowerCase();
    const coupons = [coupon15, coupon20];

    if (coupons.includes(inputText)) {
        applyBtn.removeAttribute('disabled');

    }

    else {
        applyBtn.setAttribute('disabled', 'disabled');
    }
});

document.getElementById("apply-btn").addEventListener("click", function () {
    const clickHide = document.getElementById("div-hide");
    clickHide.style.display = 'none';

})

// input number & next-button valid
document.getElementById('number-input').addEventListener('keyup', function(event){
    const inputText = event.target.value;
    const nextBtn = document.getElementById("next-btn");
    

        if(inputText.length > 0 && inputText.length <= 11){
            nextBtn.removeAttribute('disabled');
        }
        else{
            nextBtn.setAttribute('disabled', 'disabled')
        }


})



// next-button click and Modal show the next page
const body = document.getElementById("body-hide");
const modal = document.getElementById("modal");
const footer = document.getElementById("footer");

function nextBtn(){
    body.classList.add("hidden");
    modal.classList.remove("hidden");
    footer.classList.add("hidden");
}
function closeModal(){
    body.classList.remove('hidden');
    modal.classList.add("hidden");
    footer.classList.remove("hidden");
    

}


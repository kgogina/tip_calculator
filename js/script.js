let billAmountInput = document.getElementById('totalBill');
let customTipPercentInput = document.getElementById('customTipAmount');
let countOfPeopleInput = document.getElementById('amountOfPeople');
let tipPercentageFix = document.querySelectorAll('.tipPercent');
let errorCheck = document.querySelectorAll(".input-check");



    errorCheck.forEach((checker) =>{
        checker.addEventListener("input", ()=> {
            if (checker.value === '0') {
                checker.classList.add('error');
                checker.textContent = "Can't be zero";
              } else {
                checker.classList.remove('error');
              }
        });
    });
    


let billAmountValue = 0;
billAmountInput.addEventListener('input', function(){
    billAmountValue = parseFloat(this.value);
    console.log(this.value);
})

let customTipPercentValue = 0;
customTipPercentInput.addEventListener ('input', function (){
    console.log (this.value);
    customTipPercentValue = parseInt(this.value);

})

let countOfPeopleValue = 0;
countOfPeopleInput.addEventListener('input', function (){
    console.log(this.value);
    countOfPeopleValue = parseInt (this.value);
})

tipPercentageFix.forEach((fixPercentage) =>{
    fixPercentage.addEventListener("click", ()=> {
        console.log(fixPercentage.innerHTML)
    });
});



function totalBill (){
    if (countOfPeople >=1){
        let totalAmountPerson = (totalBill + tipPercentage) / 100;
        let tipPerPerson = totalAmountPerson / countOfPeople;
    }
    else {

    }
}


function setResult() {
    let finalTipAmount = sessionStorage.getItem("");
    document.getElementById("").innerHTML = finalTipAmount;
    let finalTotal = sessionStorage.getItem("");
    document.getElementById("").innerHTML = finalTotal;
  }



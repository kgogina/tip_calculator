let billAmountInput = document.getElementById('totalBill');
let customTipPercentInput = document.getElementById('customTipAmount');
let countOfPeopleInput = document.getElementById('amountOfPeople');
let tipPercentageFix = document.querySelectorAll('.tipPercent');
let errorCheck = document.querySelectorAll(".input-check");

let billAmountValue = 0;
let customTipPercentValue = 0;
let countOfPeopleValue = 0;

let total;
let tip;
let percentageValue;
  

errorCheck.forEach((checker) => {
    checker.addEventListener("input", () => {
        let checkerID = checker.id; 
        let errorMessage = document.getElementById(checkerID + "-error");

        
        if ((checker.value === '0' || checker.value === '00') && !checker.classList.contains("error")) {
            checker.classList.add('error');
            errorMessage.innerHTML = "Can't be zero!";
            errorMessage.style = "display: block";
        }
        else if (parseInt(checker.value) < 0 && !checker.classList.contains("error")) {
            checker.classList.add('error');
            errorMessage.innerHTML = "Can't be negative!";
            errorMessage.style = "display: block";
        }
        
        else if (checker.value != '0' && checker.classList.contains("error")) {
            checker.classList.remove('error');
            errorMessage.innerHTML = "Can't be zero!";
            errorMessage.style = "display: none";
        }
    });
});



// bill - get input value + add function
billAmountInput.addEventListener('input', function () {
    billAmountValue = parseFloat(this.value);
    makeCalculations();
})

// number of people - get input value + add function
countOfPeopleInput.addEventListener('input', function () {
    countOfPeopleValue = parseInt(this.value);
    makeCalculations();
})

    // custom tip amount - get input value + add function
customTipPercentInput.addEventListener('input', function () {
    clearAllFocusedPercentages();
})

// custom tip amount - get input value + add function
customTipPercentInput.addEventListener('input', function () {
    percentageValue = parseInt(this.value);
    makeCalculations();
})

    // fix tip amount - get chosen %  - take % to get value and put it in variable percentageValue, the same were use above in customTipPercentInput.
    tipPercentageFix.forEach((fixPercentage) => {
        fixPercentage.addEventListener("click", () => {
            clearAllFocusedPercentages();
    
            fixPercentage.classList.add("focused-item");
    
            let length = fixPercentage.innerHTML.length;
            percentageValue = fixPercentage.innerHTML.substring(0, length - 1);
            makeCalculations();
        });
    });
    
    // function we add to each received value, so that the "result count" can be started from any field
    function makeCalculations() {
        if (billAmountValue != 0 && percentageValue != 0 && countOfPeopleValue != 0) {
            tip = billAmountValue * 0.01 * percentageValue;
            total = billAmountValue + tip;
            countResult("total");
            countResult("person");
        }
    }

    // count for tip amount & total
   function countResult(x) {

    let result;

    if (countOfPeopleValue != 0) {
        if (x == "total") {
            result = (total / countOfPeopleValue).toFixed(2);
        }
        if (x == "person") {
            result = (tip / countOfPeopleValue).toFixed(2);
        }
        document.getElementById(x).innerHTML = "$" + result;
    }

}

function clearAllFocusedPercentages() {
    for (let i = 0; i < tipPercentageFix.length; i++){
        let eachItem = tipPercentageFix[i];
        if (eachItem.classList.contains("focused-item")) {
            eachItem.classList.remove("focused-item");
        }
    }

}

    // reset button
    function reset() {
        location.reload();
  } 






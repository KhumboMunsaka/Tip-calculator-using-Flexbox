'use strict';
// how it supposed to work
// everyone splits the bill amoung the number of people
// everyone splits the tip evenly
// then you add them up to display what everyone is tipping and the total amount
const bill = document.querySelector('.billInput');
const billInput = document.querySelector('.billInput')
const five = document.querySelector('.five');
const ten = document.querySelector('.ten');
const fifteen = document.querySelector('.fifteen');
const twentyFive = document.querySelector('.twentyFive');
const fifty = document.querySelector('.fifty');
const custom = document.querySelector('.customInput');
const tips = [0.05,0.1, 0.15, 0.25, 0.5];
const peoplePresent = document.querySelector('.peoplePresent');
let tip =  document.querySelector('.cost');
let total = document.querySelector('.costOfPeople');
const errorMessage = document.querySelector('.error');
   errorMessage.style.opacity = '0'
   const reset = document.querySelector('.resetButton');
const clearCustom = document.querySelector('.custom');


// to display the error message when the input finna be zero
peoplePresent.addEventListener('input',function(){
 if(peoplePresent.value == 0){
 peoplePresent.style.outlineColor = 'rgb(235, 54, 54)';
 errorMessage.style.opacity = '1'
 }
 else {
   peoplePresent.style.outlineColor = 'hsl(172, 67%, 45%)';
   errorMessage.style.opacity = '0'
 }
})
// to make the error messages go away once you scroll away
peoplePresent.addEventListener('pointermove' , function(){
   errorMessage.style.opacity = '0'
   peoplePresent.style.outlineColor = 'hsl(172, 67%, 45%)';

})
// function to do all the calculating
function calcTip (Ptip) {
 if(bill.value == "" || peoplePresent.value == "") {
   
    errorMessage.textContent = "Please fill in all fields"
   errorMessage.style.opacity = '1'
   return;
}
else {const eachPay =  Number(bill.value)  / Number(peoplePresent.value);
   const wholeTip = Number(bill.value) * Ptip;
   
   const eachTip =  Math.round(((wholeTip / Number(peoplePresent.value))+Number.EPSILON)*100) /100;

  const totalPay =  Math.round(((eachTip + eachPay)+ Number.EPSILON)*100)/100 
    tip.textContent = `$${eachTip}` ;
   total.textContent = `$${totalPay}`;}
};

//for five percent
five.addEventListener('click', function(){
   calcTip(tips[0])
     custom.value = ''
});
// for ten percent
ten.addEventListener('click', function(){
   calcTip(tips[1])
     custom.value = ''
});
// for fifteen percent
fifteen.addEventListener('click', function(){
   calcTip(tips[2])
         custom.value = ''
});
// for 25 percent
twentyFive.addEventListener('click', function(){
   calcTip(tips[3])
        custom.value = ''
});
// for 50 percent
fifty.addEventListener('click', function(){
   calcTip(tips[4])
         custom.value = ''
});
// for custom percent 
custom.addEventListener('keypress', function(e){
 if (e.key === 'Enter') {
      calcTip(custom.value /100)
    }
})
// reset button   
reset.addEventListener('click', function(){
   bill.value = ''
   peoplePresent.value = ''
   custom.value = ''
   total.textContent = '$0.00'
   tip.textContent = '$0.00'
})





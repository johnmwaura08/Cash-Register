
const DENOMINATIONS = [
    ["PENNY", 1], ["NICKEL", 5], ["DIME", 10], ["QUARTER", 25], ["ONE", 100], ["FIVE", 500], ["TEN",1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]
]
//we'll multiply everything by 100 so we can work with cents


console.log(DENOMINATIONS[0]);

function checkCashRegister(price, cash, cid) {
   let amountToReturn = Math.round(cash * 100) - Math.round(price * 100)
   let cashOnHand = {};
   let cashToGive = {};

   cid.forEach((denomination) => {
    //  console.log(denomination[0])

     cashOnHand[denomination[0]] = denomination[1]
   })

   let index= DENOMINATIONS.length -1;

   while(index >= 0) {
     let myDenomination = DENOMINATIONS[index];

    //  console.log(amountToReturn - myDenomination[1]);
     
     if( amountToReturn - myDenomination[1] > 0) {
       
    }

    index -= 1;
   }
   console.log(amountToReturn)
  }
  
  let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];


 let res = checkCashRegister(19.5, 20, cid) 
 console.log(res)

   
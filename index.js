
function ccValidation (x) {
    let countOdd=0;
    let countEven=0;
    let k= x.length;
   // console.log(k);
   for(let i=k-1; i>=0; i--){
       // console.log(i);
       let curval =parseInt(x[i]);
       console.log(curval);
       if (i&2!==0){
        countOdd+=curval;
        //console.log(countOdd)
     }
        else{
            curval*=2;
            if(curval>9){
                curval-=9;
                countEven +=curval;
            }
            else{
                countEven + curval;
            }
            let sum=countOdd + countEven;
            if(sum% 10==0)
            return "true";
            else
            return "false"
            // return sum % 10? "valid;invalid";
        
        }
   }

}
let x = "1234567898764542"
console.log(ccValidation(x));

function checkcc() {
    const ccNumber = document.getElementById("cardn")
    const ccBtn = document.getElementById("cardbtn")
    if (ccValidation(ccNumber.value)){
        ccNumber.style = "border-color:green";
        ccBtn.style = "background-color:green";
    }
    else{ 
          ccNumber.style = "border-color:red";
          ccBtn.style = "background-color:red";
    }
}

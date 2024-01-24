document.getElementById("myButton").onclick=function(){

    const myCheckBox=document.getElementById("myCheckBox")
    const visaBtn=document.getElementById("visaBtn")
    const mastercardBtn=document.getElementById("mastercardBtn")
    const paypal=document.getElementById("paypal")

    if(myCheckBox.checked){
        console.log("you are subscribed");
    }
    else{
        console.log("you are NOT subscribed");
    }
    if(visaBtn.checked){
        console.log("you are paying with Visa Card")
    }
    else if(mastercardBtn.checked){
        console.log("you arre paying with MasterCard")
    }
    else if (paypal.checked){
        console.log("you are paying with Paypal")
    }
    else{
        console.log("you must select any payment method")
    }
    }

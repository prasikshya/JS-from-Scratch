function walkDog(){
   

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogwalked=true;
            if(dogwalked){
                resolve("you walk the dog");
            }
            else{
                reject("YOU DIDN'T..");
            }
        },1500);

    })
}
function cleanKitchen(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cleanKitchen=true;
            if(cleanKitchen){
                resolve("you cleaned it");
            }
            else{
                reject("you didn't cleaned the kitchen");
            }
            
        },2500);

    })

}

function takeoutTrash(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const taketrashout=false;
            if(taketrashout){
                resolve("you did it ..yay it's clean")
            }
            else{
                reject("you didn't...yuck")
            }
        },5000);

    })
}

//we'll use method chaining now instead of callback hell....
walkDog().then(value=> {console.log(value); return cleanKitchen()}).then(value=>{console.log(value); return takeoutTrash()})
.then(value=>{console.log(value); console.log("you finished al the chores")}).catch(error=>console.error(error));
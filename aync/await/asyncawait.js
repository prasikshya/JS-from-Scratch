//async/await
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


async function doChores(){   

try{
const walkDogResult=await walkDog();
console.log(walkDogResult);
const cleanKitchenResult=await cleanKitchen();
console.log(cleanKitchenResult);
const takeoutTrashResult= await takeoutTrash();
console.log(takeoutTrashResult);
console.log("you finished all the chores");
}

catch(error){
    console.error(error);

}
}
doChores();


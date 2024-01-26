//asynchronous and asynchronous operation

function func1(callback){
    setTimeout(()=>{console.log("Task1");
                    callback()},4000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);
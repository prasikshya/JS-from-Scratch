//this=refrence to the object where THIS is used
// the object depends on the immediate context
//--doen't work with arrow func..

const student1={
    firstName:"Prasikshya",
    lastName:"baral",
    course:"CS",
intro:function(){console.log(`hey! i am: ${this.firstName}\t${this.lastName}`)},

}
student1.intro();




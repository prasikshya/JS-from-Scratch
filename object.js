const student1={
    firstName:"Prasikshya",
    lastName:"baral",
    course:"CS",
quote:function(){console.log("..chill and mess around...")},

}

const student2={
    firstName:"steve",
    lastName:"jobs",
    course:"CS",
    quote:function(){console.log("Innovation distinguishes between a leader and a follower")},
}

student1.quote();
student2.quote();
student1.email="student1.123@email.com";
student2.course="Business";
console.log(student2.course);
console.log(student1.email);

// // const element=document.getElementById("fruits");
// // const firstChild=element.firstElementChild;
// // firstChild.style.backgroundColor="yellow";



// //FIRSTCHILD.........
// const ulelem=document.querySelectorAll("ul");
// ulelem.forEach(ulelems=>{
//    const firstChild=ulelems.firstElementChild;
//    firstChild.style.backgroundColor="beige";
// })


// // const element=document.getElementById("fruits");
// // const lastchild=element.lastElementChild;
// // lastchild.style.backgroundColor="grey";


// //.......LASTELEMENTCHILD...............
// const ulelements=document.querySelectorAll("ul");
// ulelements.forEach(ulelement=>{
//     const lastchild=ulelement.lastElementChild;
//     lastchild.style.backgroundColor="pink";
// })

// const ele=document.getElementById("fruits");
// const nextsibling=ele.nextElementSibling;
// nextsibling.style.background="red";



// //...previousEleementSibling.............//
// const items=document.getElementById("brownie");
// const previoussibling=items.previousElementSibling;
// previoussibling.style.backgroundColor="green";





// //..... .parentEement....///
// const pare=document.getElementById("carrots");
// const parents=pare.parentElement;
// parents.style.backgroundColor="blue";





//.... .children///////
const element=document.getElementById("fruits");
const child=element.children;
//dont have acces for forEach so typecast...
// Array.from(child).forEach(childrenn=>{
//     childrenn.style.backgroundColor="grey";

// })
child[2].style.backgroundColor="yellow";
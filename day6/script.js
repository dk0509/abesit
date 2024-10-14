// let a= () =>{
//     console.log("Arrow Function");
// };

// let b=()=>console.log("Arrow Function");
// b();
// a();


// let c=(x,y)=>{
//     return x+y;
// }
// let res=c("Rahul","Ravi");
// let res1=c(12,22);
// console.log(res);
// console.log(res1);

// function display(){
//     // let p1=document.querySelector('p');
//     let p1=document.querySelectorAll('p');
//     p1[0].innerHTML="I am in para";
//     p1[0].style.backgroundColor="lime";
//     p1[1].innerHTML="I am in para2";
//     p1[1].style.backgroundColor="yellow";
//     p1[2].innerHTML="I am in para3";
//     p1[2].style.backgroundColor="grey";
// }
// let headerc=()=>{
//     let header=document.querySelector('h1');
//     header.textContent="Title";
//     a1.setAttribute("href","https://aktu.ac.in");
//     a1.innerHTML="AKTU Website";
// }

let addContent=()=>{
    const newDiv=document.createElement('div');
    newDiv.textContent='This is a new div';
    const body=document.querySelector('body');
    body.appendChild(newDiv);
}
// let a=12;
// const pi=22/7;
// let c="Hello";
// let d= [1,2,3,4];
// let e={
//     name:"Arun",
//     id:12,
// }
// let f=true;

// let x="12"*"4";
// let bol=true;
// let str=String(bol);

// console.log(typeof x);
// console.log(str.charAt(1));

// let str="abb";
// let num=Number(str);
// console.log(typeof num);
// console.log(num);

// function display(){
//     let x=confirm("Are you sure");
//     alert(x);
// }

// function display(){
//     let x=prompt("Enter Your Name","initial");
//     alert(x);
// }

function validate(){
    let login=document.getElementById("login").value;
    let pass=document.getElementById("pass").value;
    let p1=document.getElementById("result");
    if(login=="admin" && pass=="admin"){
        p1.innerText="Login Success";
    }
    else p1.innerText="Login Failed";
    return false;

}
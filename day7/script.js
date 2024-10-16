// let num=[1,2,3,4,45,5,45];
// let newnum=num.map(x=>x*2);
// console.log(newnum);

// let evennum=num.filter(x=>x%2==0);
// console.log(evennum);

// let sum=num.reduce((x,y)=>x+y,0);
// console.log(sum);

// let product=num.reduce((x,y)=>x*y,1);
// console.log(product);

// const students=[
//     { name: 'Alice',score:50 },
//     { name: 'Bob',score:65 },
//     { name: 'Charlie',score:80 },
//     { name: 'David',score:45 },
//     { name: 'Rahul',score:50 },
// ];

// // let scores=students.map(x=>x.score);
// // console.log(scores);
// // let sum=students.map(x=>x.score).reduce((x,y)=>x+y,0);
// // console.log(sum);

// let sum=students.map(x=>x.score).filter(x=>x>60).reduce((x,y)=>x+y,0);
// console.log(sum);

// let num=[12,3,3,4,4,4,4,98];
// let arr=num.forEach((x)=> console.log(x*3));

// sayhello =()=>{
//     console.log("I am in Hello function");
// };
// sayhello2 =()=>{
//     console.log("I am in Hello2 function");
// };
// console.log("Start");
// setTimeout(sayhello,2000);
// console.log("End");
// setTimeout(sayhello2,1000);

console.log("Start");
setTimeout(()=>{
    console.log("First task completed");
    setTimeout(()=>{
        console.log("Second task completed");
        setTimeout(() => {
            console.log("Third task completed");
        }, 3000);
    }, 2000);
}, 1000);
console.log("End");


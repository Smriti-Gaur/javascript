// for 
// for(let index = 0; index<= 10 ; index++){
//     const element = index;
//     console.log(element)

// }

// nested loop

// for (let i = 1; i <=10;i++){
//     console.log(`outer loop value ${i}`);
//     for (let j = 1; j<=10 ; j++);
//     //console.log(`inner loop value  ${j} inner loop${i}`);
//     console.log(i+'*'+ j + '='+ i*j);
// }


// let myarray = ["apple","banana","grapes"]

// for (let index = 0; index<myarray.length; index++){
//     const element = myarray[index];
//     console.log(element);
// }

// continue and break statement

// for (i=1;i<=10;i++){
//     if (i==5){
//         console.log(`detected 5`);
//         break;

//     }
//    console.log(`Value of i is ${i}`); 
// }
for (i=1;i<=10;i++){
    if (i==5){
        console.log(`detected 5`);
        continue;

    }
   console.log(`Value of i is ${i}`); 
}
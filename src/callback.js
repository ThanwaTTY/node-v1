
// version 1
// // console.log("start file callback.js");

// //ทบทวน callback function
// function calculate(x,y,callback){
//     console.log("callback.js running!");
//     setTimeout(()=>{
//         const sum = x+y;
//         callback(sum);
//     },3000)
// }

// function display(result){
//     console.log("ผลบวก = "+result);
//     // console.log(`ผลบวก = ${result}`);
// }

// //ฟังก์ชั่นแบบ callback
// calculate(100,50,display)




// version 2
console.log("start file callback.js");

//ทบทวน callback function
function calculate(x,y,callback){
    console.log("callback.js running!");
    setTimeout(()=>{
        const sum = x+y;
        callback(sum);
    },3000)
}

//ฟังก์ชั่นแบบ callback
calculate(100,50,function(result){
    console.log("ผลบวก = "+result);
    // console.log(`ผลบวก = ${result}`);
})
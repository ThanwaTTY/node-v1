// version 1
console.log("start file promise.js");

const connect = true //เช็คว่าต่อเน็ต
const url1 = "www.kpn.com/file1.json";
const url2 = "www.kpn.com/file2.json";
const url3 = "www.kpn.com/file3.json";
const url4 = "www.kpn.com/file4.json";
const url5 = "www.kpn.com/file5.json";

function downloading(url){
    return new Promise(function(resolve, reject){
        console.log(`กำลังโหลดไฟล์จาก ${url}`)
        setTimeout(()=>{
            if(connect){
                resolve(`โหลด ${url} เรียบร้อย`)
            }else{
                reject('เกิดข้อผิดพลาด')
            }
        },1000)
    })
}

//Async & Await

async function start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
}

start()





//Promise Hell
// downloading(url1).then(function(result){
//     console.log(result)
//     downloading(url2).then(function(result){
//         console.log(result)
//         downloading(url3).then(function(result){
//             console.log(result)
//         })
//     })
// })

// //Promise Then
// downloading(url1).then(function(result){
//     console.log(result)
//     return downloading(url2)
// }).then(function(result){
//     console.log(result)
//     return downloading(url3)
// }).then(function(result){
//     console.log(result)
// })


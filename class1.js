// // var x ='hruhuish'   //'' means it is a str if there is no '' then int.
// // console.log(x)      //console.log() is used for print the code
// // var y =['a','d',2,33,21,true]
// // len = y.length
// // for(var i=0;i<len;i++){
// //     console.log(y[i])
// // }

// // var a ='Friday'
// // if(a=='Friday1'){
// //     console.log(`This is holiday`)
// // } else if(a=='Saturday'){
// //     console.log(`I won't go to campus`)
// // } else{
// //     console.log(`I will go to the campus`)
// // }

// // for(var i=0; i<=10;i++){
// //     console.log(i)
// // }


// // var a ={
// //     firstName: "Yash",
// //     lastName: "Hritro",
// //     education: {
// //         SSC: true,
// //         HSC: true,
// //         GRAD:false
// //     },
// //     NUM: [1,2,3,4,5,6]
// // }

// // console.log(a)
// // let num = document.getElementById("num")
// // num.innerText="30"
// // num.innerHTML +="<h6>Hritro</h6>"
// // let num = document.getElementById("num")
// // let e = "0<br>"
// // for(let i=1; i<100; i++){
// //     e += i+"<br>"
// // }
// // console.log(e)
// // num.innerHTML = e

// // function hello(num){
// //     console.log(num)
// // }

// // hello(1)


// let num = document.getElementById('num')
// let like = document.getElementById('like')
// let dislike = document.getElementById('dislike')


// let i =0
// function increment(){
//     i+=1
//     num.innerHTML = i
// }


// function decrement(){
//     i-=1;
//     num.innerHTML = i
// }


// like.addEventListener('click', increment)
// dislike.addEventListener('click', decrement)



let num = document.querySelector('.num')
let like = document.querySelector('.like')
let resetbtn = document.querySelector('.reset')
let dislike = document.querySelector('.dislike')


let i =0

function colorchange(){
    if(i>0){
        num.classList.add('green')
        num.classList.remove('red')
    } else if(i<0) {
        num.classList.add('red')
        num.classList.remove('green')
    } else{
        num.classList.remove('green')
        num.classList.remove('red')
    }
}
function increment(){
    i+=1
    num.innerHTML = i
    colorchange()
}


function decrement(){
    i-=1;
    num.innerHTML = i
    colorchange()
}

function reset(){
    i=0
    num.innerHTML= 0
    num.classList.remove('green')
    num.classList.remove('red')
}




like.addEventListener('click', increment)
resetbtn.addEventListener('click', reset)
dislike.addEventListener('click', decrement)



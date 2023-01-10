let r = document.querySelectorAll("button");
// let g = document.getElementById("green");
// let y = document.getElementById("yellow");


// window.localStorage.clear();

console.log(r);
if(window.localStorage.color){
    document.body.style.backgroundColor = `${window.localStorage.color}`;
    r.forEach((button) => {
        button.classList.remove("active");
        

    });

document.querySelector(`[data-color=${window.localStorage.color}]`).classList.add("active");
}else{
    // console.log(r[1]);
    document.body.style.backgroundColor = "red";
    
}

r.forEach((button) => {
    button.addEventListener("click", (e) =>{
        let col= e.currentTarget.dataset.color;
        console.log(col)
        window.localStorage.setItem("color",col);
        document.body.style.backgroundColor = `${window.localStorage.color}`;
        r.forEach((button) => {
            button.classList.remove("active")
        });
        e.currentTarget.classList.add("active")
    })
}

)



// var colo;
// r.onclick = function  () { 
// colo = "#f00";
// window.localStorage.setItem("color",colo);
// console.log(window.localStorage.color);
// document.body.style.backgroundColor = `${window.localStorage.color}`;
// }
// g.onclick = function  () { 
// colo = "#0f0";
// window.localStorage.setItem("color",colo);
// console.log(window.localStorage.color);
// document.body.style.backgroundColor = `${window.localStorage.color}`;
// }   
// y.onclick = function  () { 
// colo = "#00f";
// window.localStorage.setItem("color",colo);
// console.log(window.localStorage.color);
// document.body.style.backgroundColor = `${window.localStorage.color}`;
// }    

// document.body.style.backgroundColor = `${window.localStorage.color}`;
// window.body.style.backgroundColor = `${window.localStorage.color}`;
// }




// document.body.style.cssText = `background-color:red`;


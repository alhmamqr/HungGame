// get the item >> Array
var sliderimg = Array.from(document.querySelectorAll(".slider-container img"));


// get number of slied;

var NuSlide = sliderimg.length;


var cuSlide = 4;


// slide number El 

var SlNuEl =document.getElementById("slid-number");


// pre and next btn

var Nbtn = document.getElementById("next");
var Pbtn = document.getElementById("prev");


Nbtn.onclick = NxSlide;
Pbtn.onclick = PervSlide;

// creat main ul
var ulEl = document.createElement('ul');
ulEl.setAttribute("id","ulEl");



// creat li 

for (let i =1;i<=NuSlide;i++){
    var liEl = document.createElement('li');
    liEl.setAttribute("data-slide",i);
    liEl.appendChild(document.createTextNode(i));
    ulEl.appendChild(liEl);
}

// add ul for page 
document.querySelector(".indicators").appendChild(ulEl);


checkNumber();

// setInterval(function(){
//     if(cuSlide<NuSlide){
//     cuSlide ++;
//     checkNumber()}
//     else if(cuSlide=NuSlide){
//         cuSlide=1;
//         checkNumber() 
//     }

    
// },2000)











function checkNumber(){
    SlNuEl.textContent = `slide # ${cuSlide} of ${NuSlide}`;
    removeAc()
    // set active class on img
    sliderimg[cuSlide -1 ].classList.add("active");

    // set active on li
    ulEl.children[cuSlide -1 ].classList.add("active");

    if(cuSlide===1){
        Pbtn.classList.add("ds");
    }else{
        Pbtn.classList.remove("ds");
    }
    if(cuSlide===NuSlide){
        Nbtn.classList.add("ds");
    }else{
        Nbtn.classList.remove("ds");
    }
}

function NxSlide(){
    
    if(Nbtn.classList.contains("ds")){}else{
        cuSlide++;
    checkNumber()}
}



function PervSlide(){
    
    if(Pbtn.classList.contains("ds")){}else{
        cuSlide--;
    checkNumber()}
}




for(let i=0;i<=NuSlide-1;i++){
    var ulElli1 =Array.from(document.querySelectorAll("li"));
    ulElli1[i].onclick =function(){
        cuSlide=ulElli1[i].getAttribute("data-slide");
        parseInt(cuSlide);
        checkNumber();
    }
}

// remove active
function removeAc(){
    var ulElli1 =Array.from(document.querySelectorAll("li"));
    // loop through img
    sliderimg.forEach(function(e){
        e.classList.remove("active")
    });
    ulElli1.forEach(function(e){
        e.classList.remove("active")
    });


}

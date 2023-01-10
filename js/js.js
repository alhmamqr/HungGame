const letters = "abcdefghjklmnopqrstuivzxy";


let lettersArr = Array.from(letters);


let lettersContainer = document.querySelector(".letters");


lettersArr.forEach((e)=>{
    let span = document.createElement("span");

    let theletter=document.createTextNode(e);



    span.appendChild(theletter);

span.className="letter-box";



lettersContainer.appendChild(span); 
});



const words = {
    programs:["php","html","css","js","pyt hon","reacte","bootstarb","java","cplus","csharp"],
    movies:["fury","black List","Pres tege","Inter stleter","HungerGame","Rod Of Ring"],
    people:["Mohmd","Hamad","Ahamd","Hasan","Abdalluh","Fade"],
    countries:["Syria","Egebt","Yam","Iraq ","Pilasten","Qatar"],
}


// to get keys from Any object  to Array

let Allkeys = Object.keys(words);

let RandomPropNumber = Math.floor(Math.random() * Allkeys.length);

let RandomPropName = Allkeys[RandomPropNumber];

let RandomPropValue = words[RandomPropName];

let RandomValueNumber = Math.floor(Math.random() * RandomPropValue.length);

let RandomValueValue = RandomPropValue[RandomValueNumber];

// RandomValueValue="Innter stleter";
console.log(RandomValueValue);
document.querySelector(".categoryspan").innerHTML=RandomPropName;


// sellct letters geus elemet

let letterGuesContainer = document.querySelector(".letters-guess");


// converct shose word to array

let letterAndSpac =Array.from(RandomValueValue.toLowerCase());

// creat span depend on woed
let theRight=0;
letterAndSpac.forEach((l)=>{

    // create empty spandS
    let emptySpan = document.createElement("span");
    if(l===" "){
        emptySpan.className="with-space";
        theRight++;
        console.log(theRight);
    }
    // append span all to letter gues container

    letterGuesContainer.appendChild(emptySpan);

});

//  Handel Clicking on letter
let guesspan=document.querySelectorAll(".letters-guess span");


// set the chose state;
let state=false

// thrw drow
let theWorngTembs=0;



// the right


let theDrow=document.querySelector(".hangman-drow");

let samletter3EV=0;
document.addEventListener("click",(e)=>{
    let state=false;
    let samletter=0;
let samletter2=0;
let samletter3=0;
    if(e.target.classList.contains("letter-box")){
        
        
        // get clcicked letter
        let theClickkedLetter = e.target.innerHTML.toLowerCase();
        console.log(theClickkedLetter);
        console.log(letterAndSpac);
        letterAndSpac.forEach((E,index)=>{
            // if the clicked letter equal to one of the chosen word
            if(theClickkedLetter===E){
                // theRight=theRight+samletter;
                samletter++;
                samletter2++;
                samletter3++;

                console.log( "sam = "+samletter);
                state=true;

                console.log( `index ${index}`);
                // loop the gues span
                
                guesspan.forEach((spann,spaninex)=>{

                    if(index===spaninex ){
                        if(samletter===1){
                            spann.innerHTML=theClickkedLetter;
                        }
                        // console.log(`clicked ${e.target.classList.contains("clicked2")}`);
                        if(samletter2==2&&e.target.classList.contains("clicked2")){
                            spann.innerHTML=theClickkedLetter;
                            e.target.classList.add("clicked");
                            console.log("clicked2");
                        } 
                        if(samletter3===2&&e.target.classList.contains("clicked3")){
                            spann.innerHTML=theClickkedLetter;
                            // e.target.classList.add("clicked");
                            console.log("clicked3");
                        //     if(e.target.classList.contains("clicked5")){
                        //     // console.log("clicked4");
                        // }
                        }
                        if(samletter3==3&&e.target.classList.contains("clicked4")){
                            spann.innerHTML=theClickkedLetter;
                            e.target.classList.add("clicked");
                            console.log("clicked4");
                        } 
                        // if(e.target.classList.contains("clicked4")){
                        //     spann.innerHTML=theClickkedLetter;
                        //     e.target.classList.add("clicked");
                        //     console.log("clicked4");
                        // } 
                        // console.log(`clicked ${e.target.classList.contains("clicked2")}`);
                    }
                    
                    // if(index===spaninex && samletter2===0){
                    //     spann.innerHTML=theClickkedLetter;
                    // }
                    // if(index===spaninex && samlette3===0){
                    //     spann.innerHTML=theClickkedLetter;
                    // }
                })

            }



        })
        if(samletter===1){
            e.target.classList.add("clicked");
        }
        if(samletter2===2){
            e.target.classList.add("clicked2");
        }
        if(e.target.classList.contains("clicked4")){
            e.target.classList.add("clicked5");
        }
        if(e.target.classList.contains("clicked3")){
            e.target.classList.add("clicked4");
        }
        if(samletter3===3){
            e.target.classList.add("clicked3");
        }
        // if(samletter3===0){
        //     e.target.classList.add("clicked3");
        // }
        samletter=-1;
        console.log(state);
        // if letter false 
        if(state!==true){
            samletter=-1;
            theWorngTembs++;
            theDrow.classList.add(`wrong-${theWorngTembs}`)
            if(theWorngTembs==8){
                endgame();
            lettersContainer.classList.add("finished");

            }
        }else{
            samletter=-1;
            // theRight=theRight+samletter-1;
            // samletter=0;
            theRight++;
            console.log(`theRight++ ${theRight}`);
            if(theRight==letterAndSpac.length){
                swal("You Win", `Your name is ${RandomValueValue}`);
                lettersContainer.classList.add("finished");
            }
            
        }
    }
})


function endgame(){
    swal("Sory your lost", `Your name is ${RandomValueValue}`);
}






























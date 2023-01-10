
let arr = [];

let myInput = document.querySelector(".form .input");
let myaddInput = document.querySelector(".form .add");
let  myTask =  document.querySelector(".tasks");
var cid = 4561;
var classNum = 0;
if(window.localStorage.tasks){
let arraym=JSON.parse(localStorage.getItem("tasks"));
console.log(Array.isArray(JSON.parse(localStorage.getItem("tasks"))));
console.log(arraym.length);
for(let i=0 ; i < arraym.length ; i++ ){
     
    // console.log(arraym[i]);
    mydiv(arraym[i].nam);
}
    
}
function mydiv(valuemy){
    let mynewdiv = document.createElement("div");
     let textDiv = document.createTextNode(valuemy);
     mynewdiv.appendChild(textDiv);
     mynewdiv.className=`${classNum}`;
     classNum++;
     mynewdiv.style.cssText="background-color: #fff;display: flex;justify-content: space-between;align-items: center;height: 70px;padding: 20px;margin-top: 30px;border-radius: 6px;width:100%margin-bottom: 30px;";
     let mydelet = document.createElement("button");
     mydelet.className="delete";
     let textbtn1 = document.createTextNode("delet");
     mydelet.appendChild(textbtn1);
     mydelet.style.cssText=  "border: none;margin: 10px;height: 35px;background-color: rgba(233, 38, 38, 0.856); color: #e4e4e4;border-radius: 6px;";
     mynewdiv.appendChild(mydelet);
     myTask.appendChild(mynewdiv); 
     arr.push({id:cid++ ,nam:valuemy});
     window.localStorage.setItem('tasks', JSON.stringify(arr)); 
     console.log(window.localStorage.tasks);       
 }
myaddInput.onclick = function (){
    if(myInput.value){
   let myNewTitle = myInput.value;
   myInput.value="";
   mydiv(myNewTitle);
}
else{
    myInput.value="";
}
}
document.addEventListener("click",function(e){
    if(e.target.className === "delete"){
        let eT =e.target;
        let btnn = document.querySelectorAll(".delete");
        let indexarray;
        // console.log(`ind ${eT.parentElement.className}`);
        btnn.forEach(function(b,ind){
           if(eT.parentElement.className===b.parentElement.className){
            console.log(`ind ${ind}`);
            indexarray=ind;}
            
        })
        console.log(`indarray = ${indexarray}`);
        console.log(e.target.parentElement.className);
        let num =indexarray;
        
        classNum--;
        num=parseInt(num);
        console.log(num);
        arr.splice(num,1);
        console.log(window.localStorage.tasks); 
        window.localStorage.setItem('tasks', JSON.stringify(arr));
       
         console.log(  e.target.parentElement)
         e.target.parentElement.remove();
        // let El = document.querySelector(".delete")
        // El.LastElementChild.remove();
    }
});






// window.localStorage.setItem('tasks', JSON.stringify(arr));
// arr.push({id:t,nam:c});
// window.localStorage.setItem('tasks', JSON.stringify(arr));
// console.log(window.localStorage.tasks);
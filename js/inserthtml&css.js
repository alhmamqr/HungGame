let myHeader = document.createElement('header');
// let myContent = document.createElement('div');
// let myfooter = document.createElement('footer');

// body
document.body.style.cssText=" margin: 0px;background-color:rgb(236,236,236);font-family:Tahoma,Arial ; ";

// header
document.body.appendChild(myHeader);
myHeader.className = "website-head";
myHeader.style.cssText="margin-bottom: 20px; ;display:flex;padding:10px 20px;background-color:rgb(255,255,255);justify-content:space-between;align-items:center";
// content header
let myHeaderLogo = document.createElement('div');
myHeaderLogo.className = "logo";
let myHeaderUl = document.createElement('ul');
myHeaderUl.className = "mune";

myHeader.appendChild(myHeaderLogo);
myHeader.appendChild(myHeaderUl);

// content header logo

let logo = document.createTextNode('LOGO');
myHeaderLogo.appendChild(logo);
myHeaderLogo.style.cssText="font-font-weight: bold;font-size: 20px;color: rgb(22, 80, 80);"

// content header ul
function ul(a){
myHeaderUl.style.cssText="margin:0px ;list-style: none; display:flex;justify-content:center;align-items:center;";
let myHeaderUlLi1 = document.createElement('li');
myHeaderUlLi1.style.cssText="  display:flex;justify-content:center;align-items:center;";
myHeaderUl.appendChild(myHeaderUlLi1);
let myHeaderUlLia1 = document.createElement('a');
myHeaderUlLia1.className = "links";
myHeaderUlLia1.setAttribute("href","#");
myHeaderUlLia1.style.cssText="margin-right: 10px;color: black;text-decoration: none;";
myHeaderUlLi1.appendChild(myHeaderUlLia1);
let aHome = document.createTextNode(a);
myHeaderUlLia1.appendChild(aHome);
}
ul("Home");
ul("About");
ul("Service");
ul("content");

// content
let myContent = document.createElement('div');
myContent.className='content';
myContent.style.cssText="margin-bottom:20px;display: flex;gap: 20px;flex-wrap: wrap;justify-content: center;padding: 20px;min-height: calc(100vh - 20px);box-sizing: border-box;";

document.body.appendChild(myContent);
for(let i=0;i<15 ; i++){
let myProduct = document.createElement('div');

myProduct.style.cssText="padding: 20px  ;background-color: rgb(255, 255, 255);border:1px solid rgb(221, 221, 221) ;width: calc((100% - 90px) / 3) ;box-sizing: border-box;text-align: center;color: rgb(136, 136, 136);border-radius: 6px;";
myContent.appendChild(myProduct);

let myProductSpan = document.createElement('span');
myProductSpan.style.cssText="font-size: 40px;color: black;font-weight: normal;display: block;margin-bottom: 10px;margin-top: 10px;";
myProduct.appendChild(myProductSpan);
let spanTxt = document.createTextNode(`${i+1}`);
myProductSpan.appendChild(spanTxt);
let ProductTxt = document.createTextNode("Product");
myProduct.appendChild(ProductTxt);}


// footer
let myfooter = document.createElement('footer');
myfooter.className='footer';
document.body.appendChild(myfooter);
myfooter.style.cssText="background-color: rgb(35,169,110);font-size: 26px;text-align: center;color: rgb(255,255,255);";
let footertTxt = document.createTextNode("Copyright 2022");
myfooter.appendChild(footertTxt);




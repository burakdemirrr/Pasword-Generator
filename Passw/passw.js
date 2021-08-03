const checkbox=document.querySelector(".special");
const length=document.querySelector(".length");
const button=document.getElementById("submit");
const newp=document.querySelector(".new");

var allchars=[];
for(var i=97;i<123;i++){
allchars.push(String.fromCharCode(i));
}
allchars.push("1","2","3","4","5","6","7","8","9");

var allchars2=allchars.slice();

allchars2.push("#",".","'","^","&",">","£","+","%");



button.addEventListener('click',()=>{
    let passw="";
    let uzun=length.value;

    if(checkbox.checked){
        for(var i=0;i<uzun;i++){
            passw+=allchars2[randomize2()];
           
        } 
        newp.innerHTML=passw;
    }
    else{
        for(var i=0;i<uzun;i++){
            passw+=allchars[randomize1()];
           
        } 
        newp.innerHTML=passw;
    }

});



function randomize2(){
    return Math.floor(Math.random()*allchars2.length);
};
function randomize1(){
    return Math.floor(Math.random()*allchars.length);
}


function celebrate(){

let name=document.getElementById("name").value;

if(name===""){
alert("Enter Name");
return;
}

document.getElementById("msg").innerHTML=
"🎉 Happy Birthday " + name + " 🎂";

for(let i=0;i<50;i++){

let fw=document.createElement("div");

fw.className="firework";
fw.innerHTML="🎆";

fw.style.left=Math.random()*100+"vw";
fw.style.top=Math.random()*100+"vh";

document.body.appendChild(fw);

setTimeout(()=>{
fw.remove();
},2000);
}
}

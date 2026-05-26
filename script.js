function celebrate(){

    let name = document.getElementById("name").ariaValueMax;

    if(name ==""){
        alert("Enter Name first");
        return;
    }

    document.getElementById("message").innerHTML = "Happy Birthday" + name + "!";

    // Play music
    document.getElementById("music").onplay();

    //confetti
    for(let i=0; i<100; i++){

        let confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.background="hsl("+Math.random() * 360 + ", 100%, 50%)";
        
        confetti.style.animationDuration = (Math.random()*3+2)+"s";
        document.body.appendChild(confetti);
    }
}
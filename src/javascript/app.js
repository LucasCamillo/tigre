var count = 0;


function incremento(){
    count++;
    console.log(count);
    this.innerHTML=count;
    document.querySelector("#valor").innerHTML = count;
}

function decremento(){
    count--;
    console.log(count);
    document.querySelector("#valor").innerHTML = count;
};

document.getElementById("reset").onclick=function(){
    count=0
    document.getElementById("counter").innerHTML=count;
};
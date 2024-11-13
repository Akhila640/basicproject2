let a=document.getElementById("color")
let b=document.getElementById("bRadius")
let image=document.querySelector("img");

function colorChange(z){
    console.log(z);
    if(z.key==="Enter"){
        document.body.style.background=a.value
    }
}

function RadiusChange(z){
    console.log(z)
    if(z.key==="Enter"){
        image.style.borderRadius=`${b.value}px`
    }
}
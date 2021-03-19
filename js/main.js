let counter = 0;
let counterPiu = document.querySelector(".piu");
let counterMeno = document.querySelector(".meno");


counterPiu.addEventListener("click",()=>{
  counter++;
    document.querySelector(".counter").innerHTML = counter;
}) ;

counterMeno.addEventListener("click",()=>{
  counter--;
  document.querySelector(".counter").innerHTML = counter;
})

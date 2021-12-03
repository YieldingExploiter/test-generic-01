const r = document.createElement('video');
r.src='/874652346.mp4'
r.id="ve65"

r.style.width = "100vw";
r.style.height = "100vh";
r.style.display = "none";
r.style.position = "fixed";
r.style.top = "0";
r.style.left = "0";
r.style.padding = "0 0";
r.style.margin = "0 0";

document.querySelector("body").appendChild(r);
const v = document.querySelector("#ve65")

let ready = ()=>{
  const hm = document.querySelector('[data-hideme]');
  document.addEventListener("mousedown",()=>{
    hm.remove();
    v.play();
    v.style.display = "block";
    document.documentElement.requestFullscreen();
  })
  hm.innerHTML="Please click anywhere in this tab."
  ready=()=>{}
}
const ev = ()=>{
  setTimeout(ready,500)
  console.log("Calling ready from Event Listener")
}
v.addEventListener('oncanplaythrough',ev)
v.addEventListener('oncanplay',ev)
document.addEventListener("DOMContentLoaded",()=>{
  console.log("DOMContentLoaded")
  setTimeout(()=>{
    ready()
    console.log("Calling ready from Timeout")
  },3000)
})
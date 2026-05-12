// ======================================================
// SMART TURF — ULTRA PERFORMANCE ENGINE 🚀🌿🌊
// ======================================================



// ======================================================
// GLOBAL SELECTORS
// ======================================================

const body = document.body;

const cursor = document.querySelector(".cursor");

const buttons = document.querySelectorAll("button");

const cards = document.querySelectorAll(

  ".card,.green-card,.analytics-card,.space-card,.stat-card"

);



// ======================================================
// CURSOR ENGINE 🚀
// ======================================================

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;



window.addEventListener("mousemove",(e)=>{

  mouseX = e.clientX;

  mouseY = e.clientY;



  createSmoke(mouseX,mouseY);

});



function animateCursor(){

  cursorX += (mouseX - cursorX) * 0.12;

  cursorY += (mouseY - cursorY) * 0.12;



  if(cursor){

    cursor.style.left = cursorX + "px";

    cursor.style.top = cursorY + "px";

  }



  requestAnimationFrame(animateCursor);

}

animateCursor();



// ======================================================
// CURSOR SMOKE
// ======================================================

function createSmoke(x,y){

  const smoke = document.createElement("div");

  smoke.className = "cursor-trail";



  smoke.style.left = x + "px";

  smoke.style.top = y + "px";



  body.appendChild(smoke);



  setTimeout(()=>{

    smoke.remove();

  },800);

}



// ======================================================
// MAGNETIC BUTTONS
// ======================================================

buttons.forEach((button)=>{

  button.addEventListener("mousemove",(e)=>{

    const rect = button.getBoundingClientRect();



    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;



    button.style.transform =

      `translate(${x * 0.15}px,${y * 0.15}px)`;

  });



  button.addEventListener("mouseleave",()=>{

    button.style.transform = "translate(0px,0px)";

  });

});



// ======================================================
// GLASS CARD TILT
// ======================================================

cards.forEach((card)=>{

  card.addEventListener("mousemove",(e)=>{

    const rect = card.getBoundingClientRect();



    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;



    const rotateX =
      ((y / rect.height) - 0.5) * -12;

    const rotateY =
      ((x / rect.width) - 0.5) * 12;



    card.style.transform =

      `perspective(1200px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-8px)`;

  });



  card.addEventListener("mouseleave",()=>{

    card.style.transform =

      `perspective(1200px)
       rotateX(0deg)
       rotateY(0deg)
       translateY(0px)`;

  });

});



// ======================================================
// FLOATING PARTICLES ✨
// ======================================================

function createParticle(){

  const particle = document.createElement("div");

  particle.className = "particle";



  const size =
    Math.random() * 8 + 5;



  particle.style.width = size + "px";

  particle.style.height = size + "px";



  particle.style.left =
    Math.random() * window.innerWidth + "px";



  particle.style.top =
    window.innerHeight + "px";



  body.appendChild(particle);



  const animation = particle.animate([

    {

      transform:
      "translateY(0px) scale(1)",

      opacity:1

    },

    {

      transform:
      "translateY(-120vh) scale(3)",

      opacity:0

    }

  ],{

    duration:
    Math.random() * 4000 + 3000,

    easing:"linear"

  });



  animation.onfinish = ()=>{

    particle.remove();

  };

}

setInterval(createParticle,180);



// ======================================================
// SCROLL REVEAL
// ======================================================

const revealItems = document.querySelectorAll(

  ".hero,.card,.green-card,.analytics-card,.space-card"

);



const revealObserver = new IntersectionObserver(

(entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";

      entry.target.style.transform =

        "translateY(0px)";

    }

  });

},

{

  threshold:0.15

});



revealItems.forEach((item)=>{

  item.style.opacity = "0";

  item.style.transform = "translateY(80px)";

  item.style.transition = "1s";



  revealObserver.observe(item);

});



// ======================================================
// TOAST SYSTEM
// ======================================================

function showToast(message){

  const toast = document.createElement("div");

  toast.className = "toast";



  toast.innerHTML = `<span>${message}</span>`;



  body.appendChild(toast);



  requestAnimationFrame(()=>{

    toast.classList.add("show");

  });



  setTimeout(()=>{

    toast.classList.remove("show");



    setTimeout(()=>{

      toast.remove();

    },500);

  },3500);

}



// ======================================================
// AI STATUS
// ======================================================

const aiMessages = [

  "🌿 Smart Turf System Active",

  "💧 Water Resources Optimized",

  "☀️ Paradise Climate Stable",

  "🛰 Sensors Connected",

  "🌊 Irrigation Running Smoothly"

];



setInterval(()=>{

  const message =

    aiMessages[

      Math.floor(Math.random() * aiMessages.length)

    ];



  showToast(message);

},15000);



// ======================================================
// LIVE CLOCK
// ======================================================

function updateClock(){

  const clock =
    document.querySelector(".live-clock");



  if(clock){

    const now = new Date();

    clock.innerHTML =

      now.toLocaleTimeString();

  }

}

setInterval(updateClock,1000);



// ======================================================
// PAGE NAVIGATION
// ======================================================

function navigate(page){

  body.style.opacity = "0";



  setTimeout(()=>{

    window.location.href = page;

  },500);

}



// ======================================================
// PARALLAX BACKGROUND
// ======================================================

window.addEventListener("mousemove",(e)=>{

  const moveX =
    (e.clientX / window.innerWidth - 0.5) * 10;

  const moveY =
    (e.clientY / window.innerHeight - 0.5) * 10;



  body.style.backgroundPosition =

    `${50 + moveX}% ${50 + moveY}%`;

});



// ======================================================
// LOADER
// ======================================================

window.addEventListener("load",()=>{

  const loader =
    document.querySelector(".loader");



  if(loader){

    setTimeout(()=>{

      loader.style.opacity = "0";



      setTimeout(()=>{

        loader.style.display = "none";

      },800);

    },1500);

  }



  showToast("🚀 Smart Turf Paradise Connected");

});



// ======================================================
// AUDIO SYSTEM
// ======================================================

const audio = new Audio(

"https://cdn.pixabay.com/download/audio/2022/03/15/audio_6d6f2d8f4f.mp3?filename=forest-lullaby-110624.mp3"

);

audio.loop = true;

audio.volume = 0.2;



window.addEventListener("click",()=>{

  audio.play();

},{once:true});



// ======================================================
// END ENGINE 🚀
// ======================================================
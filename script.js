// ===========================
// navigation bar responsive
// ===========================
const header = document.querySelector(".header");
const nav_icons = document.querySelector(".navbar-icons");

nav_icons.addEventListener("click", () => {
  header.classList.toggle("active");

})



// ===========================
//      swiper section
// ===========================

const swiperMedia = window.matchMedia("(max-width:950px)");
swiperMedia.addEventListener("change",(e)=>{
  if(e.matches){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 5,
      loop: true,
      autoplay:{
        delay:5000
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  else{
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 5,
      loop: true,
      autoplay:{
        delay:5000
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  }
})



// ===========================
//      gallery section
// ===========================
var fullimage_box = document.querySelector(".gallery-full-image");
var smallimage = document.querySelectorAll(".gallery-smallImg");
var fullimage = document.querySelector(".fullimage");
var closeImg = document.querySelector(".gallery-full-image span");

smallimage.forEach((element) => {
  element.addEventListener("click", () => {
    // console.log(element.src) ;
    // console.log(fullimage.src) ;
    fullimage.src = element.src;
    fullimage_box.style.display = "flex";
  })
})
closeImg.addEventListener("click", () => {
  fullimage_box.style.display = "none";

})


// ===========================
//       work-counter
// ===========================


const counter = document.querySelectorAll(".counter");
const counterReport = document.querySelector(".counter-section-report");
const counterObserver = new IntersectionObserver((entries, observer) => {
  const entry = entries[0];

  if (!entry.isIntersecting) {
    return;
  }
  else {
    counter.forEach((e) => {
      const updateNum = () => {

        const targetNum = parseInt(e.dataset.num);
        // console.log(targetNum);
        const initialNum = parseInt(e.innerText);
        // console.log(initialNum);
        const incrementNum = Math.trunc(targetNum / 100);
        // console.log(incrementNum);

        if (initialNum < targetNum) {
          e.innerText = initialNum + incrementNum + `+`;
          setTimeout(updateNum, 20)
        }
      }
      updateNum();
    })
  }
}, {
  root: null,
  thresholds: 0
})

counterObserver.observe(counterReport);





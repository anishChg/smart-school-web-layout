// nav_tab
const navbtn = document.querySelector(".nav_tab")
const menulist = document.querySelector(".nav_list");
const navclose = document.querySelector(".nav_close");

navbtn.addEventListener('click',()=>{
  menulist.classList.add('nav_open');
});

navclose.addEventListener('click',()=>{
  menulist.classList.remove("nav_open");
});


const buttons = document.querySelectorAll("[data-modal]");
const closebtns = document.querySelectorAll('.close');
const gallerymodal = document.querySelectorAll('.modals_gallery')

buttons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      modal.classList.add("active");
    });
});

closebtns.forEach(closebtn =>{
    closebtn.addEventListener('click',() => {
       closebtn.closest(".active").classList.remove('active');
    });
});


// menutab
const openContactbg = document.querySelector(".menutab");
const contactBg = document.querySelector(".contact_bg");
const closeContactbg = document.querySelector(".bg_close");

openContactbg.addEventListener('click',()=>{
  contactBg.classList.add('show');
})

closeContactbg.addEventListener('click',()=>{
  contactBg.classList.remove("show");
})

// scroll navigation

// const navSCroll = document.querySelector('.navigation');

// window.addEventListener('scroll',()=>{
//   navSCroll.classList.toggle('sticky', window.scrollY > 0);
// })

const nav = document.querySelector(".navigation");
const navTop = nav.offsetTop;

function stickyNavigation() {
  const scrollTop = window.scrollY;

  if (scrollTop > navTop) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

window.addEventListener("scroll", stickyNavigation);







// video link
const videobtn = document.querySelector("#open");
const videolink = document.querySelector(".open_video");
const videoClose = document.querySelector(".video_close");

videobtn.addEventListener('click',()=>{
  videolink.classList.add('open');
})

window.addEventListener('click', (event) => {
  if (event.target === videolink) {
    videolink.classList.remove('open');
  }
});

videoClose.addEventListener('click',()=>{
  videolink.classList.remove('open');
});


// counter
jQuery(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
});

// feature mouse animation
const objects = document.querySelectorAll(".object");
document.addEventListener('mousemove', (e)=>{
  objects.forEach(function(move){
    let moving_value = move.getAttribute("data-target");
    let x = (e.clientX * moving_value) / 250;
    let y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"
  })
})

// cloud animation


// window.addEventListener('scroll',()=>{
//   cloud1SCroll.classList.toggle('bottom_cloud', window.scrollY > 0);
// })
// window.addEventListener('scroll',()=>{
//   cloud2SCroll.classList.toggle('left_cloud', window.scrollY > 0);
// })
// window.addEventListener('scroll',()=>{
//   cloud3SCroll.classList.toggle('right_cloud', window.scrollY > 0);
// })

// Animation

// const cloud1SCroll = document.querySelector('.cloud1');
// const cloud2SCroll = document.querySelector('.cloud2');
// const cloud3SCroll = document.querySelector('.cloud3');

// const appearOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -200px 0px"
// };

// const appearOnScroll = new IntersectionObserver(function(
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// appearOptions);


// cloud1SCroll.forEach(cloud1=>{
//   appearOnScroll.observe(cloud1);
// });

// cloud2SCroll.forEach(cloud2=>{
//   appearOnScroll.observe(cloud2);
// });
// cloud3SCroll.forEach(cloud3=>{
//   appearOnScroll.observe(cloud3);
// });

// testimonial slider

    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        // type: "progressbar",
        dynamicBullets: true,
      },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    });

   

  
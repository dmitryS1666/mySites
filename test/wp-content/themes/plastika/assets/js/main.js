/* HEADER*/

window.onscroll = () => {

  const headerAdaptive = document.querySelector('.header__adaptive')
  const Y = window.scrollY
  const adaptive__nav = document.querySelector('.adaptive__nav')

  /* Кнопка консультации FIXED */
  const consultationButton = document.querySelector('.consultationButton')

  if(Y > window.innerHeight) {
    headerAdaptive.style.visibility = 'visible'
    consultationButton.style.visibility = 'visible'
    
  } else if (Y < window.innerHeight){
    headerAdaptive.style.visibility = 'hidden'
    consultationButton.style.visibility = 'hidden'
  }

}

$(document).ready(function() {
  let formConsultation = document.querySelector('.formConsultation')
  const consultationButton = document.querySelector('.consultationButton')
  let form__cross = document.querySelector('.form__cross')
  
  consultationButton.addEventListener('click', () => {
    formConsultation.style.bottom = '0%'
    consultationButton.style.backgroundColor = 'white'
    consultationButton.style.color = '#0C647B'
  
  })
  
  form__cross.addEventListener('click', () => {
    formConsultation.style.bottom = '-100%'
    consultationButton.style.backgroundColor = '#0C647B'
    consultationButton.style.color = 'white'
  })
})



/* ANIMATION */

document.addEventListener('DOMContentLoaded',  a)

function a() {
  let popupForm = document.querySelector('.popupForm')

  if(window.innerWidth < 520) {
    popupForm.style.opacity = '1'
  } else if (window.innerWidth > 520) {
    popupForm.style.opacity = '0'
  }

}

/* BURGER */

let burger = document.getElementById('burger')
let menu = document.querySelector('.adaptive__nav')
let cross = document.querySelector('.nav__cross')

burger.addEventListener('click', () => {
    menu.style.display = 'flex'
    menu.style.right = '0px'
})

cross.addEventListener('click', () => {
    menu.style.right = '-400px'
})

/* MOBILE BURGER */

let mobile__burger = document.querySelector('.mobile__burger')
let mobile__menu = document.querySelector('.mobile__nav')
let mobile__cross = document.querySelector('.mobile__nav__cross')

mobile__burger.addEventListener('click', () => {
  mobile__menu.style.display = 'flex'
  mobile__menu.style.right = '0px'
})

  mobile__cross.addEventListener('click', () => {
  mobile__menu.style.right = '-600px'
})

/* SLIDER */

$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 3,
    prevArrow: '<div class="prev"><img src="./img/arrow.svg"></div>',
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
  });
});


/* Плавный скролл к блокам */

let anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault()
        const blockID = anchor.getAttribute('href')
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

/* Accordion */

const accordion = document.getElementsByClassName('contentBox')

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

/* SliderType */

$(document).ready(function() {
  $('.sliderType').slick({
    arrows: false,
    slidesToShow: 3,
    initialSlide: 1,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  })
})

/* Табы */

let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
 
let tabsPane = tabHeader.getElementsByTagName("div");
 
for(let i=0;i<tabsPane.length;i++){
  tabsPane[i].addEventListener("click",function(){
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[i].classList.add("active");
    
    //tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
  });
}

////////



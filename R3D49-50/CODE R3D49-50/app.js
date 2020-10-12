


const changeTitle = () => { 
    setTimeout(() => {
        document.querySelector('h1').innerHTML = 'nightcoder.io';
        document.querySelector('h1').style.animation = 'fadeIn 2000ms forwards' 
        // up 500ms forwards 3600ms ease-out';
    }, 2400)
}

// setTimeout(() => {
//     document.querySelector('.h1').textContent = document.querySelector('h1').textContent.replace(/.io/gi," ");      
// }, 4500)

window.addEventListener('DOMContentLoaded', changeTitle);

const tl = gsap.timeline();
// tl
// .to('.detype', {duration:2, opacity:1, stagger:0.15})
// .to('detype', {opacity:0, stagger:0.15})
// gsap.to('.detype',{duration:2, opacity:1, stagger:0.2})
gsap.registerPlugin(ScrollTrigger);

gsap.to('h1', {
scrollTrigger:{
    trigger:'p',
start:"center center"
}, 
duration:2, x:3000})
gsap.to('p', {
    scrollTrigger:{
        trigger:"p",
        start:0
    },
    duration:2, opacity:1, y:-150, x:100 
})
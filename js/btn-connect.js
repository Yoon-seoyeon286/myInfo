const firstBtn = document.querySelector('.first-career-btn');
const firstContainer= document.querySelector('.first-career-container');

const secondBtn = document.querySelector('.second-career-btn');
const secondContainer= document.querySelector('.second-career-container');

const thirdBtn = document.querySelector('.third-career-btn');
const thirdContainer= document.querySelector('.third-career-container');

const fourthBtn = document.querySelector('.fourth-career-btn');
const fourthContainer= document.querySelector('.fourth-career-container');

firstBtn.addEventListener('click',()=>{
    firstContainer.classList.toggle('active');
})

secondBtn.addEventListener('click',()=>{
    secondContainer.classList.toggle('active');
})

thirdBtn.addEventListener('click',()=>{
    thirdContainer.classList.toggle('active');
})

fourthBtn.addEventListener('click',()=>{
    fourthContainer.classList.toggle('active');
})
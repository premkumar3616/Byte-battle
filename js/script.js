const signup=document.getElementById('sign');
const logright=document.getElementById('logright');
const bg=document.querySelector('.bg');
const signin=document.querySelector('.container--signin');
const logup=document.querySelector('.container--signup')
signup.addEventListener('click',()=>{
// console.log('prem');
bg.classList.add('bg-right');
if(bg.classList.contains('bg-right')){
    signin.classList.add('closein');
    logup.classList.add('openup');
}
}
);
logright.addEventListener('click', ()=>{
if(bg.classList.contains('bg-right')){
    signin.classList.remove('closein');
    bg.classList.remove('bg-right');
    logup.classList.remove('openup');
}
});
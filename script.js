//get click here button
click_btn=document.getElementById('click-button');

//get modal
modal=document.getElementsByClassName('modal')[0];
//get cross btn
cross_btn=document.getElementById('cross');

click_btn.addEventListener('click',()=>{
    modal.style.display='block';
})

cross_btn.addEventListener('click',()=>{
    modal.style.display='none';
})
modal.addEventListener('click',()=>{
    modal.style.display='none';
})
const navshowbtn = document.querySelector('.ham');
const navhidebtn = document.querySelector('.nav-clp');
const navmenu = document.querySelector('.nav-collaps');

navshowbtn.addEventListener('click', ()=> {
    navmenu.classList.add('shownav')
    navshowbtn.classList.add('hide')
});

navhidebtn.addEventListener('click',()=>{
    navmenu.classList.remove('shownav');
    navshowbtn.classList.remove('hide')
});

const dottedbtn = document.querySelectorAll('.dotted-btn span');
let slidecount=0;

dottedbtn.forEach((item) => {
    item.addEventListener('click',()=>{
        slidecount = item.dataset.id;
        slideshowcase();
    });
});


function slideshowcase(){
    const displaywidth = document.querySelector('.content').clientWidth;
    document.querySelector('.screen-content').style.transform=`translateX(${-slidecount * displaywidth}px)`

}
window.addEventListener('resize', slideshowcase);
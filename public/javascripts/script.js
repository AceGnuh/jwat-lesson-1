// let navbarCollapse = document.querySelector('.navbar-collapse');
// let btnContact = document.querySelector('.btn-contact');
// let navbarNav = document.querySelector('.navbar-nav');
const primaryColor = '#03204c';
const secondaryColor = '#5bdbec';

let btnToggle = document.querySelector('.navbar-toggler');
let btnToggleIcon = document.querySelector('.navbar-toggler-icon');

//check toggle button is rotated 90 degree or not
let isClick = false;
btnToggle.addEventListener('click', function() {
    
    if(!isClick){
        this.style.transform = 'rotate(90deg)';
        btnToggle.style.backgroundColor = secondaryColor;

        //toggle button is clicked
        isClick = true;
    }
    else{
        this.style.transform = 'rotate(0deg)';
        btnToggle.style.backgroundColor = primaryColor

        //toggle button is not clicked
        isClick = false;
    }

    //transition effect smoothly
    this.style.transition = '0.2s linear all';
});




const primaryColor = '#03204c';
const secondaryColor = '#5bdbec';

let body = document.querySelector('body');
let btnToggle = document.querySelector('.navbar-toggler');
let btnToggleIcon = document.querySelector('.navbar-toggler-icon');
let btnContact = document.querySelector('.btn-contact');

let navbarCollapse = document.querySelector('.navbar-collapse');
let navbarNav = document.querySelector('.navbar-nav');
let navbarContainer = document.querySelector('nav .container-fluid');
let mainArea = document.querySelector('main');

window.onresize = function() {
    console.log('resize');
    if(window.innerWidth < 992){
        
        btnContact.style.backgroundColor = secondaryColor;
        btnContact.style.color = "#fff";
    }
    else{
        btnContact.style.backgroundColor = "#fff";
        btnContact.style.color = primaryColor;
    }

}

mainArea.addEventListener('click', function() {
    if(window.innerWidth < 992){
        btnToggle.style.backgroundColor = primaryColor;

        if(navbarCollapse.classList.contains('show')){
            //navbarCollapse.classList.remove('show');
            btnToggleIcon.click();
            // btnToggle.style.color = "#fff";
            // btnToggle.style.backgroundColor = primaryColor;
        }
    }
    else{
        btnContact.style.backgroundColor = "#fff";
        btnContact.style.color = primaryColor;
    }

    //change color of contact button
    // btnContact.style.backgroundColor = "#fff";
    // btnContact.style.color = primaryColor;
});



//handle click event on contact button
// let isClickBtnContact = false;
btnContact.addEventListener('click', function() {
    // if(!isClickBtnContact){
        this.style.backgroundColor = secondaryColor;
        this.style.color = "#fff";
        // isClickBtnContact = true;
    // }
    // else{
    //     this.style.backgroundColor = "#fff";
    //     this.style.color = "#000";
    //     isClickBtnContact = false;
    // }
});

//check toggle button is rotated 90 degree or not
let isClick = false;
btnToggle.addEventListener('click', function() {
    
    if(!isClick){
        this.style.transform = 'rotate(90deg)';
        btnToggle.style.backgroundColor = "rgb(55 65 81)";

        //toggle button is clicked
        isClick = true;
    }
    else{
        this.style.transform = 'rotate(0deg)';
        btnToggle.style.backgroundColor = "rgb(55 65 81)"

        //toggle button is not clicked
        isClick = false;
    }

    //transition effect smoothly
    this.style.transition = '0.2s linear all';
});

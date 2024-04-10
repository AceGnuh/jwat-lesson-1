const primaryColor = '#03204c';
const secondaryColor = '#3bc4e2';

let body = document.querySelector('body');
let btnToggle = document.querySelector('.navbar-toggler');
let btnToggleIcon = document.querySelector('.navbar-toggler-icon');
let btnContact = document.querySelector('.btn-contact');

let navbarCollapse = document.querySelector('.navbar-collapse');
let navbarNav = document.querySelector('.navbar-nav');
let navbarContainer = document.querySelector('nav .container-fluid');
let mainArea = document.querySelector('main');

let dropdownToggleList = document.querySelectorAll('.dropdown-toggle');
let dropdownMenu = document.querySelectorAll('.dropdown-menu');
let menuItemList = document.querySelectorAll('.dropdown-toggle ul');
let navLinkItemList = document.querySelectorAll('.nav-link');

let containerList = document.querySelectorAll('.container');
let dropdowns = document.querySelectorAll('.dropdown');
let dropdownItems = document.querySelectorAll('.dropdown-item');

document.addEventListener('DOMContentLoaded', function() {

    //handle hover event to expand dropdown menu
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            this.classList.add('show');
            var dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.add('show');
            }
        });

        dropdown.addEventListener('mouseout', function() {
            this.classList.remove('show');
            var dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('show');
            }
        });

        
    });

    dropdownItems.forEach(function(dropdownItem) {
        dropdownItem.addEventListener('click', function() {
            this.style.cssText = `backgroundColor : ${primaryColor}; color: #fff;`;
        });
    });

    //handle resize event on window
    window.onresize = function() {
        console.log("resize > 1600");


        if(window.innerWidth > 1500){
            
            containerList.forEach(function(containerItem) {
                containerItem.classList.remove('container');
                containerItem.classList.add('container-fluid');
                
            })

        }
        else{
            containerList.forEach(function(containerItem) {
                containerItem.classList.remove('container-fluid');
                containerItem.classList.add('container');
            })
        }

        if(window.innerWidth < 992){  
            btnContact.style.backgroundColor = secondaryColor;
            btnContact.style.color = "#fff";
        }
        else{
            btnContact.style.backgroundColor = "#fff";
            btnContact.style.color = primaryColor;
        }



    }

    handleSizeWindow();

});

// navLinkItemList.forEach(function(navItem) {
//     navItem.addEventListener('click', function() {
//         // this.nextElementSibling.classList.add('show');
//         // console.log(this.nextElementSibling.classList);
//     })
// })


// menuItemList.forEach(function(menuItem) {
//     menuItem.addEventListener('mouseover', function() {

//         let siblingElement = this.previousElementSibling;
//         siblingElement.style.cssText = `color : ${secondaryColor}!important`;
//         //this.click();
//         navLinkItemList.forEach(function(navItem) {
//             navItem.style.cssText = `color : #fff`;
//         })
//     });

//     menuItem.addEventListener('mouseout', function() {

//         // let siblingElement = this.previousElementSibling;
//         this.style.cssText = `color : #fff!important`;
//     });
// });

// navLinkItemList.forEach(function(menuItem) {
//     menuItem.addEventListener('click', function() {
//         this.siblingElement.style.cssText = `color : #fff!important`;
//     })
// })

//handle mouseover event on nav link in menu
// menuItemList.forEach(function(menuItem) {
//     menuItem.addEventListener('mouseout', function() {
//         // if(this.classList.contains('show')){
//             let siblingElement = this.previousElementSibling;
//             siblingElement.style.cssText = `color : #fff!important`;
//         // }
//     });
// });

function handleSizeWindow() {
    if(window.innerWidth > 1500){
        
        containerList.forEach(function(containerItem) {
            containerItem.classList.remove('container');
            containerItem.classList.add('container-fluid');
            
        })

    }
    else{
        containerList.forEach(function(containerItem) {
            containerItem.classList.remove('container-fluid');
            containerItem.classList.add('container');
        })
    }
}


//handle click event on main area
mainArea.addEventListener('click', function() {
    if(window.innerWidth < 992){
        btnToggle.style.backgroundColor = primaryColor;

        if(navbarCollapse.classList.contains('show')){
            //navbarCollapse.classList.remove('show');
            btnToggleIcon.click();
            // btnToggle.style.color = "#fff";
            btnToggle.style.backgroundColor = primaryColor;
        }
    }
    else{
        btnContact.style.backgroundColor = "#fff";
        btnContact.style.color = primaryColor;
    }

    navLinkItemList.forEach(function(navItem) {
        if(navItem.nextElementSibling){
            if(navItem.nextElementSibling.classList.contains('show')){
                navItem.nextElementSibling.classList.remove('show');
            }
        }
    })
});


//handle click event on contact button
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

//handle toggle button is rotated 90 degree
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


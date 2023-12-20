// Smooth Scroll
var target = document.getElementsByClassName("nav-opt");

var scrollInterval;

var scrollVertically = function(element){
    var targetpos = element.getBoundingClientRect();
    if(targetpos.y<=0){
        clearInterval(scrollInterval);
        return;
    }
    window.scrollBy(0,50);
}
for(var i =0 ; i<target.length;i++){
    target[i].addEventListener('click',function(event){
        event.preventDefault();
        var id = this.getAttribute('data-value');
        var element = document.getElementById(id);
        
        scrollInterval = setInterval(function(){
            scrollVertically(element);  
        },20);

    });    
}
// Skills Bar

var progressBars = document.getElementsByClassName("eighty-five-percent");
var skillsContainer = document.getElementById("skills-container");

// window.addEventListener('scroll',checkScroll);



// function initialisedBars(){
//     for (let bar of progressBars){
//         bar.style.width = 0 + '%';
//     }
// }

// initialisedBars();

// var animationDone = false;
// function fillBars(){
//     for(let bar of progressBars){
//         let targetWidth = bar.getAttribute('data-skill-level');
//         let currentWidth = 0;
//         let interval = setInterval(function(){
//             if(currentWidth>targetWidth){
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             bar.style.width = currentWidth + '%';
//         },5);
//     }
// }

// function checkScroll(){
//     var coordinates = skillsContainer.getBoundingClientRect();
//     if(!animationDone && coordinates.top < window.innerHeight){
//         //fire animation
//         fillBars();
//         animationDone = true;
//     }else if(animationDone && coordinates.top>window.innerHeight){
//         initialisedBars();
//         animationDone = false;
//     }
// }

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);

window.addEventListener('scroll',checkScroll);

function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-skill-level");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}

var Doc = document.body;

// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
    //resume percentage viewed
    viewPercentage();



}

// Below function tells how much resume has been viewed.
var viewPer = document.getElementById("viewed");
function viewPercentage(){
    let x = (Doc.clientHeight - window.innerHeight - window.pageYOffset)/Doc.clientHeight;
    // x = Math.round(x*10)/10;
    viewPer.innerText = (100-x*100).toFixed() + '% Resume Viewed';
}   







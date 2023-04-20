const sub1 = document.getElementById("courses-list-container");
const container1 = document.getElementById('freecourses');
const sub2 = document.getElementById('excersize-list-container');
const container2 = document.getElementById('excersize');
const sub3 = document.getElementById('more-list-container');
const container3 = document.getElementById('more');
const navIcons = document.getElementsByClassName('nav-icons');
const burg = document.getElementById('burg');



container1.addEventListener('click', (event) => 
{
    if (sub1.style.opacity == "0"){
        sub1.style.opacity = "100%";
        sub2.style.opacity = "0";
        sub3.style.opacity = "0";
    } else {
        sub1.style.opacity = "0";
    }
});

container2.addEventListener('click', (event) => 
{
    if (sub2.style.opacity == "0"){
        sub2.style.opacity = "100%";
        sub1.style.opacity = "0";
        sub3.style.opacity = "0";
    } else {
        sub2.style.opacity = "0";
    }
});
container3.addEventListener('click', (event) => 
{
    if (sub3.style.opacity == "0"){
        sub3.style.opacity = "100%";
        sub1.style.opacity = "0";
        sub2.style.opacity = "0";
    } else {
        sub3.style.opacity = "0";
    }
});
burg.addEventListener('click', (event)=> {
    if (navIcons.style.display = "none"){
        navIcons.style,display = "block";
    }else{
        navIcons.style.display = "none";
    }
});
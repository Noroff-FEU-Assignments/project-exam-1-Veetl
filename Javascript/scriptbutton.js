const url = "https://veetl.skadbergworks.com/wp/wp-json/wp/v2/posts?per_page=12";


const resultsContainer = document.querySelector("#box1 .carousel")
const resultsContainer2 = document.querySelector("#box2 .carousel")
const resultsContainer3 = document.querySelector("#box3 .carousel")

const resultsContainer4 = document.querySelector("#box4 .minicarousel")
const resultsContainer5 = document.querySelector("#box5 .minicarousel")
const resultsContainer6 = document.querySelector("#box6 .minicarousel")
const resultsContainer7 = document.querySelector("#box7 .minicarousel")
const resultsContainer8 = document.querySelector("#box8 .minicarousel")
const resultsContainer9 = document.querySelector("#box9 .minicarousel")
const resultsContainer10 = document.querySelector("#box10 .minicarousel")
const resultsContainer11 = document.querySelector("#box11 .minicarousel")
const resultsContainer12 = document.querySelector("#box12 .minicarousel")
const resultsContainer13 = document.querySelector("#box13 .minicarousel")
const resultsContainer14 = document.querySelector("#box14 .minicarousel")
const resultsContainer15 = document.querySelector("#box15 .minicarousel")

const resultsContainer16 = document.querySelector("#box16 .mediumcarousel")
const resultsContainer17 = document.querySelector("#box17 .mediumcarousel")
const resultsContainer18 = document.querySelector("#box18 .mediumcarousel")
const resultsContainer19 = document.querySelector("#box19 .mediumcarousel")
const resultsContainer20 = document.querySelector("#box20 .mediumcarousel")
const resultsContainer21 = document.querySelector("#box21 .mediumcarousel")



async function getInfo() {

    const response =  await fetch(url, {method:'GET',
    });

    const object = await response.json();

    const info = object;
 
    for(let i = 0; i < info.length; i++) {
        if (i === 4) {
            break;
        }
        resultsContainer.innerHTML += `<a href="Blogs.html?id=${info[i].id}" class="box"> <div><h3>${info[i].title.rendered}</h3> ${info[i].excerpt.rendered} </div></a>`                         
    }
    for(let i = 4; i < info.length; i++) {
        if (i === 8) {
            break;
        }
        resultsContainer2.innerHTML += `<a href="Blogs.html?id=${info[i].id}" class="box"> <div><h3>${info[i].title.rendered}</h3> ${info[i].excerpt.rendered} </div></a>`
    }
    for(let i = 8; i < info.length; i++) {
        if (i === 12) {
            break;
        }
        resultsContainer3.innerHTML += `<a href="Blogs.html?id=${info[i].id}" class="box"> <div><h3>${info[i].title.rendered}</h3> ${info[i].excerpt.rendered} </div></a>`
    }





    for(let i = 0; i < info.length; i++) {
        if (i === 2) {
            break;
        }
        resultsContainer16.innerHTML += `<a href="Blogs.html?id=${info[i].id}" class="box"> <div><h3>${info[i].title.rendered}</h3> ${info[i].excerpt.rendered} </div></a>`                        
    }
    for(let i = 2; i < info.length; i++) {
        if (i === 4) {
            break;
        }
        resultsContainer17.innerHTML += `<a href="Blogs.html?id=${info[i].id}" class="box"> <div><h3>${info[i].title.rendered}</h3> ${info[i].excerpt.rendered} </div></a>`                      
    }
    for(let i = 4; i < info.length; i++) {
        if (i === 6) {
            break;
        }
        resultsContainer18.innerHTML += `<a href="Blogs.html?id=${info[i].id}" class="box"> <div><h3>${info[i].title.rendered}</h3> ${info[i].excerpt.rendered} </div></a>`                      
    }
    for(let i = 6; i < info.length; i++) {
        if (i === 8) {
            break;
        }
        resultsContainer19.innerHTML += `<a href="Blogs.html?id=${info[i].id}" class="box"> <div><h3>${info[i].title.rendered}</h3> ${info[i].excerpt.rendered} </div></a>`                       
    }
    for(let i = 8; i < info.length; i++) {
        if (i === 10) {
            break;
        }
        resultsContainer20.innerHTML += `<a href="Blogs.html?id=${info[i].id}" class="box"> <div><h3>${info[i].title.rendered}</h3> ${info[i].excerpt.rendered} </div></a>`                       
    }
    for(let i = 10; i < info.length; i++) {
        if (i === 12) {
            break;
        }
        resultsContainer21.innerHTML += `<a href="Blogs.html?id=${info[i].id}" class="box"> <div><h3>${info[i].title.rendered}</h3> ${info[i].excerpt.rendered} </div></a>`                      
    }
    
    
    resultsContainer4.innerHTML += `<a href="Blogs.html?id=${info[0].id}" class="box"> <div><h3>${info[0].title.rendered}</h3> ${info[0].excerpt.rendered} </div></a>`
    resultsContainer5.innerHTML += `<a href="Blogs.html?id=${info[1].id}" class="box"> <div><h3>${info[1].title.rendered}</h3> ${info[1].excerpt.rendered} </div></a>`                       
    resultsContainer6.innerHTML += `<a href="Blogs.html?id=${info[2].id}" class="box"> <div><h3>${info[2].title.rendered}</h3> ${info[2].excerpt.rendered} </div></a>`
    resultsContainer7.innerHTML += `<a href="Blogs.html?id=${info[3].id}" class="box"> <div><h3>${info[3].title.rendered}</h3> ${info[3].excerpt.rendered} </div></a>`
    resultsContainer8.innerHTML += `<a href="Blogs.html?id=${info[4].id}" class="box"> <div><h3>${info[4].title.rendered}</h3> ${info[4].excerpt.rendered} </div></a>`
    resultsContainer9.innerHTML += `<a href="Blogs.html?id=${info[5].id}" class="box"> <div><h3>${info[5].title.rendered}</h3> ${info[5].excerpt.rendered} </div></a>`
    resultsContainer10.innerHTML += `<a href="Blogs.html?id=${info[6].id}" class="box"> <div><h3>${info[6].title.rendered}</h3> ${info[6].excerpt.rendered} </div></a>`
    resultsContainer11.innerHTML += `<a href="Blogs.html?id=${info[7].id}" class="box"> <div><h3>${info[7].title.rendered}</h3> ${info[7].excerpt.rendered} </div></a>`
    resultsContainer12.innerHTML += `<a href="Blogs.html?id=${info[8].id}" class="box"> <div><h3>${info[8].title.rendered}</h3> ${info[8].excerpt.rendered} </div></a>`
    resultsContainer13.innerHTML += `<a href="Blogs.html?id=${info[9].id}" class="box"> <div><h3>${info[9].title.rendered}</h3> ${info[9].excerpt.rendered} </div></a>`
    resultsContainer14.innerHTML += `<a href="Blogs.html?id=${info[10].id}" class="box"> <div><h3>${info[10].title.rendered}</h3> ${info[10].excerpt.rendered} </div></a>`
    resultsContainer15.innerHTML += `<a href="Blogs.html?id=${info[11].id}" class="box"> <div><h3>${info[11].title.rendered}</h3> ${info[11].excerpt.rendered} </div></a>`

};

getInfo();

var tab = 1
function goLeft() {
    if (tab <= 1) { return; }
    
    tab = tab - 1
    console.log(tab)
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "none";
    if (tab == 1) {
        box1.style.display = "block";
    }
    if (tab == 2) {
        box2.style.display = "block";
    }
    if (tab == 3) {
        box3.style.display = "block";
    }
};
function goRight() {
    if (tab >= 3) { return; }
    
    tab = tab + 1
    console.log(tab)
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "none";
    if (tab == 1) {
        box1.style.display = "block";
    }
    if (tab == 2) {
        box2.style.display = "block";
    }
    if (tab == 3) {
        box3.style.display = "block";
    }
};
var mediumtab = 1
function mediumLeft() {
    if (mediumtab <= 1) { return; }
    
    mediumtab = mediumtab - 1
    console.log(mediumtab)
    box16.style.display = "none";
    box17.style.display = "none";
    box18.style.display = "none";
    box19.style.display = "none";
    box20.style.display = "none";
    box21.style.display = "none";
    if (mediumtab == 1) {
        box16.style.display = "block";
    }
    if (mediumtab == 2) {
        box17.style.display = "block";
    }
    if (mediumtab == 3) {
        box18.style.display = "block";
    }
    if (mediumtab == 4) {
        box19.style.display = "block";
    }
    if (mediumtab == 5) {
        box20.style.display = "block";
    }
    if (mediumtab == 6) {
        box21.style.display = "block";
    }
};
function mediumRight() {   
    if (mediumtab >= 6) { return; }
    
    mediumtab = mediumtab + 1
    console.log(mediumtab)
    box16.style.display = "none";
    box17.style.display = "none";
    box18.style.display = "none";
    box19.style.display = "none";
    box20.style.display = "none";
    box21.style.display = "none";
    if (mediumtab == 1) {
        box16.style.display = "block";
    }
    if (mediumtab == 2) {
        box17.style.display = "block";
    }
    if (mediumtab == 3) {
        box18.style.display = "block";
    }
    if (mediumtab == 4) {
        box19.style.display = "block";
    }
    if (mediumtab == 5) {
        box20.style.display = "block";
    }
    if (mediumtab == 6) {
        box21.style.display = "block";
    }
};

var minitab = 1
function miniLeft() {
    if (minitab <= 1) { return; }
    
    minitab = minitab - 1
    console.log(minitab)
    box4.style.display = "none";
    box5.style.display = "none";
    box6.style.display = "none";
    box7.style.display = "none";
    box8.style.display = "none";
    box9.style.display = "none";
    box10.style.display = "none";
    box11.style.display = "none";
    box12.style.display = "none";
    box13.style.display = "none";
    box14.style.display = "none";
    box15.style.display = "none";
    if (minitab == 1) {
        box4.style.display = "block";
    }
    if (minitab == 2) {
        box5.style.display = "block";
    }
    if (minitab == 3) {
        box6.style.display = "block";
    }
    if (minitab == 4) {
        box7.style.display = "block";
    }
    if (minitab == 5) {
        box8.style.display = "block";
    }
    if (minitab == 6) {
        box9.style.display = "block";
    }
    if (minitab == 7) {
        box10.style.display = "block";
    }
    if (minitab == 8) {
        box11.style.display = "block";
    }
    if (minitab == 9) {
        box12.style.display = "block";
    }
    if (minitab == 10) {
        box13.style.display = "block";
    }
    if (minitab == 11) {
        box14.style.display = "block";
    }
    if (minitab == 12) {
        box15.style.display = "block";
    }
};
function miniRight() {
    if (minitab >= 12) { return; }
    
    minitab = minitab + 1
    console.log(minitab)
    box4.style.display = "none";
    box5.style.display = "none";
    box6.style.display = "none";
    box7.style.display = "none";
    box8.style.display = "none";
    box9.style.display = "none";
    box10.style.display = "none";
    box11.style.display = "none";
    box12.style.display = "none";
    box13.style.display = "none";
    box14.style.display = "none";
    box15.style.display = "none";
    if (minitab == 1) {
        box4.style.display = "block";
    }
    if (minitab == 2) {
        box5.style.display = "block";
    }
    if (minitab == 3) {
        box6.style.display = "block";
    }
    if (minitab == 4) {
        box7.style.display = "block";
    }
    if (minitab == 5) {
        box8.style.display = "block";
    }
    if (minitab == 6) {
        box9.style.display = "block";
    }
    if (minitab == 7) {
        box10.style.display = "block";
    }
    if (minitab == 8) {
        box11.style.display = "block";
    }
    if (minitab == 9) {
        box12.style.display = "block";
    }
    if (minitab == 10) {
        box13.style.display = "block";
    }
    if (minitab == 11) {
        box14.style.display = "block";
    }
    if (minitab == 12) {
        box15.style.display = "block";
    }
};


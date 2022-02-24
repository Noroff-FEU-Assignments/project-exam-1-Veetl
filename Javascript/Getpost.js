const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const Heading = document.querySelector(".heading")
const Post = document.querySelector(".post")
const url = `https://veetl.skadbergworks.com/wp/wp-json/wp/v2/posts/${id}`;


async function getPost() {

    const response =  await fetch(url, {method:'GET',
    });

    const object = await response.json();

    const info = object;
    Heading.innerHTML += `${info.title.rendered}`
    Post.innerHTML += `${info.content.rendered}`
    document.title = "Vetle's blog | " + `${info.title.rendered}`
    

    var img = document.querySelectorAll(".wp-block-image img")
    var modalImg = document.getElementById("img01");
    for(let i = 0; i < img.length; i++)
        img[i].onclick = function() {
        var modal = document.getElementById("modal")
        modal.style.display = "flex";
        modalImg.src = this.src;
        
        modal.onclick = function() { 
            modal.style.display = "none";
            modalImg.src = "";
        }
        modalImg.onclick = function(event) {
           event.stopPropagation();
        }

}
};
getPost();



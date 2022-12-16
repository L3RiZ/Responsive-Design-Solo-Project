const viewMoreBtn = document.getElementById("view-more");
const articleCnt = document.getElementById("article-container");
const newArticles = document.getElementById("test");
const images = ["images/blog-image-01.png", "images/blog-image-03.png", "images/blog-image-05.png"];
const articleNumber = ["four", "five", "six"]

viewMoreBtn.addEventListener("click", addMoreContent)

function generateArticles (){
    let text = "";
    for (let i = 0; i < images.length; i++) {
        text = `
            <article class="hidden" id="test">
                <img src="${images[i]}" alt="ARTICLE STOCK IMAGE" class="article-img">
                <p class="article-date">JULY 23, 2022</p>
                <h3>Blog ${articleNumber[i]}</h3>
                <p class="article-text">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </article>`
        articleCnt.innerHTML += text;
    } 
}

function addMoreContent () {
    newArticles.classList.toggle("hidden");
    changeButton()
}

function changeButton() {
    if (viewMoreBtn.innerHTML.includes("More")) {
        viewMoreBtn.innerHTML = "View Less";
    } else {
        viewMoreBtn.innerHTML = "View More";
    }
}

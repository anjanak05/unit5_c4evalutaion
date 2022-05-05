// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar()



// url ="https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}"




// document.querySelector("#search_input").addEventListener("click", searchNews)

import { searchNews, append, search1 } from "../scripts/fetch.js"


let search11 = (e) => {

    if (e.key === "Enter") {
        window.location.href="search.html"
        let value1 = document.getElementById("search_input").value;
  
        search1(value1).then((data) => {
            console.log(data)
            let container = document.getElementById("results");
            container.innerHTML = null;
            append(data.articles, container)
        })
    }
}

document.querySelector("#search_input").addEventListener("keydown", search11)


// let deafult = document.getElementById("results")
// append(data.articles, deafult)

let c = document.querySelector("#sidebar").children;
function countrySearch() {

    console.log(this.id)
    searchNews(this.id).then((data) => {


        console.log(data)

        let container = document.getElementById("results");
        container.innerHTML = null;
        append(data.articles, container)



    })
}

for (let y of c) {
    y.addEventListener("click", countrySearch);
}





let indiaDeafult = async () => {

    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)
        let data = await res.json();
        appendindia(data.articles);
        console.log(data.article)
    } catch (error) {
        console.log(error)
    }
}

indiaDeafult()


let appendindia = (data) => {
    data.forEach(({ title, description, urlToImage }) => {
        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("id", "newDiv")
        let imgDiv = document.createElement("div");
        let contDiv = document.createElement("div");

        let image = document.createElement("img")
        image.src = urlToImage;
        image.setAttribute("id", "image1")
        let title1 = document.createElement("p")
        title1.innerText = title;
        title1.style.fontWeight = "bold"
        let des = document.createElement("p")
        des.innerText = description;
        imgDiv.append(image);
        contDiv.append(title1, des);
        mainDiv.append(imgDiv, contDiv)

        document.querySelector("#results").append(mainDiv)
    })
}
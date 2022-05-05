let search1 = async (value1) => {
   
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value1} `)
        let data = await res.json();
        return data;

    } catch (error) {
        console.log(error)
    }
}

let searchNews = async (value) => {
   
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`)
        let data = await res.json();
        return data;

    } catch (error) {
        console.log(error)
    }
}


let append = (data, container) =>{
    data.forEach(({title, description, urlToImage}) =>{
      let mainDiv = document.createElement("div") ;
      mainDiv.setAttribute("id", "news")
      let imgDiv = document.createElement("div") ;
      let contDiv = document.createElement("div") ;

      let image = document.createElement("img")
      image.src = urlToImage;
      image.setAttribute("id", "image1")
      let title1 = document.createElement("p")
      title1.innerText = title;
      title1.style.fontWeight ="bold"
      let des = document.createElement("p") 
      des.innerText = description ;
      imgDiv.append(image);
      contDiv.append(title1, des);
      mainDiv.append(imgDiv, contDiv)

      container.append(mainDiv)
    })
}

export {searchNews, append, search1}
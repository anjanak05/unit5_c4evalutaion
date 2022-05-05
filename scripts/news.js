// Ude Import export (MANDATORY)
// import { navbar } from "../components/navbar.js";
// document.querySelector("#navbar").innerHTML = navbar()

// url ="https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}"



let searchNews = async () =>{
  
    try{
        let res = await fetch (`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)
    let data = await res.json();
    console.log(data)
    }catch(error){
    console.log(error)
    }
    }
    
    // document.querySelector("#search_input").addEventListener("click", searchNews)
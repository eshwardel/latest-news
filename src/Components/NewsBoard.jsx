import { useEffect, useState } from "react"
import NewsItems from "./NewsItems";

const NewsBoard = ({category}) => {
 
   const[article,setArticles]=useState([]); 

   useEffect(()=>{
    let url = `let url = `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=YOUR_API_KEY`;`;
    fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));  //fetch is used for to get data from server //API call → get response → convert to JSON → extract articles → store in state
   },[category])
  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {article?.map((news, index) => (
            return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>

        ))}
    </div>
  )
}

export default NewsBoard

import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import NavInshorts from './Components/NavInshorts/NavInshorts';
import NewsContent from './Components/NewsContent/NewsContent';
import apikey from './data/config';
import Footer from './Components/Footer/Footer';
  

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);


   const newsApi = async () => {
     try {
       
       const news = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`
      );
      //console.log('news articles==>', news.data.articles);
      //console.log('news totalResults==>', news.data.totalResults);
     setNewsArray(news.data.articles);
     setNewsResults(news.data.totalResults);
     } catch (error) {
       console.log(error);
     }
   };

  //console.log('newsArray', newsArray); 
  
   useEffect(() => {
     newsApi(); // eslint-disable-next-line
   }, [newsResults, category,loadmore]);


  
  return (
    <div className="App">
       <NavInshorts setCategory={setCategory}/>
       <NewsContent 
       setLoadmore={setLoadmore}
       loadmore={loadmore}
       newsArray={newsArray} 
       newsResults={newsResults}/>       
      <Footer/>
    </div>
  );
}

export default App;

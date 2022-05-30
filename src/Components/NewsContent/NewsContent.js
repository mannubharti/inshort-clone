import { Container } from '@mui/material'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './NewsContent.css'


const NewsContent = ({newsArray, newsResults, loadmore, setLoadmore }) => {
    //console.log('newsArray==>', newsArray.newsArray);
   // console.log('newsResults==>', newsArray.newsResults);
    return (
        <Container maxWidth="md">
            <div className="content">
                <div className="downloadMessage">
                    <span className="downloadText">For the best experience use inshorts app</span>
                    <img alt= "app store" height="80%" src="https://assets.inshorts.com/website_assets/images/appstore.png" />
                    <img alt= "app store" height="80%" src="https://assets.inshorts.com/website_assets/images/playstore.png" />
                </div>

                {
                    newsArray?.map((items, index) =>( 
                        <div key={index}>
                            <NewsCard newsItem={items}/>
                        </div>
                    ))}

                    {
                        loadmore<=newsResults && (
                            <>
                                <hr/>
                                <button className="loadMore" onClick={() => setLoadmore(loadmore + 20)} >Load More</button>
                            </>
                        )}              
            </div>
        </Container>
    )
}

export default NewsContent

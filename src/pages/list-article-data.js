import React, { Component } from "react";
// import axios from "axios";
import ListArticle from "../components/list-article"
// import {
//     useParams
//   } from "react-router-dom";

// const apiKey = "448feafa267b4bf4babf102fe746d08b"
// const baseUrl = "https://newsapi.org/v2/everything"
// const q = "academy"
// const urlHeadline = baseUrl + "?q=" + q + "&apiKey=" + apiKey;

class ListArticleData extends Component{
    render(){
        const {listListArticle, isLoading} = this.props;
        // console.log(listListArticle)
        const topHeadlines = listListArticle.filter(item => {
            if(item.content !== null && item.urlToImage !== null){
                return item;
            }
            return false;
        });
        const headlineNews = topHeadlines.map((item, key) => {
            return(
                <ListArticle
                    key = {key}
                    title = {item.title}
                    img = {item.urlToImage}
                    description = {item.description}
                    url = {item.url}
                    published = {item.publishedAt}
                />
            );
        });
        return(
            <div className="headlineNews">
                {isLoading ? <div style={{ textAlign: "center" }}>Loading...</div> : headlineNews}
            </div>
        );
    }
}
export default ListArticleData;
import React, { Component } from "react";
import axios from "axios";
import TopArticle from "../components/top-article"
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

const apiKey = "448feafa267b4bf4babf102fe746d08b"
const baseUrl = "https://newsapi.org/v2/top-headlines"
const country = "id"
const urlHeadline = baseUrl + "?country=" + country + "&apiKey=" + apiKey;

class TopArticleData extends Component{
    state = {
        listTopArticle: [],
        isLoading: true ,
        category: 'sport'
    };
    componentDidMount = () => {
        const self = this;
        axios
            .get(urlHeadline)
            .then(function(response){
                self.setState({listTopArticle: response.data.articles, isLoading: false});
            })
            .catch(function(error){
                self.setState({isLoading: false});
            });
    };
    render(){
        const {listTopArticle, isLoading} = this.state;
        const topHeadlines = listTopArticle.filter(item => {
            if(item.content !== null && item.urlToImage !== null){
                return item;
            }
            return false;
        });
        let indeks = 0;
        const headlineNews = topHeadlines.map((item, key) => {
            indeks = indeks+1;
            if (indeks <=5 ){
                return(
                    <TopArticle
                        key = {key}
                        title = {item.title}
                        url = {item.url}
                        indeks = {indeks}
                    />
                );
            }
            return null;
        });
        return(
            <div className="headlineNews">
                <div className="top-article">
                    <div className="top-article-header">
                        <a href="index.html" className="top-article-header-left">
                            BERITA TERKINI
                        </a>
                        <a href="index.html" className="top-article-header-right">
                            lihat semua
                        </a>
                    </div>
                    {isLoading ? <div style={{ textAlign: "center" }}>Loading...</div> : headlineNews}
                </div>
            </div>
        );
    }
}
export default TopArticleData;
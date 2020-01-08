import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import Header from '../components/header';
import ListArticleData from './list-article-data';
import TopArticleData from './top-article-data';
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

const baseUrl = "https://newsapi.org/v2/everything";
// const apiKey = "448feafa267b4bf4babf102fe746d08b";

class Home extends Component{
    // state = {
    //     listListArticle: [],
    //     isLoading: true ,
    //     q: 'academy'
    // };
    // handleInputChange = async event => {
    //     let value = event.target.value;
    //     await this.setState({ q: value });
    //     const self = this;
    //     if (value.length > 2) {
    //         try {
    //             const response = await axios.get(
    //                 baseUrl + "?q=" + value + "&apiKey=" + apiKey
    //             );
    //             self.setState({listListArticle: response.data.articles, isLoading: false});
    //             console.warn(response.data.articles, "haaaaaaaaaaaaaaaaa");
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    // };
    // categoryNews = async event => {
    //     const self = this;
    //     await axios
    //         .get(`${baseUrl}?q=${event}&apiKey=448feafa267b4bf4babf102fe746d08b`)
    //         .then(function(response){
    //             self.setState({listListArticle: response.data.articles, isLoading: false});
    //         })
    //         .catch(function(error){
    //             self.setState({isLoading: false});
    //         });
    // }
    axiosCategory = async() => {
        const category = this.props.match.params.q;
        const self = this;
        await axios
            .get(`${baseUrl}?q=${category}&apiKey=448feafa267b4bf4babf102fe746d08b`)
            .then(function(response){
                store.setState({listListArticle: response.data.articles, isLoading: false});
            })
            .catch(function(error){
                store.setState({isLoading: false});
            });
    }
    componentDidMount = async() => {
        await this.axiosCategory();
    };
    render(){
        return (
            <div>
                <Header {...this.props} doSearch={event => this.props.handleInputChange(event)} doCategory={(e) => this.props.categoryNews(e)}
                    placeholder="ketik sesuatu"/>
                <div className="container">
                    <div className="margin-atas">
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-4">
                                <TopArticleData/>
                            </div>
                            <div className="col-md-7">
                                <ListArticleData {...this.props} listListArticle = {this.props.listListArticle} isLoading={this.props.isLoading}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}
export default connect(
    "listListArticle, isLoading",
    actions
  )(withRouter(Home));
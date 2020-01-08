import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class ListArticle extends Component{
    render(){
        return (
            <div>
                <div className="list-article">
                    <div className="list-article-img">
                        <a href={this.props.url} target="_blank" rel="noopener noreferrer"><img src={this.props.img} alt=""/></a>
                    </div>
                    <div className="list-article-title">
                        <a href={this.props.url} target="_blank" rel="noopener noreferrer"><h3>
                            {this.props.title}
                        </h3></a>
                    </div>
                    <div className="list-article-description">
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                    <div className="list-article-publisher">
                        {this.props.published}
                    </div>
                    <div className="row action-list">
                        <div className="col-md-4 action">
                            <a href="index.html">
                                <i class="fa fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-md-4 action">
                            <a href="index.html">
                                <i class="fa fa-share-alt"></i>
                            </a>
                        </div>
                        <div className="col-md-4 action">
                            <a href="index.html">
                                <i class="fa fa-thumbs-down"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="list-article-space">

                </div>
            </div>   
        );
    }
}
export default ListArticle;
import React from "react";
import {Route, Switch} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Profile from "../pages/profile";
// import ListArticleData from "../pages/list-article-data";


const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/news" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/profile" component={Profile}/>
                {/* <Route exact path="/list-article" component={ListArticle}/> */}
                {/* <Route path="/news-category/:category" component={NewsCategory}/> */}
                <Route exact path="/news/:q" component={Home}/>
                {/* <Route exact
                    path="/:q"
                    location={this.props.location}
                    key={this.props.location.key}
                    render={(props) => (
                        <Home {...props} key={this.props.location.key} />
                )}/> */}
            </Switch>
        </BrowserRouter>
    )
}
export default MainRoute;
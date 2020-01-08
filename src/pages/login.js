import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import Header from '../components/header';
import axios from "axios";

class Login extends Component{
    state = { namaPengguna: "", kataKunci: "" };

    changeInput = e => {
        console.warn("cek event target", e.target.value);

        this.setState({ [e.target.name]: e.target.value });
    };

    postLogin = () => {
        const { namaPengguna, kataKunci } = this.state;
        const data = {
        username: namaPengguna,
        password: kataKunci
        };
        const self = this;
        axios
        .post("https://alta-challenge4.free.beeceptor.com/login", data)
        .then(function (response) {
            console.log(response.data);
            self.props.history.push("/profile");
            const ak = response.data.api_key
            if (response.data.api_key!=="") {
                localStorage.setItem("api_key", ak);
                localStorage.setItem("is_login", true);
                localStorage.setItem("full_name", response.data.full_name);
                localStorage.setItem("email", response.data.email);
                console.log("iajsniandijsandiasjkdniaj");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };
    render(){
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="margin-atas">
                        <div className="row">
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-4">
                                <form className="login-form" action="" onSubmit={e => e.preventDefault()}>
                                    <h2 className="text-center">Log in</h2>
                                    <div className="form-group">
                                        <label for="uname"><b>Username</b></label>
                                            <input className="form-control" type="text" placeholder="Enter Username" name="uname" onChange={e => this.changeInput(e)} required/>
                                    </div>
                                    <div className="form-group">
                                        <label for="psw"><b>Password</b></label>
                                            <input className="form-control" type="password" placeholder="Enter Password" name="psw" onChange={e => this.changeInput(e)} required/>
                                    </div>
                                    <div className="">
                                        <button className="btn btn-primary btn-block" type="submit" onClick={() => this.postLogin()}>Login</button>  
                                    </div>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}
export default Login;
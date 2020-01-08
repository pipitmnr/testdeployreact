import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import Header from '../components/header';
import { Redirect } from "react-router-dom";

const Profile = props => {
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    const email = localStorage.getItem("email");
    const full_name = localStorage.getItem("full_name");
    if (is_login === null) {
        return <Redirect to={{ pathname: "/login" }} />;
    }
    else{
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="margin-atas">
                    </div>
                    <div className="margin-atas">
                    </div>
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">
                            <h2 className="text-center">Profil</h2>
                            Email : {email}
                            <br></br>
                            Fullname : {full_name}
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}
export default Profile;
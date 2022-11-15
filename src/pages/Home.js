import React from 'react';
import { useRef, useState, useEffect } from 'react';

import "../App.css";

import logo from "../TrustBanc.svg"
import avatar from "../Avatar.svg"



const API_URL = '';


const HomeComponent = () => {


    return(
        <div className="home-container">
            <div className="side-bar">
              <img src={logo} alt="Logo" />
            </div>
            <div className="container">
                <div className="top-bar">
                    <button className="btn-transfer">MAKE A TRANSFER</button>
                    <div className="profile">
                        <div className="profile-info">
                            <span className="text-16 p-0"> <b>Abati Olawale</b> </span>
                            <span className="text-12 p-0">Click to view profile</span>
                        </div>
                        <img src={avatar} alt="avatar"/>
                    </div>
                </div>

                <div className="content">
                    <div className="content-left">
                        <div className="account-area"></div>
                        <div className="transaction-history"></div>
                    </div>
                    <div className="content-right">
                        <div className="frequent-beneficiares">

                        </div>
                        <div className="target-savings">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HomeComponent;
import React from 'react';
import { useRef, useState, useEffect } from 'react';

import "../App.css";

import logo from "../TrustBanc.svg"
import avatar from "../Avatar.svg"
import arrowRed from "../arrow-red.svg"
import arrowGreen from "../arrow-green.svg"



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
                        <div className="transaction-history">
                            <div className="transaction-history-actions">
                                <p className="history">Transaction history</p>
                                <p className="download">Downoad statement</p>
                            </div>
                            <div className="hr-10"></div>
                            <div className="transactions">

                                <div className="transaction">
                                    <div className="transaction-info">
                                        <img src={arrowRed} alt=">" />
                                        <div>
                                            <span className="text-14">E-CHANNELS</span> <br/>
                                            <span className="text-12 text-grey">0000015262626273663766262673663672.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>NGN -1,400.00</p>
                                    </div>
                                </div>

                                
                                <div className="transaction">
                                    <div className="transaction-info">
                                        <img src={arrowRed} alt=">" />
                                        <div>
                                            <span className="text-14">E-CHANNELS</span> <br/>
                                            <span className="text-12 text-grey">0000015262626273663766262673663672.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>NGN -1,400.00</p>
                                    </div>
                                </div>

                                <div className="transaction">
                                    <div className="transaction-info">
                                        <img src={arrowRed} alt=">" />
                                        <div>
                                            <span className="text-14">E-CHANNELS</span> <br/>
                                            <span className="text-12 text-grey">0000015262626273663766262673663672.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>NGN -1,400.00</p>
                                    </div>
                                </div>

                                <div className="transaction">
                                    <div className="transaction-info">
                                        <img src={arrowRed} alt=">" />
                                        <div>
                                            <span className="text-14">E-CHANNELS</span> <br/>
                                            <span className="text-12 text-grey">0000015262626273663766262673663672.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>NGN -1,400.00</p>
                                    </div>
                                </div>

                                <div className="transaction">
                                    <div className="transaction-info">
                                        <img src={arrowRed} alt=">" />
                                        <div>
                                            <span className="text-14">E-CHANNELS</span> <br/>
                                            <span className="text-12 text-grey">0000015262626273663766262673663672.</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>NGN -1,400.00</p>
                                    </div>
                                </div>



                            </div>
                        </div>

                
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
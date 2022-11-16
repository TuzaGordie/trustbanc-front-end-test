import React from 'react';
import { useRef, useState, useEffect } from 'react';

import "../App.css";

import logo from "../TrustBanc.svg"
import avatar from "../Avatar.svg"
import arrowRed from "../arrow-red.svg"
import arrowGreen from "../arrow-green.svg"

import vector from "../Vector.svg"
import vector1 from "../Vector1.svg"
import vector2 from "../Vector2.svg"
import vector3 from "../Vector3.svg"
import vector4 from "../Vector4.svg"
import vector5 from "../Vector8.svg"
import vector6 from "../Vector6.svg"
import vector7 from "../Vector9.svg"
import leftArrow from "../arrow-left.svg"
import rightArrow from "../arrow-right.svg"


const API_URL = '';


const HomeComponent = () => {


    return(
        <div className="home-container">
            <div className="side-bar">
              <img src={logo} alt="Logo" />

              <div className="list-items">

                <div className="list-item">
                    <div className="icon-box icon-box-active">
                        <img src={vector} className="icon" alt="Home"/>
                    </div>
                    <p className="active">Home</p>
                </div>

                <div className="list-item">
                    <div className="icon-box">
                        <img src={vector1} className="icon" alt="Transfers"/>
                    </div>
                    <p className="link">Transfers</p>
                </div>

                <div className="list-item">
                    <div className="icon-box">
                        <img src={vector2} className="icon" alt="Taret savings"/>
                    </div>
                    <p className="link">Taret savings</p>
                </div>

                <div className="list-item">
                    <div className="icon-box">
                        <img src={vector3} className="icon" alt="Airtime and Bills"/>
                    </div>
                    <p className="link">Airtime and Bills</p>
                </div>

                <div className="list-item">
                    <div className="icon-box">
                        <img src={vector4} className="icon" alt="Cards"/>
                    </div>
                    <p className="link">Cards</p>
                </div>

                <div className="list-item">
                    <div className="icon-box">
                        <img src={vector5} className="icon" alt="Loans"/>
                    </div>
                    <p className="link">Loans</p>
                </div>

                <div className="list-item">
                    <div className="icon-box">

                        <img src={vector6} className="icon" alt="Settings"/>
                    </div>
                    <p className="link">Settings</p>
                </div>
              </div>

              <div className="sign-out">
                <img src={vector7} className="icon" alt="log out"/>
                <p className="sign-out-text">Logout</p>
              </div>

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

                        <div className="account-area">
                            <p className="account-area-header">My Account(s)</p>
                            <div className="hr-10"></div>

                            <div className="account-details-container">
                                <div>
                                    <img src={leftArrow} alt="<" />
                                </div>
                                <div className="account-details">
                                    <div>
                                        <p className="font-bold-m">Saving Account</p>
                                        <p>0061789943</p>
                                    </div>
                                    <div className="account-details-right">
                                        <p className="font-bold-m">Available Balance</p>
                                        <p className="text-26 font-bold">$ 400,000.56</p>
                                        <p>Book balance: $ 400,000.56</p>
                                    </div>
                                </div>
                                <div>
                                    <img  src={rightArrow} alt=">"/>
                                </div>
                            </div>
                        </div>

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
                            <p className="frequent-beneficiares-header">
                                Frequent beneficiaries
                            </p>
                            <div className="hr-10"></div>
                            <div>
                                <p className="mt-30">
                                    Click on a beneficiary to make a quick 
                                    transfer
                                </p>
                            </div>

                            <div className="mt-30">
                                <div className="transaction-container">
                                    <div className="avatar">
                                        <p>AO</p>
                                    </div>
                                    <div>
                                        <p className="text-primary font-bold">Aminat Oladunni</p>
                                        <p className="text-grey font-bold">Access Bank - 0021349812</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="mt-10">
                                <div className="transaction-container">
                                    <div className="avatar">
                                        <p>AO</p>
                                    </div>
                                    <div>
                                        <p className="text-primary font-bold">Aminat Oladunni</p>
                                        <p className="text-grey font-bold">Access Bank - 0021349812</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <div className="transaction-container">
                                    <div className="avatar">
                                        <p>AO</p>
                                    </div>
                                    <div>
                                        <p className="text-primary font-bold">Aminat Oladunni</p>
                                        <p className="text-grey font-bold">Access Bank - 0021349812</p>
                                    </div>
                                </div>
                            </div>

                            <p className="all-beneficiares">See all beneficiares</p>


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
import React, { useState, useEffect } from 'react';
import BGImage from '../img/mars.jpg';
import '../App.css';


const Home = () =>{
    return(
        <div className="home-div">
            <img src="https://mars.nasa.gov/images/mep/allaboutmars/quickfacts/Mars_QuickFacts_sample7_recolored.png" alt="mars fact"></img>
        {/* <div>
            <table>
                <tr>
                    <th></th>
                    <th>Earth</th>
                    <th>Mars</th>
                </tr>
            </table>
            </div> */}
        </div>
    )

}

export default Home;  
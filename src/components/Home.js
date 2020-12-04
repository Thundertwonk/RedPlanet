import React, { useState, useEffect } from 'react';
import BGImage from '../img/mars.jpg';
import '../App.css';
import { Grid, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles({
    
})

const Home = () =>{
    const classes = useStyles();
    return(
        <div className={classes}>
        <img src="https://mars.nasa.gov/images/mep/allaboutmars/quickfacts/Mars_QuickFacts_sample7_recolored.png" alt="Girl in a jacket"></img>
        </div>
    )

}

export default Home;    
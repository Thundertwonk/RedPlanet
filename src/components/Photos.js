import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

const useStyles = makeStyles({
	card: {
		width: '18rem'
	},
	titleHead: {
		borderBottom: '1px solid #1e8678',
		fontWeight: 'bold'
	},
	grid: {
		flexGrow: 1,
        flexDirection: 'row',
        margin: '0 auto'
	},
	media: {
		height: '100%',
		width: '100%'
	},
	button: {
		color: '#1e8678',
		fontWeight: 'bold',
		fontSize: 12
    },
    cardBody: {
        padding: '1.3rem'
    }
});

const Photos = () => {
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
    const api_key = 'bdNZFAvR7v96DkPiIXtGjeW6uvR3SuodX3tZsD3p';

    const classes = useStyles();
    const [ loading, setLoading ] = useState(true);
    const [ photos, setPhotos ] = useState(null);

    let card = null;

    useEffect(() => {
		async function fetchData() {
			try {
				const data = await axios.get(`${url}&api_key=${api_key}`);
                setLoading(false);
                setPhotos(data);
			} catch (e) {
                setLoading(false);
				console.log(e);
			}
        }
        fetchData()
    }, []);

    const buildCard = (photo) => {
		return (
			<Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={photo.id}>
                <Card className={classes.card}>
                    <Link to={`/characters/${photo.id}`}>
                        <div className="img-container">
                            <Card.Img variant="top" src={photo.img_src} alt={`${photo.rover.name}`}/>
                        </div>
                        
                        <Card.Body className={classes.cardBody}>
                            <Card.Title>{photo.earth_date}</Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
			</Grid>
		);
    };

    if(photos){
        card = photos.data.photos.map((photo) => {
            return buildCard(photo);
        })
    }


    if (loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    } else {
        return (
            <div>
                <p>
                    This is a simple example of using React to Query the Marvel API.
                </p>
                {card}
            </div>
        );
    }
};

export default Photos;

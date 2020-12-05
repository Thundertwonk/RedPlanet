import React, { useState, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
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
    },
    loading: {
        margin: '0 auto'
    }
});

const Photos = () => {
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=179';
    const api_key = 'bdNZFAvR7v96DkPiIXtGjeW6uvR3SuodX3tZsD3p';

    const classes = useStyles();
    const [ loading, setLoading ] = useState(true);
    const [ photos, setPhotos ] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let card = null;

    useEffect(() => {
		console.log('on load useeffect');

		async function fetchData() {
			try {
                const data = await axios.get(`${url}&api_key=${api_key}`);
                console.log(data)
                setLoading(false);
                setPhotos(data);
			} catch (e) {
                setLoading(false);
				console.log(e);
			}
        }

        fetchData();
    }, []);

    const buildCard = (photo) => {
		return (
            <div className="gallery-container h-2" key={photo.id}>
                <div className="gallery-item">
                    <div className="image" variant="primary" onClick={handleShow}>
                        <img src={photo.img_src} alt={photo.earth_date}/>
                    </div>
                </div>

                {/* <Modal show={show} onHide={handleClose} style={{opacity:1}}>
                    <Modal.Header closeButton>
                        <Modal.Title>{photo.rover.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img src={photo.img_Src} />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>        */}
            </div>
		);
    };

    if (photos) {
        card = photos.data.photos.map((photo) => {
            return buildCard(photo);
        });
    }
    

    if (loading) {
        return (
            <div class="loader-container">
                <div class="loader"></div>
            </div>
        )
    } else {
        return (
            // <Grid container className={classes.grid} spacing={5}>
            //     {card}
            // </Grid>

            // <div class="gallery_container-all">
            //     {card}
            // </div>
            <div className="gallery-div">
                <div id="gallery">
                    <div className="gallery-wrapper">
                        {card}
                    </div>
                </div>         
            </div>
            
                
            
        );
    }
};

export default Photos;

import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

const News = () => {
	const url = 'https://api.nasa.gov/planetary/apod';
	const api_key = 'bdNZFAvR7v96DkPiIXtGjeW6uvR3SuodX3tZsD3p';
	
    const [ loading, setLoading ] = useState(true);
    const [ photos, setPhotos ] = useState(null);

    let card = null;

    useEffect(() => {
		console.log('on load useeffect');

		async function fetchData() {
			try {
                const data = await axios.get(`${url}?api_key=${api_key}&hd=True`);
                console.log('url', `${url}?api_key=${api_key}&hd=True`);
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

	if (photos) {
		console.log('photos', photos)
		card = 
			<div className="posts__item posts__item--main">
				<div className="posts__image">
					<img src={`${photos.data.hdurl}?auto=compress&cs=tinysrgb&h=350`} alt="Post image" />
				</div>

				<div className="posts__information">
					<div className="posts__date">
						{photos.data.date}
					</div>

					<div className="posts__title">
						<a href="#">Astronomy Picture Of The Day: {photos.data.title}</a>
					</div>
				</div>
			</div>
	}

	
	if (loading) {
		return (
			<div class="loader-container">
                <div class="loader">
					{/* <img src="../src/img/loading.gif" /> */}
				</div>
            </div>
		)
	}
	else {
		return (
			<div className="gallery-div">
				<div className="container">
					<div className="posts">
						
						{card}
						
						<div className="posts__item">
							<div className="posts__image">
								<img src="https://mars.nasa.gov/system/news_items/main_images/8801_1---M2020-EDL-Mic-Annotation-16.jpg&auto=format&fit=crop&w=500&q=60" alt="NASA's Perseverance" />
							</div>
		
							<div className="posts__information">
								<div className="posts__date">
									November 18, 2020
								</div>
		
								<div className="posts__title">
									<a href="https://mars.nasa.gov/news/8801/hear-audio-from-nasas-perseverance-as-it-travels-through-deep-space/" target="_self">Hear Audio From NASA's Perseverance As It Travels Through Deep Space</a>
								</div>
		
								<div className="posts__author">
									<a href="#">
										<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Author" />
									</a>
								</div>
							</div>
						</div>
						
						<div className="posts__item">
							<div className="posts__image">
								<img src="https://mars.nasa.gov/system/news_items/main_images/8798_PIA22109.jpg&auto=format&fit=crop&w=500&q=60" alt="Post image" />
							</div>
		
							<div className="posts__information">
								<div className="posts__date">
									November 13, 2020
								</div>
		
								<div className="posts__title">
									<a href="https://mars.nasa.gov/news/8798/mars-is-getting-a-new-robotic-meteorologist/" target="_self">Mars Is Getting a New Robotic Meteorologist</a>
								</div>
		
								<div className="posts__author">
									<a href="#">
										<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Author" />
									</a>
								</div>
							</div>
						</div>
						
						<div className="posts__item">
							<div className="posts__image">
								<img src="https://mars.nasa.gov/system/resources/detail_files/25389_maven_illo_v7-1000.jpg&auto=format&fit=crop&w=500&q=60" alt="Post image" />
							</div>
		
							<div className="posts__information">
								<div className="posts__date">
								November 12, 2020
								</div>
		
								<div className="posts__title">
									<a href="https://mars.nasa.gov/news/8797/heat-and-dust-help-launch-martian-water-into-space-scientists-find/" target="_self">Heat and Dust Help Launch Martian Water Into Space, Scientists Find </a>
								</div>
		
								<div className="posts__author">
									<a href="#">
										<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Author" />
									</a>
								</div>
							</div>
						</div>
						
						<div className="posts__item">
							<div className="posts__image">
								<img src="https://mars.nasa.gov/system/news_items/list_view_images/8792_parachute-320x240.jpg&auto=format&fit=crop&w=500&q=60" alt="Post image" />
							</div>
		
							<div className="posts__information">
								<div className="posts__date">
									November 10, 2020
								</div>
		
								<div className="posts__title">
									<a href="https://mars.nasa.gov/news/8792/nasas-perseverance-rover-100-days-out/" target="_self">NASA's Perseverance Rover 100 Days Out</a>
								</div>
		
								<div className="posts__author">
									<a href="#">
										<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Author" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
	

export default News;
import React, { useState, useEffect } from 'react';
// Helpers
import { formatDate } from './helpers';
// API
import { API_URL } from './api';
// Components
import WeatherData from './components/WeatherData';
import Info from './components/Info';
import Unit from './components/Unit';
import Previous from './components/Previous';
// Img
import BGImage from './img/mars.jpg';
// Styles
import {
  AppWrapper,
  GlobalStyle,
  MarsWeather,
  InfoWrapper,
} from './App.styles';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [selectedSol, setSelectedSol] = useState();
  const [metric, setMetric] = useState(true);
  const [previous, setPrevious] = useState(false);
  console.log(weather);

  useEffect(() => {
    const fetchFromAPI = async () => {
      const weather = await (await fetch(API_URL)).json();
      const marsWeather = weather.sol_keys.map((solKey) => {
        return {
          sol: solKey,
          maxTemp: weather[solKey].AT?.mx || 'No data',
          minTemp: weather[solKey].AT?.mn || 'No data',
          windSpeed: Math.round(weather[solKey].HWS?.av || 0),
          windDirectionDegrees:
            weather[solKey].WD?.most_common?.compass_degrees || 0,
          date: formatDate(new Date(weather[solKey].First_UTC)),
        };
      });
      setWeather(marsWeather);
      setSelectedSol(marsWeather.length - 1);
      setLoading(false);
    };

    fetchFromAPI();
  }, []);

  return (
    <>
      {/* <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Navbar> */}

      <GlobalStyle bgImage={BGImage} />
      
      <AppWrapper>
        <MarsWeather>
          {loading ? (
            <div>Loading ...</div>
          ) : (
            <>
              <h1 className='main-title'>
                Latest weather at Elysium Plantitia
              </h1>
              <WeatherData sol={weather[selectedSol]} isMetric={metric} />
              <InfoWrapper>
                <Info />
                <Unit metric={metric} setMetric={setMetric} />
              </InfoWrapper>
            </>
          )}
        </MarsWeather>
        <Previous
          weather={weather}
          previous={previous}
          setPrevious={setPrevious}
          setSelectedSol={setSelectedSol}
          isMetric={metric}
        />
      </AppWrapper>
    </>
  );
};

export default App;

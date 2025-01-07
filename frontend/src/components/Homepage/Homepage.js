import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarComponent from '../NavbarComponent';
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";

const Homepage = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data from the server.');
            });
    }, []);

    return (
       <div>
           <NavbarComponent />
           <HeroSection />
           <FeaturesSection />
       </div>
    );
};

export default Homepage;

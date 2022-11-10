import React from 'react';
import Banner from '../../Banner/Banner';
import { useTitle } from "../../Hooks/UseTitle";
import Section from '../../Sections/Section';
import Services from '../Services/Services';
	


const Home = () => {
     useTitle("Home");
    return (
        <div>
        <Banner></Banner>
        <Section></Section>
        <Services></Services>
        </div>
    );
};

export default Home;
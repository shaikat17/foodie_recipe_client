import React from 'react';
import Banner from '../components/Banner';
import Footer from './Footer';
import ChefsContainer from '../components/ChefsContainer';

const Home = () => {
    return (
        <div>
            <Banner />
            <ChefsContainer />
            <Footer />
        </div>
    );
};

export default Home;
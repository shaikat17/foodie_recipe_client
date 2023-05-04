
import Banner from '../components/Banner';
import ChefsContainer from '../components/ChefsContainer';
import ReviewsSection from '../components/Review';
import SpecialFeaturs from '../components/SpecialFeaturs';

const Home = () => {
    return (
        <div>
            <Banner />
            
            <ChefsContainer />
            <SpecialFeaturs />
            <ReviewsSection />
        </div>
    );
};

export default Home;
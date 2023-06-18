
import Banner from '../components/Banner';
import ChefsContainer from '../components/ChefsContainer';
import CookTogether from '../components/CookTogether';
import OurStory from '../components/OurStory';
import ReviewsSection from '../components/Review';
import SpecialFeaturs from '../components/SpecialFeaturs';

const Home = () => {
    return (
        <div>
            <Banner />
            
            <ChefsContainer />
            <SpecialFeaturs />
            <OurStory />
            <ReviewsSection />
            <CookTogether />
        </div>
    );
};

export default Home;
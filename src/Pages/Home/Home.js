import Footer from '../../Components/Footer';
import HomeArticle from './HomeArticles';
import MainBackground from './MainBackground.jpg';

function Home() {
    return(
        <div>
            <img src={MainBackground} alt="Main background" style={{width: '100%'}}/>
            <HomeArticle />
            <Footer />
        </div>
    );
}

export default Home;
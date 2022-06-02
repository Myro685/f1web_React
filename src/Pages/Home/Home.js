import Footer from '../../Components/Footer';
import Form from '../../Components/Form';
import HomeArticle from './HomeArticles';
import MainBackground from './MainBackground.jpg';

function Home() {
    return(
        <div>
            <img src={MainBackground} alt="Main background" style={{width: '100%'}}/>
            <HomeArticle />
            <Footer />
            <Form />
        </div>
    );
}

export default Home;
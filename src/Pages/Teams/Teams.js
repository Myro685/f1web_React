import TeamsArticles from "./TeamsArticles";
import Trailer from './trailer.mp4'
import Footer from '../../Components/Footer';

function Teams() {
    return(
        <div className="teams" style={{display:'flex', alignItems: 'center', flexDirection: 'column'}}>
            <video id="trailer" src={Trailer} autoPlay loop muted style={{
                width:"100%", 
            }}></video>
            <TeamsArticles />
            <Footer />
        </div>
    );
}

export default Teams;

window.onscroll = () => {
    let video = document.getElementById('trailer');
    let videoHeight = video.style.height;
    let videoOffset = video.getBoundingClientRect();
    let bottom = videoOffset.bottom;
    if(bottom < videoHeight)
        video.pause();
    else
        video.play();
}
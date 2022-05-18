import './styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <footer>
            <div className="icons">
                <a href="https://www.facebook.com/miroslav.grund685/">
                    <svg id='facebook' className='icons-svg' fill="#a8a8a8" viewBox="0 0 50 50" width="50px" height="50px">    
                        <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/>
                    </svg>
                </a>
                <svg height="60" width="60" className='line'>
                    <line x1="45" y1="0" x2="15" y2="60" stroke='#a8a8a8' />
                </svg>
                <a href="https://www.linkedin.com/in/miroslav-grund-499669233/">
                    <svg id='linkedin' className='icons-svg' fill="#a8a8a8" viewBox="0 0 50 50" width="50px" height="50px">
                        <path d="M25,2C12.3,2,2,12.3,2,25s10.3,23,23,23s23-10.3,23-23S37.7,2,25,2z M19,35c0,0.5-0.5,1-1,1h-4c-0.5,0-1-0.5-1-1V20 c0-0.5,0.5-1,1-1h4c0.5,0,1,0.5,1,1V35z M16,18c-1.6,0-3-1.4-3-3s1.4-3,3-3s3,1.4,3,3S17.6,18,16,18z M38,35c0,0.5-0.5,1-1,1h-4 c-0.5,0-1-0.5-1-1v-7.5c0-1.4-1.1-2.5-2.5-2.5S27,26.1,27,27.5V35c0,0.5-0.5,1-1,1h-4c-0.5,0-1-0.5-1-1V20c0-0.5,0.5-1,1-1h4 c0.5,0,1,0.4,1,1c1.1-0.6,2.2-1,3.5-1c4.1,0,7.5,3.4,7.5,7.5V35z"/>
                    </svg>
                </a>
                <svg height="60" width="60" className='line'>
                    <line x1="45" y1="0" x2="15" y2="60" stroke='#a8a8a8' />
                </svg>
                <a href="https://www.instagram.com/m.yr.o/">
                    <svg id='instagram' className='icons-svg' fill="#a8a8a8" viewBox="0 0 50 50" width="50px" height="50px">
                        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
                    </svg>
                </a>
                <svg height="60" width="60" className='line'>
                    <line x1="45" y1="0" x2="15" y2="60" stroke='#a8a8a8' />
                </svg>
                <a href="https://github.com/Myro685">
                    <svg id='git' className='icons-svg' fill="#a8a8a8" viewBox="0 0 50 50" width="50px" height="50px">
                        <path d="M 25 4 C 25.566406 4 26.097656 4.21875 26.496094 4.621094 L 45.378906 23.503906 C 46.207031 24.328125 46.207031 25.671875 45.378906 26.496094 L 26.496094 45.378906 C 26.097656 45.78125 25.566406 46 25 46 C 24.433594 46 23.902344 45.78125 23.503906 45.378906 L 4.621094 26.496094 C 3.792969 25.671875 3.792969 24.328125 4.621094 23.503906 L 16.941406 11.183594 L 19.214844 13.457031 C 18.667969 15.488281 19.21875 17.703125 20.757813 19.242188 C 21.125 19.609375 21.542969 19.925781 22 20.1875 L 22 29.816406 C 20.179688 30.867188 19 32.824219 19 35 C 19 38.308594 21.691406 41 25 41 C 28.308594 41 31 38.308594 31 35 C 31 32.824219 29.820313 30.867188 28 29.816406 L 28 22.242188 L 29.214844 23.457031 C 28.667969 25.488281 29.21875 27.703125 30.757813 29.242188 C 31.890625 30.375 33.398438 31 35 31 C 36.601563 31 38.109375 30.375 39.242188 29.242188 C 41.582031 26.902344 41.582031 23.097656 39.242188 20.757813 C 38.113281 19.628906 36.617188 19.007813 35.019531 19.007813 C 34.492188 19.007813 33.964844 19.078125 33.457031 19.214844 L 30.785156 16.542969 C 31.332031 14.511719 30.78125 12.296875 29.242188 10.757813 C 28.113281 9.628906 26.617188 9.007813 25.019531 9.007813 C 24.492188 9.007813 23.964844 9.078125 23.457031 9.214844 L 21.183594 6.941406 L 23.503906 4.621094 C 23.902344 4.21875 24.433594 4 25 4 M 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 23.605469 11.195313 24.3125 11.007813 25.019531 11.007813 C 26.035156 11.007813 27.050781 11.394531 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 33.605469 21.195313 34.3125 21.007813 35.019531 21.007813 C 36.035156 21.007813 37.050781 21.394531 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 37.046875 28.609375 36.023438 29 35 29 C 33.976563 29 32.953125 28.609375 32.171875 27.828125 C 30.855469 26.511719 30.664063 24.511719 31.566406 22.976563 L 27.023438 18.433594 C 26.699219 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.792969 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 Z" />
                    </svg>
                </a>
            </div>
            <div className="footer-text">
                <div className='footer-links'>
                    <Link to="/">Home</Link>
                    <Link to="/teams">Teams</Link>
                    <Link to="/galery">Galery</Link>
                    <Link to="/me">Me</Link>
                </div>
                <div className='footer-little-text-one'>F1</div>
                <div className='footer-little-text-two'>Contact Me</div>
            </div>
        </footer>
    );
}   

export default Footer;
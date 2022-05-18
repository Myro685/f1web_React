import AbuDhabi from './Photos/abu-dhabi-last-round.jpg';
import Beautiful from './Photos/beautiful.jpg';
import Jumping from './Photos/jumping.jpg';
import MyBoy from './Photos/my-boy.jpg';
import NewFormula from './Photos/new-formula.jpg';
import './Galery.css'

function Photos() {
    const photosObject = {
        1:{
            id: 1,
            img: AbuDhabi,
            text: 'Kontroverzní poslední kolo v Abu Dhabi'
        },
        2:{
            id: 2,
            img: NewFormula,
            text: 'Nový design formule pro rok 2022'
        },
        3:{
            id: 3,
            img: Beautiful,
            text: 'Nejvíce sexy věc na trati'
        },
        4:{
            id: 4,
            img: Jumping,
            text: 'Skákající traktor'
        },
        5:{
            id: 5,
            img: MyBoy,
            text: 'Majitel našich srdcí <3'
        },
    }
    return Object.keys(photosObject).map((obj, i) => {
        return(
            <div className='galery-photos' key={photosObject[obj].id}>
                <img className='galery-img' src={photosObject[obj].img} alt={photosObject[obj].text} /> 
                <h1 className='galery-h1'>{photosObject[obj].text}</h1>
            </div>
        );
    });
}

export default Photos;
import AlfaRomeo from './Photos/alfaromeo.png';
import AlphaTauri from './Photos/alphatauri.png';
import Alpine from './Photos/alpine.png';
import AstonMartin from './Photos/astonmartin.png';
import Ferrari from './Photos/ferrari.png';
import Haas from './Photos/haas.png';
import McLaren from './Photos/mclaren.png';
import Mercedes from './Photos/mercedes.png';
import RedBull from './Photos/redbull.png';
import Williams from './Photos/williams.png';
import './Teams.css';

function TeamsArticles() {

    const TeamObjects ={
        1: {
            id: 1,
            team: 'Ferrari',
            driverOne: 'Carlos Sainz',
            driverTwo: 'Charles Leclerc',
            car: Ferrari
        },
        2: {
            id: 2,
            team: 'Red Bull Racing',
            driverOne: 'Max Verstappen',
            driverTwo: 'Sergio Perez',
            car: RedBull
        },
        3: {
            id: 3,
            team: 'Mercedes',
            driverOne: 'Lewis Hamilton',
            driverTwo: 'George Russell',
            car: Mercedes
        },
        4: {
            id: 4,
            team: 'McLaren',
            driverOne: 'Lando Norris',
            driverTwo: 'Daniel Ricciardo',
            car: McLaren
        },
        5: {
            id: 5,
            team: 'Alfa Romeo',
            driverOne: 'Zhou Guanyu',
            driverTwo: 'Valtteri Bottas',
            car: AlfaRomeo
        },
        6: {
            id: 6,
            team: 'Alpine',
            driverOne: 'Fernando Alonso',
            driverTwo: 'Esteban Ocon',
            car: Alpine
        },
        7: {
            id: 7,
            team: 'AlphaTauri',
            driverOne: 'Yuki Tsunoda',
            driverTwo: 'Pierre Gasly',
            car: AlphaTauri
        },
        8: {
            id: 8,
            team: 'Haas F1 Team',
            driverOne: 'Mick Schumacher',
            driverTwo: 'Kevin Magnussen',
            car: Haas
        },
        9: {
            id: 9,
            team: 'Aston Martin',
            driverOne: 'Sebastian Vettel',
            driverTwo: 'Lance Stroll',
            car: AstonMartin
        },
        10: {
            id: 10,
            team: 'Williams',
            driverOne: 'Alexander Albon',
            driverTwo: 'Nicolas Latifi',
            car: Williams
        }
    }

    return Object.keys(TeamObjects).map((obj, i) => {
        let classTeams = "team team" + i ;
        return(
            <div className={classTeams} key={TeamObjects[obj].id}>
                <h1 className='teamName'>{TeamObjects[obj].team}</h1>            
                <h2 className="driver driver1">{TeamObjects[obj].driverOne}</h2>
                <h2 className="driver driver2">{TeamObjects[obj].driverTwo}</h2>
                <img className='teamsImg' src={TeamObjects[obj].car} alt={TeamObjects[obj].team} /> 
            </div>
        );
    });
}

export default TeamsArticles;

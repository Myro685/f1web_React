import './HomeArticles.css';
import MichaelSchumacher from './MichaelSchumacher.jpg';
import OldFormulas from './Oldformulas.jpg';
import MaxVerstappen from './MaxVerstappen.jpg';

function HomeArticle() {
    return(
        <main>
            <article>
                <img className='articleImages' src={OldFormulas} alt="Obrazek" />
                <h1 className='articleh1'>Co to je F1?</h1>
                <div className='text'>
                    Formule 1 (zkráceně F1), je série závodů formulí, založena v roce 1950, kdy nahradila Grand Prix automobilů. Je označována za královskou disciplínu automobilového sportu pro takzvané monoposty. Spadá pod Mezinárodní automobilovou federaci (FIA), která je nejvyšší organizační složkou. Mistrovství světa F1 sestává ze série závodů, které jsou označovány jako Grand Prix (Velká cena). Soutěží se na uzavřených autodromech či tratích a městských okruzích různých tvarů a délek. Vozy jsou jednomístné, k tomuto účelu speciálně vyrobené, a jejich technické parametry se mění vzhledem k pravidlům, která se každoročně upravují. Od roku 1950 se pořádá Mistrovství světa jezdců a od roku 1958 pohár konstruktérů.
                </div>
            </article>  
            <article>
                <img className='articleImages' src={MichaelSchumacher} alt="Michael Schumacher" />
                <h1 className='articleh1'>Michael Schuamcher</h1>
                <div className='text'>
                    Michael Schumacher (* 3. ledna 1969 Hürth-Hermühlheim) je bývalý německý automobilový závodník, sedminásobný mistr světa formule 1 a statisticky nejúspěšnější závodník v historii tohoto sportu. Drží mnoho rekordů ve formuli 1, získal společně s Lewisem Hamiltonem nejvíce mistrovských titulů. V sezoně 2002 se stal jediným jezdcem v historii, který se umístil ve všech závodech sezony na stupních vítězů.
                    <br />
                    Po začátcích na motokárách vyhrál německé šampionáty Formule König a Formule 3, poté závodil za Mercedes v Mistrovství světa sportovních vozů. V Grand Prix Belgie 1991 debutoval ve formuli 1 s týmem Jordan, pak přestoupil do stáje Benetton, kde se v letech 1994 a 1995 stal mistrem světa, roku 1996 odešel do týmu Ferrari, se kterým v letech 2000–2004 vyhrál pětkrát titul mistra světa. Kariéru ukončil roku 2006 ve Scuderii Ferrari, kde do roku 2009 působil jako poradce. V prosinci 2009 podepsal tříletou smlouvu s německou stájí Mercedes Grand Prix. 10. října 2012 na tiskové konferenci oznámil, že definitivně ukončuje kariéru.
                </div> 
            </article>               
            <article>
                <img className='articleImages' src={MaxVerstappen} alt="Obrazek" />
                <h1 className='articleh1'>Mistr světa 2021</h1>
                <div className='text'>
                    Max Emilian Verstappen ( * 30. září 1997 Hasselt)[1] je belgicko-nizozemský automobilový závodník a mistr světa ve Formuli 1 v sezóně 2021, který pod nizozemskou vlajkou závodí ve formuli 1 za tým Red Bull Racing. Stal se nejmladším pilotem F1 v historii, když debutoval během Grand Prix Austrálie 2015 ve věku 17 let a 166 dnů. Je synem bývalého jezdce F1 Jose Verstappena.
                    <br />
                    
                </div>
            </article>
        </main>
    );
}

export default HomeArticle;
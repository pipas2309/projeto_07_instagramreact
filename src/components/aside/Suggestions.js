//IMPORTS
import Suggestion from './Suggestion';

//EXPORT
export default function Suggestions(props) {
    //Sugestões array
    const sugestoes = [
        {name: "Cornélio Fudge", 
        username: "MinistroMagia", 
        img: "./assets/img/ministro da magia.jpg", 
        link: "https://www.instagram.com/", 
        reason: "Segue você"},
        {name: "Greg Bruxxx", 
        username: "Gregory", 
        img: "./assets/img/gregory.jpg", 
        link: "https://www.instagram.com/", 
        reason: "Seguido(a) por DracoM"},
        {name: "Ministério da Magia", 
        username: "MinisterioOficial", 
        img: "./assets/img/recrutamento ministerio magia.jpg", 
        link: "https://www.instagram.com/", 
        reason: "Popular"},
        {name: "Gilderoy Lockhart Bruxo e Professor", 
        username: "Gilderoy.Lockhart.Oficial", 
        img: "./assets/img/Gilderoy Lockhart.jpg", 
        link: "https://www.instagram.com/", 
        reason: "Segue você"},
        {name: "Nicholas", 
        username: "NickQuase", 
        img: "./assets/img/nick quase s.jpg", 
        link: "https://www.instagram.com/", 
        reason: "Seguido(a) por Murta e mais 21 pessoas"}
    ];
    //UI
    return (
        <div className="corpo-menu-lateral">
            <div class="titulo-corpo-menu-lateral">
                <div class="titulo-sugestoes-menu-lateral">
                    <p>Sugestões para você</p>
                </div>
                <div class="extras-sugestoes-menu-lateral">
                    <a href="https://www.instagram.com/">Ver Tudo</a>
                </div>
            </div>
            <div className="sugestoes-menu-lateral">
                {sugestoes.map(sugestao => <Suggestion name={sugestao.name} username={sugestao.username} img={sugestao.img} link={sugestao.link} reason={sugestao.reason} />)}
            </div>
        </div>
    );
}
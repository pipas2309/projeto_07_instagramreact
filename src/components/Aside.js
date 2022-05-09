//IMPORTS
import User from './aside/User';
import Suggestions from './aside/Suggestions';

//EXPORT
export default function Aside() {
    //Usuário
    const user = {name: "Harry Potter", username: "HarryOficial", img: "./assets/img/harry.jpg", link: "https://www.instagram.com/", title: "Bruxão"};

    //UI
    return (
        <div className="menu-lateral">
            <User name={user.name} username={user.username} img={user.img} link={user.link} title={user.title} /> 
            <Suggestions />
            <div class="baixo-menu-lateral">
                <div class="detalhes-menu-lateral">
                    <a href="https://www.instagram.com/">Sobre</a> •
                    <a href="https://www.instagram.com/">Ajuda</a> •
                    <a href="https://www.instagram.com/">Imprensa</a> •
                    <a href="https://www.instagram.com/">API</a> •
                    <a href="https://www.instagram.com/">Carreiras</a> •
                    <a href="https://www.instagram.com/">Privacidade</a> •
                    <a href="https://www.instagram.com/">Termos</a> •
                    <a href="https://www.instagram.com/">Localizações</a> •
                    <a href="https://www.instagram.com/">Contas mais relevantes</a> •
                    <a href="https://www.instagram.com/">Hashtags</a> •
                    <a href="https://www.instagram.com/">Idioma</a>
                    <p>© 2022 INSTAGRAM FROM META</p>
                </div>
            </div>
        </div>
    );
}
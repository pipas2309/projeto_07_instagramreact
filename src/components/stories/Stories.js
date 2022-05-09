//IMPORTS
import Story from './Story';

//EXPORT
export default function Stories() {
    //Array com os Stories
    const stories = [
        {name: "Hermione Granger", 
        username: "Hermione", 
        link: "https://www.instagram.com/", 
        img: "./assets/img/hermione.jpg"},
        {name: "Dobby", 
        username: "Dobby", 
        link: "https://www.instagram.com/", 
        img: "./assets/img/dobby.jpg"},
        {name: "Hagrid", 
        username: "Hagrid", 
        link: "https://www.instagram.com/", 
        img: "./assets/img/hagrid.jpg"},
        {name: "Jorge, o Mago", 
        username: "Jorge_W", 
        link: "https://www.instagram.com/", 
        img: "./assets/img/jorge.jpg"},
        {name: "Murta Isabel Warren", 
        username: "Murta", 
        link: "https://www.instagram.com/", 
        img: "./assets/img/murta.jpg"},
        {name: "Alvo", 
        username: "AS_Potter", 
        link: "https://www.instagram.com/", 
        img: "./assets/img/alvo severo.jpg"},
        {name: "Ronnie W", 
        username: "Ronn1e", 
        link: "https://www.instagram.com/", 
        img: "./assets/img/ronnie.jpg"},
        {name: "Neville Longbottom", 
        username: "Neville_L", 
        link: "https://www.instagram.com/", 
        img: "./assets/img/Neville Longbottom.jpg"}
    ];

    //UI
    return (
        <div className="menu-stories">
            <div className="stories">
            {stories.map(story => <Story name={story.name} username={story.username} link={story.link} img={story.img} />)}
            </div>
            <div class="botao-amigue" title="Setinha em manutenção">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
        </div>
    );
}
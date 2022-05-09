//EXPORTS
export default function Story(props) {
    //Modelo Objeto
    const {username, name, link, img} = props

    //UI
    return (
        <div className="story">
            <div class="story-imagem">
                <a href={link} title={name}>
                    <img class="borda-imagem-story" src="./assets/img/stories_background.png" />
                    <img class="imagem-usuario-story" src={img} />
                </a>
            </div>
            <div class="story-texto">
                <a href={link}>
                    {username}
                </a>
            </div>
        </div>
    );
}
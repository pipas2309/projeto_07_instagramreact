//EXPORT
export default function Suggestion(props) {
    //Esquema da props
    const {name, username, img, link, reason} = props;

    //UI
    return (
        <div className="sugestao-item-menu-lateral">
            <div class="usuario-sugestao-menu-lateral">
                <div class="foto-sugestao-menu-lateral">
                    <a href={link} title={name}>
                        <img src={img} alt={"Imagem de usuário de: " + name} />
                    </a>
                </div>
                <div class="texto-sugestao-menu-lateral">
                    <a href={link} title={name}>
                        {username}
                    </a>
                    <p>{reason}</p>
                </div>
            </div>
            <div class="opcao-sugestao-menu-lateral">
                <p title="é só um butaum" >Seguir</p>
            </div>
        </div>
    );
}
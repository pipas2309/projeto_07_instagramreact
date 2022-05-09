//EXPORT
export default function User(props) {
    //Esquema da props
    const {name, username, img, link, title} = props;

    //UI
    return (
        <div class="topo-menu-lateral">
            <div class="imagem-topo-menu-lateral">
                <a href={link}>
                    <img src={img} title={title} alt={"Imagem de Usuário de: " + name} />
                </a>
            </div>
            <div class="texto-topo-menu-lateral">
                <a href={link}>
                    {username}
                </a>
                <p>{name}</p>
            </div>
        </div>
    );
}
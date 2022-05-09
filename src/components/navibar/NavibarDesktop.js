export default function NavibarDesktop() {
    return (
        <div className="conteudo-menu-cima">
            <div className="logo">
                <a title="Cannon?" href="https://www.instagram.com">
                <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <div className="borda-menu-superior"></div>
                <a href="https://www.instagram.com"><img src="./assets/img/logo.png" title="Instagrão" alt="Logo" /></a>
            </div>
            <div className="buscador">
                <ion-icon name="search-outline"></ion-icon>
                <input title="Só faltou implementar o 'enter' " placeholder="Pesquisar" />
            </div>
            <div className="botoes-cima">
                <a href="https://www.youtube.com/watch?v=HHRk5t3Ns9s">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </a>
                <a href="https://tecnoblog.net/responde/como-fazer-bussola-no-minecraft/#:~:text=A%20b%C3%BAssola%20%C3%A9%20um%20item,importante%20para%20ir%20e%20voltar.">
                    <ion-icon name="compass-outline"></ion-icon>
                </a>
                <a href="http://www.prosangue.sp.gov.br/home/">
                    <ion-icon name="heart-outline"></ion-icon>
                </a>
                <a href="https://music.youtube.com/watch?v=2bJd46J7Cuo">
                    <ion-icon name="person-outline"></ion-icon>
                </a>
            </div>
        </div>
    );
}
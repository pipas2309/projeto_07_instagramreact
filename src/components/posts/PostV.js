//IMPORTS
import React from "react";

//EXPORTS
export default function Post(props) {
    //Estilo do props
    const {name, username, subname, link, imgUsuario, imgPost, video, likedName, likedImg, likedNumber, time} = props.postDetail;

    //Logica do Like-Coração

    //Criando 2 tipos de hooks 1 para a DIV saber quando está ou não curtida e
    //outra para alterar o nome do coração, que muda o estilo no ionicon.
    const [typeIonIcon, setTypeIonIcon] = React.useState("heart-outline");
    const [heartState, setHeartState] = React.useState("vazio");

    //Função de mão única quando clica na imagem
    function clicaNaImagem() {
        setTypeIonIcon("heart");
        setHeartState("curtido");
    }

    //Função que alterna, quando clica no coração
    function clicaNoCoracao(event) {
        if (event.currentTarget.classList.contains("curtido")) {
            setTypeIonIcon("heart-outline");
            setHeartState("vazio");
        } else {
            setTypeIonIcon("heart");
            setHeartState("curtido");
        }
    }


    //UI
    return (
        <div className="postagem">
            <div class="post-topo">
                <div class="imagem-post-topo">
                    <a href={link} title={name}>
                        <img class="borda-imagem" src="./assets/img/stories_background.png" alt="borda"/>
                        <img class="imagem-usuario" src={imgUsuario} alt={"Imagem de usuário de: " + name}/>
                    </a>
                </div>
                <div class="texto-post-topo">
                    <a href={link}>{username}</a>
                    <a href={link}>{subname}</a>
                </div>
                <div class="extra-post-topo">
                    <a href="https://www.instagram.com/">
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </a>
                </div>
            </div>
            <div class="post-imagem">
                <video controls muted autoplay onClick={clicaNaImagem}>
                    <source src={video + "mp4"} type="video/mp4" />
                    <source src={video + "ogv"} type="video/ogg" />
                </video>
            </div>
            <div class="post-baixo">
                <div class="post-barra-interacao">
                    <div class="ion-interacao" onClick={clicaNoCoracao} className={heartState}>                    
                            <ion-icon name={typeIonIcon} class={"md hydrated " + heartState}></ion-icon>                           
                    </div>
                    <div class="ion-interacao">
                        <a href="https://www.instagram.com/">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </a>                            
                    </div>
                    <div class="ion-interacao">
                        <a href="https://www.instagram.com/">
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </a>                            
                    </div>
                    <div class="ion-interacao">  
                        <a href="https://www.instagram.com/">
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </a>
                    </div>
                </div>
                <div class="post-curtido">
                    <div class="imagem-post-curtido">
                        <a href="https://www.instagram.com/">
                            <img src={likedImg} alt={likedName} />
                        </a>
                    </div>
                    <div class="texto-post-curtido">
                        <p>Curtido por <a href="https://www.instagram.com/">{likedName}</a> e <a href="https://www.instagram.com/">{likedNumber}</a></p>
                    </div>
                </div>                        
                <div class="post-comentarios">
                    <div class="post-comentario">
                        <div class="post-comentario-usuario">
                            <a href="https://www.instagram.com/">
                                Jorge_W
                            </a>
                        </div>
                        <div class="post-comentario-texto">
                            <p>O Ronnie ainda é assim ou já piorou? huehue</p>
                        </div>
                    </div>
                    <div title="Carma, tá funfando ainda ñ" class="post-outros-comentarios">
                        <p>Ver todos os 13 comentários</p>
                    </div>
                    <div class="post-comentario">
                        <div class="post-comentario-usuario">
                            <a href="https://www.instagram.com/">
                                Harry
                            </a>
                        </div>
                        <div class="post-comentario-texto">
                            <p>Pelo menos o Ronnie não se explodiu, né Simas?</p>
                        </div>
                    </div>
                    <div class="post-comentario">
                        <div class="post-comentario-usuario">
                            <a href="https://www.instagram.com/">
                                Luna
                            </a>
                        </div>
                        <div class="post-comentario-texto">
                            <p>Booom</p>
                        </div>
                    </div>
                </div>
                <div class="post-tempo">
                    <a href="https://www.instagram.com/">
                        {time}
                    </a>
                </div>
                <div class="borda-comente-aqui"></div>
                <div class="post-comente-aqui">
                    <div class="post-comente-texto">
                        <div title="Emoji" class="comente-emoji">
                            <ion-icon name="happy-outline"></ion-icon>
                        </div>
                        <div class="comente-texto">
                            <input placeholder="Adicione um comentário..." type="text" />
                        </div>
                    </div>
                    <div class="post-comente-publicar">
                        <p title="Já já acaba a greve" >Publicar</p>
                    </div>
                </div>                             
            </div>
        </div>
    );
}
//EXPORTS
export default function Post(props) {
    //Estilo do props
    let {name, username, subname, link, imgUsuario, imgPost, likedName, likedImg, likedNumber, time} = props.postDetail;

    let temE = (" e ");
    let comentario = <div className="post-comentarios"></div>;
    //Logica dos comentários - meio gambiarra
    if(username === "Minerva") {
        comentario = 
            (<div class="post-comentarios">
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            Hagrid
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>Conheci meus melhores amigos em Hogwarts</p>
                    </div>
                </div>
                <div title="Carma, tá funfando ainda ñ" class="post-outros-comentarios">
                    <p>Ver todos os 3 comentários</p>
                </div>                            
            </div>);
        temE = (" e ");
        jahFoi++;
    };
    if(username === "Dolores_Umbrigde") {
        temE = ("");
        comentario = 
            (<div class="post-comentarios">
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            Dolores_Umbridge
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>Não vejo a hora de voltar a trabalhar em Hogwarts</p>
                    </div>
                </div>                            
            </div>);
        jahFoi++;
    }
    if(username === "Ronn1e") {
        temE = (" e ");
        comentario = 
(            <div class="post-comentarios">
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            Jorge_W
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>Igualzinho ao Malfoy</p>
                    </div>
                </div>
                <div title="Carma, tá funfando ainda ñ" class="post-outros-comentarios">
                    <p>Ver todos os 4 comentários</p>
                </div>
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            Harry
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>kkkkkkkk</p>
                    </div>
                </div>                            
            </div>)
        jahFoi++;
    }
    if(username === "Lucius_Malfoy") {
        temE = " e ";
        comentario = (
            <div class="post-comentarios">
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            Lucius_Malfoy
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>Meu Boneco já está disponível para compra</p>
                    </div>
                </div>
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            Lucius_Malfoy
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>Exclusivo para bruxos de bom gosto</p>
                    </div>
                </div>
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            Dolores_Umbridge
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>Também quero o meu</p>
                    </div>
                </div>
            </div>)
        jahFoi++;
    }
    if(username === "Luna") {
        temE = (" e ");
        comentario = (
            <div class="post-comentarios">
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            HarryOficial
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>Mas meus óculos eram realmente bonitos kkkkk</p>
                    </div>
                </div>
                <div title="Carma, tá funfando ainda ñ" class="post-outros-comentarios">
                    <p>Ver todos os 7 comentários</p>
                </div>
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            DracoM
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>Pff...</p>
                    </div>
                </div>
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            Luna
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>Sabe que eu gosto de você, né Harry?</p>
                    </div>
                </div>
            </div>)
        jahFoi++;
    }
    if(username === "HarryOficial") {
        temE = (" e ");
        comentario = (
            <div class="post-comentarios">
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            HarryOficial
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>Saudades...</p>
                    </div>
                </div>
                <div title="Carma, tá funfando ainda ñ" class="post-outros-comentarios">
                    <p>Ver todos os 6 comentários</p>
                </div>
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            Hermione
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>♥</p>
                    </div>
                </div>
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            Ronn1e
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>Ele era legal, mesmo eu tendo um pouco de medo</p>
                    </div>
                </div>
            </div>)
        jahFoi++;
    }
    if(username === "DracoM") {
        temE = (" e ");
        comentario = (
            <div class="post-comentarios">
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            Jorge_W
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>Gatão</p>
                    </div>
                </div>
                <div class="post-comentario">
                    <div class="post-comentario-usuario">
                        <a href="https://www.instagram.com/">
                            DracoM
                        </a>
                    </div>
                    <div class="post-comentario-texto">
                        <p>Babaca</p>
                    </div>
                </div>
            </div>)
        jahFoi++;
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
                <img src={imgPost} alt={"Imagem de: " + name} />
            </div>
            <div class="post-baixo">
                <div class="post-barra-interacao">
                    <div class="ion-interacao">
                        <a href="https://www.instagram.com/">
                            <ion-icon name="heart-outline"></ion-icon>
                        </a>                            
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
                        <p>Curtido por <a href="https://www.instagram.com/">{likedName}</a> {temE} <a href="https://www.instagram.com/">{likedNumber}</a></p>
                    </div>
                </div>                        
                {comentario}
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
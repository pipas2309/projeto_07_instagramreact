//IMPORTS
import Post from './Post';
import PostV from './PostV';

//EXPORTS
export default function Posts() {
    //Array do objeto com as Postagens
    const postagens =[
        {name: "Minerva", 
        username: "Minerva", 
        subname: "Hogwarts - Escola de Magia", 
        link: "https://www.instagram.com/", 
        imgUsuario: "./assets/img/minerva.jpg", 
        imgPost: "./assets/img/hogwarts.webp", 
        likedName: "Hagrid", 
        likedImg: "./assets/img/hagrid.jpg", 
        likedNumber: "outras 1.429 pessoas", 
        time: "HÁ 4 HORAS", 
        },
        {name: "Dolores Umbrigde", 
        username: "Dolores_Umbrigde", 
        subname: "", 
        link: "https://www.instagram.com/", 
        imgUsuario: "./assets/img/dolores.jpg", 
        imgPost: "./assets/img/dolores umbrigde post.jpg", 
        likedName: "Dolores_Umbrigde", 
        likedImg: "./assets/img/dolores.jpg", 
        likedNumber: "", 
        time: "HÁ 7 HORAS", 
        },
        {name: "Ronnie", 
        username: "Ronn1e", 
        subname: "Rei da Magia", 
        link: "https://www.instagram.com/", 
        imgUsuario: "./assets/img/ronnie.jpg", 
        imgPost: "./assets/img/meme post.jpg", 
        likedName: "Jorge_W", 
        likedImg: "./assets/img/jorge.jpg", 
        likedNumber: "outras 42 pessoas", 
        time: "HÁ 13 HORAS", 
        },
        {name: "Lucius Malfoy", 
        username: "Lucius_Malfoy", 
        subname: "Ministério da Magia", 
        link: "https://www.instagram.com/", 
        imgUsuario: "./assets/img/lucius.jpg", 
        imgPost: "./assets/img/lucius post.webp", 
        likedName: "Dolores_Umbridge", 
        likedImg: "./assets/img/dolores.jpg", 
        likedNumber: "outras 2 pessoas", 
        time: "HÁ 1 DIA", 
        },
        {name: "Luna", 
        username: "Luna", 
        subname: "", 
        link: "https://www.instagram.com/", 
        imgUsuario: "./assets/img/luna.jpg", 
        imgPost: "./assets/img/meme post 3.jpg", 
        likedName: "HarryOficial", 
        likedImg: "./assets/img/harry.jpg", 
        likedNumber: "outras 121 pessoas", 
        time: "HÁ 1 DIA", 
        },
        {name: "Bruxão", 
        username: "HarryOficial", 
        subname: "", 
        link: "https://www.instagram.com/", 
        imgUsuario: "./assets/img/harry.jpg", 
        imgPost: "./assets/img/sirius harry post.jpg", 
        likedName: "Hermione", 
        likedImg: "./assets/img/hermione.jpg", 
        likedNumber: "outras 23 pessoas", 
        time: "HÁ 1 DIA", 
        },
        {name: "Draco", 
        username: "DracoM", 
        subname: "", 
        link: "https://www.instagram.com/", 
        imgUsuario: "./assets/img/malfoy.jpg", 
        imgPost: "./assets/img/draco post.jpg", 
        likedName: "Gregory", 
        likedImg: "./assets/img/gregory.jpg", 
        likedNumber: "outras 17 pessoas", 
        time: "HÁ 1 DIA", 
        },
        {name: "Hermione Granger", 
        username: "Hermione", 
        subname: "", 
        link: "https://www.instagram.com/", 
        imgUsuario: "./assets/img/hermione.jpg", 
        imgPost: "", 
        video: "./assets/video/Wingardium Leviosa.", 
        likedName: "Jorge_W", 
        likedImg: "./assets/img/jorge.jpg", 
        likedNumber: "outras 58 pessoas", 
        time: "HÁ 2 DIA", 
        },
    ];

    //UI
    return (
        <div className="postagens">
            {postagens.map(function(post) {
                if(post.imgPost){
                    return <Post postDetail={post} />
                } else {
                    return <PostV postDetail={post} />
                } 
            })}
        </div>
    );
}
//IMPORTS
import Stories from './stories/Stories';
import Posts from './posts/Posts';

//EXPORTS
export default function Pagina() {
    return (
        <div className="conteudo-pagina">
            <Stories />
            <Posts />
        </div>
    );
}
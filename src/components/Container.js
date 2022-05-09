import Pagina from './Pagina';
import Aside from './Aside';

export default function Container() {
    return (
        <div className="corpo">
            <Pagina />
            <Aside />
        </div>
    );
}
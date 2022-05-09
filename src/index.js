//IMPORT REACT
import ReactDOM from 'react-dom';
import Navibar from './components/navibar/navibar'

//UI
function App() {
    return (
        <div>
            <Navibar />
            <Conteiner />
            <MobileBar />
        </div>
    );
}

ReactDOM.render(App(), document.querySelector(".root"));
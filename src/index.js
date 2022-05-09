//IMPORTS
import ReactDOM from 'react-dom';
import Navibar from './components/Navibar';
import Container from './components/Container';
import Mobilebar from './components/Mobilebar';

//UI
function App() {
    return (
        <div className="Giggs-e-Mary">
            <Navibar />
            <Container />
            <Mobilebar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
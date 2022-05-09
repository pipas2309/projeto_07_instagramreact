//IMPORTS
import ReactDOM from 'react-dom';
import Navibar from './components/Navibar';
import Container from './components/Container';
import Mobilebar from './components/Mobilebar';

//UI
function App() {
    return (
        <div>
            <Navibar />
            <Container />
            {/* <Mobilebar /> */}
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
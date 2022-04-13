import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import { CityProvider } from "./context/CityContext";

function App() {
  return (
    <CityProvider>
      <div className="App">
        <Container />
      </div>
    </CityProvider>
  );
}

export default App;

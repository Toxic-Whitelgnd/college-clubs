import './App.css';
import Header from './Page_content/Header';
import { BrowserRouter as Router } from "react-router-dom"
import Middlesection from './Page_content/MiddleSection';

function App() {
  return (
    <div className="App">
      {/* start code here */}
      <Router>
        <Header />
        <Middlesection />
      </Router>

    </div>
  );
}

export default App;

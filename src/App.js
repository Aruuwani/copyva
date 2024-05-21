import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Homepage from "./Components/Homepage/homepage";
import Header from "./Components/Header/header";
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
     <Router>
     <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          
        </Routes>  
        <Footer />
  </Router>
  </div>
  )
 
}

export default App;

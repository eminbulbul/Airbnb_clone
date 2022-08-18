import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";s

// make another page for router 
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
